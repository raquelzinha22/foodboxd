import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Ajuste o tipo do seu RootStackParamList conforme seu projeto
import type { IRootStackParamList } from '../../hook/rootStack';

type Props = {
  navigation: StackNavigationProp<IRootStackParamList>;
};

const menuOptions: { label: string; icon: React.ComponentProps<typeof MaterialIcons>['name'] }[] = [
  { label: 'Visão geral', icon: 'dashboard' },
  { label: 'Avaliações', icon: 'star' },
  { label: 'Gráficos', icon: 'insert-chart' },
  { label: 'Usuários', icon: 'people' },
  { label: 'Cardápio do dia', icon: 'today' },
  { label: 'Cardápio semanal', icon: 'date-range' },
  { label: 'Valor Nutricional', icon: 'restaurant' },
  { label: 'Perfil', icon: 'person' },
];

const mockKpis = [
  { label: 'L/P', value: '4.7', desc: 'Média' },
  { label: 'NPS', value: '80', desc: 'Excelente' },
  { label: 'Clientes Ativos', value: '300', desc: 'Últimos 7 dias' },
];

const mockRatings = [
  { stars: 5, comment: 'Ótima refeição!' },
  { stars: 4, comment: 'Estava bom!' },
  { stars: 3, comment: 'Pode melhorar' },
  { stars: 2, comment: 'não gostei...' },
  { stars: 1, comment: 'O suco não era bom...' },
];

const mockChartLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
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
      <Modal
        visible={drawerVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setDrawerVisible(false)}
      >
        <TouchableOpacity style={styles.drawerOverlay} onPress={() => setDrawerVisible(false)} />
        <View style={styles.drawer}>
          <View style={styles.drawerHeader}>
            <Text style={styles.drawerTitle}>PORTAL DO GESTOR</Text>
          </View>
          {menuOptions.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={styles.drawerItem}
              onPress={() => {
                setDrawerVisible(false);
                if (option.label === 'Cardápio do dia') {
                  navigation.navigate('EditarCardapioDia');
                }
              }}
            >
              <MaterialIcons name={option.icon} size={22} color="#F97316" style={{ marginRight: 12 }} />
              <Text style={styles.drawerItemText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* KPIs */}
        <View style={styles.kpiRow}>
          {mockKpis.map((kpi) => (
            <View key={kpi.label} style={styles.kpiBox}>
              <Text style={styles.kpiValue}>{kpi.value}</Text>
              <Text style={styles.kpiLabel}>{kpi.label}</Text>
              <Text style={styles.kpiDesc}>{kpi.desc}</Text>
            </View>
          ))}
        </View>

        {/* Avaliações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas Avaliações</Text>
          <View style={styles.ratingsHeader}>
            <Text style={[styles.ratingsCol, { flex: 1 }]}>Nota</Text>
            <Text style={[styles.ratingsCol, { flex: 3 }]}>Comentário</Text>
          </View>
          {mockRatings.map((r, idx) => (
            <View key={idx} style={styles.ratingsRow}>
              <View style={[styles.ratingsColView, { flex: 1, flexDirection: 'row' }]}> 
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesome
                    key={i}
                    name={i < r.stars ? 'star' : 'star-o'}
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
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 80 }}>
              {mockChartData.map((val, idx) => (
                <View key={idx} style={{
                  width: 30,
                  height: val * 15,
                  backgroundColor: '#F97316',
                  marginHorizontal: 6,
                  borderRadius: 6,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                  <Text style={{ color: '#fff', fontSize: 12 }}>{val}</Text>
                </View>
              ))}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
              {mockChartLabels.map((lbl, idx) => (
                <Text key={lbl} style={{ width: 30, textAlign: 'center', color: '#888' }}>{lbl}</Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    elevation: 2,
    zIndex: 2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 18,
    color: '#222',
  },
  content: {
    padding: 20,
  },
  kpiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  kpiBox: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 6,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    elevation: 1,
  },
  kpiValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F97316',
  },
  kpiLabel: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  kpiDesc: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  ratingsHeader: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  ratingsCol: {
    fontWeight: 'bold',
    color: '#888',
  },
  ratingsColView: {
    // Estilos de View, se necessário, ou pode deixar vazio
  },
  ratingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  chartMock: {
    marginTop: 10,
    paddingBottom: 10,
  },
  drawerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 240,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 10,
    elevation: 5,
    zIndex: 2,
  },
  drawerHeader: {
    marginBottom: 18,
    paddingLeft: 8,
  },
  drawerTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#F97316',
    letterSpacing: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingLeft: 8,
    borderRadius: 6,
  },
  drawerItemText: {
    fontSize: 15,
    color: '#222',
  },
});

export default PainelGestor;
