import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Tela1: undefined;
  Tela5: undefined;
  Tela6: undefined;
  Tela18: undefined;
};

type Tela5NavigationProp = StackNavigationProp<RootStackParamList, 'Tela5'>;

type Props = {
  navigation: Tela5NavigationProp;
};

type UserType = 'usuario' | 'gestor';

const Tela5: React.FC<Props> = ({ navigation }) => {
  const [userType, setUserType] = useState<UserType>('usuario');

  const handleContinue = async () => {
    await AsyncStorage.setItem("userType", userType);
    if (userType === 'usuario') {
      navigation.navigate('Tela18');
    } else {
      navigation.navigate('Tela6');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#222" />
      </TouchableOpacity>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Escolha qual a sua forma de entrada.</Text>

      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={[styles.profileBox, userType === 'usuario' && styles.profileBoxActive]}
          onPress={() => setUserType('usuario')}
        >
          <MaterialIcons name="person-outline" size={36} color={userType === 'usuario' ? '#F97316' : '#222'} />
          <Text style={[styles.profileText, userType === 'usuario' && styles.profileTextActive]}>Usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.profileBox, userType === 'gestor' && styles.profileBoxActive]}
          onPress={() => setUserType('gestor')}
        >
          <MaterialIcons name="supervisor-account" size={36} color={userType === 'gestor' ? '#F97316' : '#222'} />
          <Text style={[styles.profileText, userType === 'gestor' && styles.profileTextActive]}>Gestor</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
    gap: 16,
  },
  profileBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 24,
    borderWidth: 1.5,
    borderColor: '#EEE',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    elevation: 2,
  },
  profileBoxActive: {
    borderColor: '#F97316',
    backgroundColor: '#FFF7ED',
    elevation: 4,
    shadowColor: '#F97316',
  },
  profileText: {
    marginTop: 8,
    fontSize: 16,
    color: '#222',
    fontWeight: 'bold',
  },
  profileTextActive: {
    color: '#F97316',
  },
  continueButton: {
    backgroundColor: '#F97316',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 4,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Tela5;


