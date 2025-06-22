import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tela8: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    (navigation as any).navigate('Tela18'); // Navega para o painel principal
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="party-popper" size={100} color="#F97316" />
      
      <Text style={styles.title}>Parabéns!</Text>
      <Text style={styles.subtitle}>Sua conta está completa, aproveite.</Text>

      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startButtonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
  },
  startButton: {
    backgroundColor: '#F97316',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  startButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Tela8;

