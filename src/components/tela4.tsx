import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Tela4: undefined;
  Tela5: undefined;
};

type Tela4NavigationProp = StackNavigationProp<RootStackParamList, 'Tela4'>;

type Props = {
  navigation: Tela4NavigationProp;
};
const Tela4: React.FC<Props> = ({ navigation }) =>  {

  return (
    <View style={styles.container}>
      <Text style={styles.pular}>Pular</Text>

      <Image style={styles.tela4} source={require('../assets/tela4.png')} resizeMode="contain" />

      <Text style={styles.apresentacao}>
        Comece sua jornada.
      </Text>
      <Text style={styles.descricao}>
       Comece seu trajeto de avaliação e gerenciamento conosco. Melhorando seu rendimento acadêmico.
Vamos lá!
      </Text>

      <View style={styles.indicador}>
        <View style={styles.ativo} />
        <View style={styles.inativo} />
      </View>

      <TouchableOpacity style={styles.continuar}  onPress={() => navigation.navigate('Tela5')}>
        <Text style={styles.continuarTexto}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.entrar}  onPress={() => navigation.navigate('Tela5')}>
        <Text style={styles.entrarTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  pular: {
    position: 'absolute',
    color: '#F97316',
   top: 50,
   left:20,
  },
  tela4: {
    width: 200,
    height: 200,
  },
  apresentacao: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  descricao: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
  indicador: {
    flexDirection: 'row',
    marginTop: 16,
  },
  ativo: {
    width: 10,
    height: 10,
    backgroundColor: '#F97316',
    borderRadius: 5,
    marginHorizontal: 4,
  },
  inativo: {
    width: 10,
    height: 10,
    backgroundColor: '#D1D5DB',
    borderRadius: 5,
    marginHorizontal: 4,
  },
  continuar: {
    width: '100%',
    backgroundColor: '#F97316',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  continuarTexto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  entrar: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#F97316',
  },
  entrarTexto: {
    color: '#F97316',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default Tela4;
