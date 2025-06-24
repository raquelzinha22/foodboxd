import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { AntDesign } from "@expo/vector-icons";
import Svg, { Path, G, Text as SvgText } from 'react-native-svg';
import type { IRootStackParamList } from "../hook/rootStack";

const days = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira"];

const menuData: Record<string, { meal: string; nutrients: { x: string; y: number }[] }[]> = {
  "Segunda-Feira": [
    {
      meal: "Café da manhã", nutrients: [
        { x: "Gorduras totais", y: 20 },
        { x: "Fibra alimentar", y: 10 },
        { x: "Valor energético", y: 20 },
        { x: "Proteínas", y: 15 },
        { x: "Carboidratos", y: 35 }
      ]
    },
    {
      meal: "Lanche da manhã", nutrients: [
        { x: "Gorduras totais", y: 15 },
        { x: "Fibra alimentar", y: 15 },
        { x: "Valor energético", y: 20 },
        { x: "Proteínas", y: 15 },
        { x: "Carboidratos", y: 35 }
      ]
    },
    {
      meal: "Almoço", nutrients: [
        { x: "Gorduras totais", y: 25 },
        { x: "Fibra alimentar", y: 10 },
        { x: "Valor energético", y: 20 },
        { x: "Proteínas", y: 20 },
        { x: "Carboidratos", y: 25 }
      ]
    },
    {
      meal: "Jantar", nutrients: [
        { x: "Gorduras totais", y: 15 },
        { x: "Fibra alimentar", y: 20 },
        { x: "Valor energético", y: 20 },
        { x: "Proteínas", y: 15 },
        { x: "Carboidratos", y: 30 }
      ]
    }
  ],
  "Terça-Feira": [
    { meal: "Café da manhã", nutrients: [{ x: "Proteína", y: 22 }, { x: "Carbo", y: 48 }, { x: "Gordura", y: 30 }] },
    { meal: "Lanche da manhã", nutrients: [{ x: "Proteína", y: 18 }, { x: "Carbo", y: 52 }, { x: "Gordura", y: 30 }] },
    { meal: "Almoço", nutrients: [{ x: "Proteína", y: 28 }, { x: "Carbo", y: 42 }, { x: "Gordura", y: 30 }] },
    { meal: "Lanche da tarde", nutrients: [{ x: "Proteína", y: 15 }, { x: "Carbo", y: 55 }, { x: "Gordura", y: 30 }] }
  ],
  "Quarta-Feira": [
    { meal: "Café da manhã", nutrients: [{ x: "Proteína", y: 20 }, { x: "Carbo", y: 50 }, { x: "Gordura", y: 30 }] },
    { meal: "Lanche da manhã", nutrients: [{ x: "Proteína", y: 15 }, { x: "Carbo", y: 55 }, { x: "Gordura", y: 30 }] },
    { meal: "Almoço", nutrients: [{ x: "Proteína", y: 32 }, { x: "Carbo", y: 38 }, { x: "Gordura", y: 30 }] },
    { meal: "Lanche da tarde", nutrients: [{ x: "Proteína", y: 18 }, { x: "Carbo", y: 52 }, { x: "Gordura", y: 30 }] }
  ],
  "Quinta-Feira": [
    { meal: "Café da manhã", nutrients: [{ x: "Proteína", y: 18 }, { x: "Carbo", y: 52 }, { x: "Gordura", y: 30 }] },
    { meal: "Lanche da manhã", nutrients: [{ x: "Proteína", y: 20 }, { x: "Carbo", y: 50 }, { x: "Gordura", y: 30 }] },
    { meal: "Almoço", nutrients: [{ x: "Proteína", y: 30 }, { x: "Carbo", y: 40 }, { x: "Gordura", y: 30 }] },
    { meal: "Lanche da tarde", nutrients: [{ x: "Proteína", y: 15 }, { x: "Carbo", y: 55 }, { x: "Gordura", y: 30 }] }
  ],
  "Sexta-Feira": [
    { meal: "Café da manhã", nutrients: [{ x: "Proteína", y: 22 }, { x: "Carbo", y: 48 }, { x: "Gordura", y: 30 }] },
    { meal: "Lanche da manhã", nutrients: [{ x: "Proteína", y: 18 }, { x: "Carbo", y: 52 }, { x: "Gordura", y: 30 }] },
    { meal: "Almoço", nutrients: [{ x: "Proteína", y: 28 }, { x: "Carbo", y: 42 }, { x: "Gordura", y: 30 }] },
    { meal: "Lanche da tarde", nutrients: [{ x: "Proteína", y: 20 }, { x: "Carbo", y: 50 }, { x: "Gordura", y: 30 }] }
  ]
};

type Props = {
  navigation: StackNavigationProp<IRootStackParamList>;
};

const PieChart = ({ data, size = 200 }: { data: { x: string; y: number }[], size?: number }) => {
  const colors = {
    "Gorduras totais": "#0000FF",
    "Fibra alimentar": "#FFD700",
    "Valor energético": "#FFA500",
    "Proteínas": "#FF0000",
    "Carboidratos": "#00FF00"
  };

  const total = data.reduce((sum, item) => sum + item.y, 0);
  let startAngle = 0;

  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <G transform="translate(100, 100)">
        {data.map((item, index) => {
          const angle = (item.y / total) * 360;
          const endAngle = startAngle + angle;

          // Cálculo do arco
          const startRad = (startAngle - 90) * Math.PI / 180;
          const endRad = (endAngle - 90) * Math.PI / 180;

          const x1 = 80 * Math.cos(startRad);
          const y1 = 80 * Math.sin(startRad);
          const x2 = 80 * Math.cos(endRad);
          const y2 = 80 * Math.sin(endRad);

          const largeArcFlag = angle > 180 ? 1 : 0;

          const path = `M 0 0 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

          const result = (
            <G key={index}>
              <Path
                d={path}
                fill={colors[item.x as keyof typeof colors]}
                stroke="white"
                strokeWidth="2"
              />
            </G>
          );

          startAngle = endAngle;
          return result;
        })}
      </G>
    </Svg>
  );
};

const Tela21: React.FC<Props> = ({ navigation }) => {
  const [currentDay, setCurrentDay] = useState("Segunda-Feira");
  const [currentMealIndex, setCurrentMealIndex] = useState(0);

  const currentMeal = menuData[currentDay][currentMealIndex];

  const handlePrevMeal = () => {
    if (currentMealIndex > 0) {
      setCurrentMealIndex(currentMealIndex - 1);
    }
  };

  const handleNextMeal = () => {
    if (currentMealIndex < menuData[currentDay].length - 1) {
      setCurrentMealIndex(currentMealIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('PainelGestor')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Valor nutricional de acordo com o dia da semana</Text>
          <Text style={styles.dayText}>{currentDay}</Text>
        </View>

        <View style={styles.chartContainer}>
          <PieChart data={currentMeal.nutrients} />
        </View>

        <View style={styles.legendContainer}>
          {currentMeal.nutrients.map((nutrient, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, {
                backgroundColor:
                  nutrient.x === "Gorduras totais" ? "#0000FF" :
                    nutrient.x === "Fibra alimentar" ? "#FFD700" :
                      nutrient.x === "Valor energético" ? "#FFA500" :
                        nutrient.x === "Carboidratos" ? "#00FF00" :
                          "#FF0000"
              }]} />
              <Text style={styles.legendText}>{nutrient.x}</Text>
            </View>
          ))}
        </View>

        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={[styles.navButton, currentMealIndex === 0 && styles.navButtonDisabled]}
            onPress={handlePrevMeal}
            disabled={currentMealIndex === 0}
          >
            <AntDesign name="left" size={24} color={currentMealIndex === 0 ? "#ccc" : "#000"} />
          </TouchableOpacity>

          <View style={styles.mealButton}>
            <Text style={styles.mealButtonText}>{currentMeal.meal}</Text>
          </View>

          <TouchableOpacity
            style={[styles.navButton, currentMealIndex === menuData[currentDay].length - 1 && styles.navButtonDisabled]}
            onPress={handleNextMeal}
            disabled={currentMealIndex === menuData[currentDay].length - 1}
          >
            <AntDesign name="right" size={24} color={currentMealIndex === menuData[currentDay].length - 1 ? "#ccc" : "#000"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1
  },
  scrollView: {
    flex: 1,
    padding: 20,
    paddingTop: 80
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 30
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#666"
  },
  dayText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFA500",
    marginTop: 5
  },
  chartContainer: {
    alignItems: "center",
    marginBottom: 30
  },
  legendContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10
  },
  legendText: {
    fontSize: 16,
    color: "#333"
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  navButton: {
    padding: 10
  },
  navButtonDisabled: {
    opacity: 0.5
  },
  mealButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#000",
    marginHorizontal: 20
  },
  mealButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFA500"
  }
});

export default Tela21;
