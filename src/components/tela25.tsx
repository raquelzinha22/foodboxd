import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Tela18: undefined;
  Tela19: { mealName: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

type Meal = {
  id: string;
  name: string;
  description: string;
  time: string;
  status: 'active' | 'expired' | 'upcoming';
};

type MealCardProps = {
  meal: Meal;
  onPress: (mealName: string) => void;
};

const initialMeals: Omit<Meal, 'status'>[] = [
  { id: '1', name: 'Café da manhã', description: 'Pão, Café, Nescau, Ovos', time: '08:00 até 08:30' },
  { id: '2', name: 'Lanche da manhã', description: 'Salgado folheado e Suco de Laranja', time: '09:30 até 09:50' },
  { id: '3', name: 'Almoço', description: 'Strogonoff de frango, Feijoada, Salada, Arroz...', time: '11:30 até 12:50' },
  { id: '4', name: 'Lanche da tarde', description: 'Bolo de Laranja e Suco de Abacaxi', time: '15:00 até 15:20' },
];

const getMealStatus = (timeRange: string): 'active' | 'expired' | 'upcoming' => {
  // Retorna 'active' para todas as refeições para mantê-las desbloqueadas.
  return 'active';

  /* Lógica de tempo original:
  const [startTimeStr, endTimeStr] = timeRange.replace(/ até /g, ' ').split(' ');
  const now = new Date();
  
  const [startHour, startMinute] = startTimeStr.split(':').map(Number);
  const startTime = new Date();
  startTime.setHours(startHour, startMinute, 0, 0);

  const [endHour, endMinute] = endTimeStr.split(':').map(Number);
  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  if (now < startTime) {
    return 'upcoming';
  } else if (now >= startTime && now <= endTime) {
    return 'active';
  } else {
    return 'expired';
  }
  */
};

const MealCard: React.FC<MealCardProps> = ({ meal, onPress }) => {
  const statusStyles = {
    active: { backgroundColor: '#FFF7ED', borderColor: '#F97316' },
    expired: { backgroundColor: '#FEF2F2', borderColor: '#DC2626' },
    upcoming: { backgroundColor: '#F8FAFC', borderColor: '#94A3B8' },
  };

  const textStyles = {
    active: { color: '#F97316' },
    expired: { color: '#DC2626' },
    upcoming: { color: '#64748B' },
  };

  const isClickable = meal.status === 'active';

  return (
    <TouchableOpacity 
      style={[styles.card, statusStyles[meal.status]]}
      onPress={() => isClickable && onPress(meal.name)}
      disabled={!isClickable}
    >
      <View style={styles.cardHeader}>
        <Text style={[styles.cardTitle, textStyles[meal.status]]}>{meal.name}</Text>
        {meal.status === 'active' && <AntDesign name="plus" size={16} color="#F97316" />}
      </View>
      <Text style={styles.cardDescription}>{meal.description}</Text>
      <View style={styles.cardFooter}>
        <AntDesign name="clockcircleo" size={14} color={textStyles[meal.status].color} />
        <Text style={[styles.cardTime, textStyles[meal.status]]}>{meal.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Tela25: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const updatedMeals = initialMeals.map(meal => ({
      ...meal,
      status: getMealStatus(meal.time),
    }));
    setMeals(updatedMeals);
  }, []);

  const handleSelectMeal = (mealName: string) => {
    navigation.navigate('Tela19', { mealName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Tela18')} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refeições de hoje:</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {meals.map(meal => (
          <MealCard key={meal.id} meal={meal} onPress={handleSelectMeal} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1.5,
    marginBottom: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTime: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Tela25; 