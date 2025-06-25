import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import type { IRootStackParamList } from '../../hook/rootStack';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { styles } from './styles/styles';

type WelcomeNavigationProp = StackNavigationProp<IRootStackParamList>;

type Props = {
  navigation: WelcomeNavigationProp;
};

type UserType = 'usuario' | 'gestor';

type Meal = {
  id: string;
  title: string;
  value: string;
};

const Welcome: React.FC<Props> = ({ navigation }) => {
  const [userType, setUserType] = useState<UserType>('usuario');
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'meals'));
        const mealData: Meal[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          value: doc.data().value,
        }));
        setMeals(mealData);
      } catch (error) {
        console.error('Erro ao buscar refeições:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const handleContinue = () => {
    if (userType === 'usuario') {
      navigation.navigate('MenuUsuario')
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Escolha como você quer entrar:</Text>

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
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styleProduto = StyleSheet.create({
  option: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: '#F97316',
  },
});

export default Welcome;
