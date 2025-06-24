import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  LayoutAnimation,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { IRootStackParamList } from "../../hook/rootStack";
import DiaDaSemana from "../../components/DiaDaSemana";
import { styles } from "./styles/styles";

type Props = {
  navigation: StackNavigationProp<IRootStackParamList, "CardapioDaSemana">;
};

const initialDias = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

const initialMeals = [
  { id: 1, title: "Café da manhã", value: "Pão, Café, Nescau, Ovos" },
  { id: 2, title: "Lanche da manhã", value: "Salgado folheado e Suco de Laranja" },
  {
    id: 3,
    title: "Almoço",
    value:
      "Strogonoff de frango, Feijão, Salada, Arroz, Macarrão, Suco de laranja e Farofa",
  },
  { id: 4, title: "Lanche da tarde", value: "Bolo de Laranja e Suco de Abacaxi" },
];

export default function CardapioDaSemana({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("PainelGestor")}>
          <AntDesign name="arrowleft" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.title}>Cardápio da Semana</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
          <DiaDaSemana
/>

        <TouchableOpacity style={styles.addButton} >
          <MaterialIcons name="add" size={32} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
