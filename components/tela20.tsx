import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { AntDesign } from "@expo/vector-icons";

const days = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira"];

const menuData: Record<string, string[]> = {
  "Segunda-Feira": [
    "Café da manhã: Pão, Café, Manteiga e Ovos",
    "Lanche da manhã: Sanduíche Natural e Suco de Laranja",
    "Almoço: Strogonoff de Frango, Feijão, Arroz, Salada",
    "Jantar: Sopa de Laranja e Suco de Abacaxi"
  ],
  "Terça-Feira": [
    "Café da manhã: Pão de queijo, Café, Leite",
    "Lanche da manhã: Iogurte e Granola",
    "Almoço: Arroz, Feijão, Frango grelhado, Salada verde, Suco de Uva",
    "Jantar: Biscoito integral e Chá"
  ],
  "Quarta-Feira": [
    "Café da manhã: Torradas, Café, Leite com Achocolatado",
    "Lanche da manhã: Frutas e Suco de Laranja",
    "Almoço: Arroz, Feijão, Carne assada, Salada de legumes, Suco de Limão",
    "Jantar: Pão doce e Chá"
  ],
  "Quinta-Feira": [
    "Café da manhã: Croissant, Café, Leite",
    "Lanche da manhã: Bolo de cenoura e Suco de Maracujá",
    "Almoço: Arroz, Feijão, Peixe grelhado, Salada tropical, Suco de Manga",
    "Jantar: Biscoito de polvilho e Suco de Goiaba"
  ],
  "Sexta-Feira": [
    "Café da manhã: Pão integral, Café, Leite",
    "Lanche da manhã: Iogurte natural e Frutas",
    "Almoço: Arroz, Feijão, Frango à parmegiana, Salada de folhas, Suco de Abacaxi",
    "Jantar: Bolo de chocolate e Chá"
  ]
};

type RootStackParamList = {
  Tela18: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const Tela20: React.FC<Props> = ({ navigation }) => {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const toggleDay = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Tela18')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Cardápio da Semana</Text>
        {days.map((day) => (
          <View key={day} style={styles.dayContainer}>
            <TouchableOpacity
              style={[styles.dayButton, expandedDay === day && styles.expanded]}
              onPress={() => toggleDay(day)}
            >
              <Text style={styles.dayText}>{day}</Text>
              <MaterialIcons
                name={expandedDay === day ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
            {expandedDay === day && (
              <View style={styles.menuContainer}>
                {menuData[day].map((item, index) => {
                  const [meal, foods] = item.split(': ');
                  return (
                    <View key={index} style={styles.mealItem}>
                      <View style={styles.mealHeader}>
                        <MaterialIcons name="restaurant" size={20} color="#FFA500" />
                        <Text style={styles.mealTitle}>{meal}</Text>
                      </View>
                      <View style={styles.foodsContainer}>
                        {foods.split(', ').map((food, foodIndex) => (
                          <View key={foodIndex} style={styles.foodItem}>
                            <View style={styles.foodDot} />
                            <Text style={styles.foodText}>{food}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  dayContainer: {
    marginBottom: 15,
  },
  dayButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  expanded: {
    backgroundColor: "#FF8C00",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  menuContainer: {
    backgroundColor: "#FFF3E0",
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  mealItem: {
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
  },
  mealHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
  foodsContainer: {
    marginLeft: 28,
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  foodDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FFA500",
    marginRight: 8,
  },
  foodText: {
    fontSize: 14,
    color: "#666",
  },
});

export default Tela20;



