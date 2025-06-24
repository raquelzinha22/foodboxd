import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import type { IRootStackParamList } from "../../hook/rootStack";
import SidebarDrawer from "../../components/Sidebar";
import { styles } from "./styles/style";
import KpiCards from "./components/KpiCards";
import { mockKpis } from "./hooks/useSetup";

type Props = {
  navigation: StackNavigationProp<IRootStackParamList>;
};

const menuOptions: {
  label: string;
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
}[] = [
  { label: "Visão geral", icon: "dashboard" },
  { label: "Avaliações", icon: "star" },
  { label: "Gráficos", icon: "insert-chart" },
  { label: "Usuários", icon: "people" },
  { label: "Cardápio do dia", icon: "today" },
  { label: "Cardápio semanal", icon: "date-range" },
  { label: "Valor Nutricional", icon: "restaurant" },
  { label: "Perfil", icon: "person" },
];

const mockRatings = [
  { stars: 5, comment: "Ótima refeição!" },
  { stars: 4, comment: "Estava bom!" },
  { stars: 3, comment: "Pode melhorar" },
  { stars: 2, comment: "não gostei..." },
  { stars: 1, comment: "O suco não era bom..." },
];

const mockChartLabels = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const mockChartData = [4, 5, 3, 4, 5];

const PainelGestor: React.FC<Props> = ({ navigation }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setDrawerVisible(true)}>
          <Entypo name="menu" size={32} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>
      {/* Drawer/Sidebar */}
      <SidebarDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        navigation={navigation}
      />
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* KPIs */}
        <KpiCards data={mockKpis} />

        {/* Avaliações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas Avaliações</Text>
          <View style={styles.ratingsHeader}>
            <Text style={[styles.ratingsCol, { flex: 1 }]}>Nota</Text>
            <Text style={[styles.ratingsCol, { flex: 3 }]}>Comentário</Text>
          </View>
          {mockRatings.map((r, idx) => (
            <View key={idx} style={styles.ratingsRow}>
              <View
                style={[
                  styles.ratingsColView,
                  { flex: 1, flexDirection: "row" },
                ]}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesome
                    key={i}
                    name={i < r.stars ? "star" : "star-o"}
                    size={18}
                    color="#F97316"
                  />
                ))}
              </View>
              <Text style={[styles.ratingsCol, { flex: 3 }]}>{r.comment}</Text>
            </View>
          ))}
        </View>

        {/* Gráfico mockado */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Evolução ao longo do tempo</Text>
          <View style={styles.chartMock}>
            {/* Simulação de gráfico com linhas coloridas */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                height: 80,
              }}
            >
              {mockChartData.map((val, idx) => (
                <View
                  key={idx}
                  style={{
                    width: 30,
                    height: val * 15,
                    backgroundColor: "#F97316",
                    marginHorizontal: 6,
                    borderRadius: 6,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 12 }}>{val}</Text>
                </View>
              ))}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              {mockChartLabels.map((lbl, idx) => (
                <Text
                  key={lbl}
                  style={{ width: 30, textAlign: "center", color: "#888" }}
                >
                  {lbl}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PainelGestor;
