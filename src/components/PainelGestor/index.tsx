import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { IRootStackParamList } from '../../hook/rootStack';


type Props = {
  navigation: StackNavigationProp<IRootStackParamList>;
};

type UserType = 'usuario' | 'gestor';

const PainelGestor: React.FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [userType, setUserType] = useState<UserType>('usuario');
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const loadUserData = async () => {
      const savedUserType = await AsyncStorage.getItem("userType");
      const savedUserName = await AsyncStorage.getItem("userName");
      
      if (savedUserType) {
        setUserType(savedUserType as UserType);
      }
      if (savedUserName) {
        setUserName(savedUserName);
      }
    };
    loadUserData();
  }, []);

  // Opções para o usuário comum (sem perfil)
  const userOptions = [
    { id: 'feedback', label: 'Feedback', icon: 'rate-review' as const, screen: 'Feedback' as const },
    { id: 'valor', label: 'Valor nutricional', icon: 'bar-chart' as const, screen: 'Tela21' as const },
    { id: 'cardapio', label: 'Cardápio semanal', icon: 'restaurant-menu' as const, screen: 'Tela20' as const }
  ];

  // Opções para gestor (mantém perfil)
  const gestorOptions = [
    { id: 'perfil', label: 'Perfil do Gestor', icon: 'person' as const, screen: 'Tela22' as const },
    { id: 'relatorios', label: 'Relatórios', icon: 'assessment' as const, screen: 'Feedback' as const },
    { id: 'cardapio', label: 'Gerenciar Cardápio', icon: 'restaurant-menu' as const, screen: 'Tela20' as const },
    { id: 'usuarios', label: 'Gerenciar Usuários', icon: 'people' as const, screen: 'Tela21' as const }
  ];

  const currentOptions = userType === 'gestor' ? gestorOptions : userOptions;

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Welcome')}>
        <AntDesign name="arrowleft" size={28} color="#222" />
      </TouchableOpacity>
      <Text style={styles.title}>
        Bem-vindo{userName ? `, ${userName}` : ''}!
      </Text>
      <Text style={styles.subtitle}>
        {userType === 'gestor' ? 'Painel de Gestão' : 'O que você vai fazer hoje?'}
      </Text>
      <Text style={styles.userTypeIndicator}>
        Acessando como: <Text style={styles.userTypeText}>{userType === 'gestor' ? 'Gestor' : 'Usuário'}</Text>
      </Text>
      
      <View style={styles.grid}>
        {currentOptions.map(option => (
          <TouchableOpacity
            key={option.id}
            style={[styles.button, selected === option.id && styles.selectedButton]}
            onPress={() => {
              setSelected(option.id);
              navigation.navigate(option.screen);
            }}
          >
            <MaterialIcons name={option.icon} size={50} color={selected === option.id ? '#FFBF00' : '#555'} />
            <Text style={styles.label}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center'
  },
  userTypeIndicator: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center'
  },
  userTypeText: {
    fontWeight: 'bold',
    color: '#F97316'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20
  },
  button: {
    width: 120,
    height: 120,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 10
  },
  selectedButton: {
    backgroundColor: '#fff3e0',
    borderColor: '#F97316',
    borderWidth: 2
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    textAlign: 'center'
  }
});

export default PainelGestor;
