import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

type LegendItem = {
  name: string;
  value: string;
  color: string;
};

type MealData = {
  image: ImageSourcePropType;
  legend: LegendItem[];
};

type NutritionalData = {
  [key: string]: MealData;
};

const nutritionalData: NutritionalData = {
  'Café da manhã': {
    image: require('../assets/tela24.png'), 
    legend: [
      { name: 'Carboidratos', value: '40%', color: '#2ECC71' },
      { name: 'Proteínas', value: '30%', color: '#E74C3C' },
      { name: 'Gorduras totais', value: '20%', color: '#3498DB' },
      { name: 'Fibra alimentar', value: '5%', color: '#F1C40F' },
      { name: 'Valor energético', value: '5%', color: '#E67E22' },
    ]
  },
  'Almoço': {
    image: require('../assets/tela24.png'),
    legend: [
        { name: 'Gorduras totais', value: '20%', color: '#3498DB' },
        { name: 'Fibra alimentar', value: '15%', color: '#F1C40F' },
        { name: 'Valor energético', value: '5%', color: '#E67E22' },
        { name: 'Proteínas', value: '25%', color: '#E74C3C' },
        { name: 'Carboidratos', value: '35%', color: '#2ECC71' },
    ]
  },
  'Jantar': {
    image: require('../assets/tela24.png'),
    legend: [
      { name: 'Proteínas', value: '35%', color: '#E74C3C' },
      { name: 'Carboidratos', value: '30%', color: '#2ECC71' },
      { name: 'Gorduras totais', value: '15%', color: '#3498DB' },
      { name: 'Fibra alimentar', value: '10%', color: '#F1C40F' },
      { name: 'Valor energético', value: '10%', color: '#E67E22' },
    ]
  }
};

const meals = ['Café da manhã', 'Almoço', 'Jantar'];

const Tela24 = () => {
  const navigation = useNavigation();
  const [currentMealIndex, setCurrentMealIndex] = useState(1);

  const handleNextMeal = () => {
    setCurrentMealIndex((prevIndex) => (prevIndex + 1) % meals.length);
  };

  const handlePrevMeal = () => {
    setCurrentMealIndex((prevIndex) => (prevIndex - 1 + meals.length) % meals.length);
  };

  const currentMealName = meals[currentMealIndex];
  const currentMealData = nutritionalData[currentMealName];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Valor nutricional de acordo com o dia da semana</Text>
      <Text style={styles.subtitle}>Segunda-Feira</Text>

      <View style={styles.chartContainer}>
        <Image
          source={currentMealData.image}
          style={styles.pieChart}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.legendContainer}>
        {currentMealData.legend.map((item: LegendItem, index: number) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.name}</Text>
            <Text style={styles.legendValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.mealSelector}>
        <TouchableOpacity onPress={handlePrevMeal}>
          <AntDesign name="left" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.mealButton}>
            <Text style={styles.mealButtonText}>{currentMealName}</Text>
        </View>
        <TouchableOpacity onPress={handleNextMeal}>
          <AntDesign name="right" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F97316',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pieChart: {
    width: 200,
    height: 200,
  },
  legendContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    flex: 1,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  legendColor: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 15,
  },
  legendText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  legendValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
  },
  mealSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  mealButton: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  mealButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F97316',
  },
});

export default Tela24;