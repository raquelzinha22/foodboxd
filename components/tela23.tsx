import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Adicionando um tipo para as chaves do cardápio semanal
const cardapioSemanal: Record<"segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado" | "domingo", {
  cafe: string;
  lanche: string;
  almoco: string;
  lancheTarde: string;
}> = {
  segunda: {
    cafe: "Pão, Café, Nescau, Ovos",
    lanche: "Salgado folheado e Suco de Laranja",
    almoco: "Strogonoff de frango, Feijoada, Salada, Arroz, Macarrão, Suco de Laranja e Frutas",
    lancheTarde: "Bolo de Laranja e Suco de Abacaxi"
  },
  terca: {
    cafe: "Pão de queijo, Café, Leite",
    lanche: "Iogurte e Granola",
    almoco: "Arroz, Feijão, Frango grelhado, Salada verde, Suco de Uva",
    lancheTarde: "Biscoito integral e Chá"
  },
  quarta: {
    cafe: "Torradas, Café, Leite com Achocolatado",
    lanche: "Frutas e Suco de Laranja",
    almoco: "Arroz, Feijão, Carne assada, Salada de legumes, Suco de Limão",
    lancheTarde: "Pão doce e Chá"
  },
  quinta: {
    cafe: "Croissant, Café, Leite",
    lanche: "Bolo de cenoura e Suco de Maracujá",
    almoco: "Arroz, Feijão, Peixe grelhado, Salada tropical, Suco de Manga",
    lancheTarde: "Biscoito de polvilho e Suco de Goiaba"
  },
  sexta: {
    cafe: "Pão integral, Café, Leite",
    lanche: "Iogurte natural e Frutas",
    almoco: "Arroz, Feijão, Frango à parmegiana, Salada de folhas, Suco de Abacaxi",
    lancheTarde: "Bolo de chocolate e Chá"
  },
  sabado: {
    cafe: "Pão francês, Café, Leite",
    lanche: "Biscoito recheado e Suco de Uva",
    almoco: "Arroz, Feijão, Carne de panela, Salada de batata, Suco de Laranja",
    lancheTarde: "Tapioca e Chá"
  },
  domingo: {
    cafe: "Pão doce, Café, Leite",
    lanche: "Frutas e Suco de Melancia",
    almoco: "Arroz, Feijão, Churrasco, Salada mista, Suco de Limão",
    lancheTarde: "Bolo de milho e Suco de Maracujá"
  }
};

type RootStackParamList = {
  Tela18: undefined;
  Tela19: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

type DiaSemana = 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado' | 'Domingo';

type Refeicao = {
  nome: string;
  alimentos: string[];
};

type MenuData = {
  [key in DiaSemana]: Refeicao[];
};

const diasSemana: DiaSemana[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const menuData: MenuData = {
  'Segunda': [
    { nome: 'Café da Manhã', alimentos: ['Pão integral', 'Ovos mexidos', 'Suco de laranja'] },
    { nome: 'Lanche da Manhã', alimentos: ['Maçã', 'Iogurte natural'] },
    { nome: 'Almoço', alimentos: ['Arroz integral', 'Feijão', 'Frango grelhado', 'Salada'] },
    { nome: 'Lanche da Tarde', alimentos: ['Banana', 'Castanhas'] }
  ],
  'Terça': [
    { nome: 'Café da Manhã', alimentos: ['Aveia', 'Leite', 'Frutas'] },
    { nome: 'Lanche da Manhã', alimentos: ['Pera', 'Queijo branco'] },
    { nome: 'Almoço', alimentos: ['Macarrão integral', 'Molho de tomate', 'Carne moída', 'Salada'] },
    { nome: 'Lanche da Tarde', alimentos: ['Iogurte', 'Granola'] }
  ],
  'Quarta': [
    { nome: 'Café da Manhã', alimentos: ['Tapioca', 'Queijo', 'Café com leite'] },
    { nome: 'Lanche da Manhã', alimentos: ['Uvas', 'Biscoito integral'] },
    { nome: 'Almoço', alimentos: ['Arroz', 'Feijão', 'Peixe assado', 'Legumes'] },
    { nome: 'Lanche da Tarde', alimentos: ['Mingau de aveia'] }
  ],
  'Quinta': [
    { nome: 'Café da Manhã', alimentos: ['Pão de queijo', 'Café', 'Frutas'] },
    { nome: 'Lanche da Manhã', alimentos: ['Laranja', 'Castanhas'] },
    { nome: 'Almoço', alimentos: ['Arroz integral', 'Lentilha', 'Frango', 'Salada'] },
    { nome: 'Lanche da Tarde', alimentos: ['Smoothie de frutas'] }
  ],
  'Sexta': [
    { nome: 'Café da Manhã', alimentos: ['Panqueca', 'Mel', 'Frutas'] },
    { nome: 'Lanche da Manhã', alimentos: ['Maçã', 'Iogurte'] },
    { nome: 'Almoço', alimentos: ['Arroz', 'Feijão', 'Carne', 'Legumes'] },
    { nome: 'Lanche da Tarde', alimentos: ['Bolo integral'] }
  ],
  'Sábado': [
    { nome: 'Café da Manhã', alimentos: ['Omelete', 'Pão integral', 'Suco'] },
    { nome: 'Lanche da Manhã', alimentos: ['Banana', 'Castanhas'] },
    { nome: 'Almoço', alimentos: ['Risoto', 'Salada', 'Frango'] },
    { nome: 'Lanche da Tarde', alimentos: ['Frutas', 'Iogurte'] }
  ],
  'Domingo': [
    { nome: 'Café da Manhã', alimentos: ['Waffle', 'Frutas', 'Café'] },
    { nome: 'Lanche da Manhã', alimentos: ['Pera', 'Queijo'] },
    { nome: 'Almoço', alimentos: ['Arroz', 'Feijão', 'Bife', 'Salada'] },
    { nome: 'Lanche da Tarde', alimentos: ['Bolo de frutas'] }
  ]
};

const Tela23: React.FC<Props> = ({ navigation }) => {
  const [diaAtual, setDiaAtual] = useState<DiaSemana>('Segunda');

  useEffect(() => {
    const hoje = new Date().getDay();
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    setDiaAtual(dias[hoje] as DiaSemana);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Tela18')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Cardápio da Semana</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.daySelector}>
          {diasSemana.map((dia) => (
            <TouchableOpacity
              key={dia}
              style={[
                styles.dayButton,
                diaAtual === dia && styles.selectedDay,
              ]}
              onPress={() => setDiaAtual(dia)}
            >
              <Text
                style={[
                  styles.dayText,
                  diaAtual === dia && styles.selectedDayText,
                ]}
              >
                {dia}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {menuData[diaAtual].map((refeicao, index) => (
            <View key={index} style={styles.menuContainer}>
              <Text style={styles.mealTitle}>{refeicao.nome}</Text>
              <View style={styles.foodList}>
                {refeicao.alimentos.map((alimento, alimentoIndex) => (
                  <View
                    key={alimentoIndex}
                    style={[
                      styles.foodItem,
                      alimentoIndex === refeicao.alimentos.length - 1 && styles.foodItemLast
                    ]}
                  >
                    <MaterialIcons name="restaurant" size={24} color="#FFA500" style={styles.foodIcon} />
                    <Text style={styles.foodText}>{alimento}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.feedbackButton}
            onPress={() => navigation.navigate('Tela19')}
          >
            <Text style={styles.feedbackButtonText}>Avaliar Cardápio</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  daySelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dayButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    minWidth: 40,
    alignItems: "center",
  },
  selectedDay: {
    backgroundColor: "#FFA500",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "500",
  },
  selectedDayText: {
    color: "white",
  },
  menuContainer: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  foodList: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  foodItemLast: {
    borderBottomWidth: 0,
  },
  foodIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  foodText: {
    fontSize: 16,
    color: "#444",
    flex: 1,
  },
  feedbackButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  feedbackButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Tela23;
