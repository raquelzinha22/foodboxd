import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Tela18: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Tela28: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/splash-icon.png')} // Usando uma imagem de exemplo
        style={styles.image}
      />
      <Text style={styles.title}>Feito! ✨</Text>
      <Text style={styles.subtitle}>Seu comentário foi enviado com sucesso!</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Tela18')}
      >
        <Text style={styles.buttonText}>Voltar à tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#F97316',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Tela28; 