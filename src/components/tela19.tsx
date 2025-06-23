import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Tela2: undefined;
  Tela3: undefined;
  Tela5: undefined;
  Tela18: undefined;
  Tela23: undefined;
  Tela19: undefined;
};

type Tela19NavigationProp = StackNavigationProp<RootStackParamList, 'Tela19'>;

type Props = {
  navigation: Tela19NavigationProp;
};
const Tela19: React.FC<Props> = ({ navigation }) =>  {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Tela18')} >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
     <View style={styles.container2}>
      <Text style={styles.title}>Como estava o Lanche da manhã?</Text>
      <Text style={styles.subtitle}>Avalie em:</Text>
      <View style={styles.starsContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
            <MaterialIcons
              name={index < rating ? 'star' : 'star-border'}
              size={40}
              color={index < rating ? '#FFBF00' : '#AAA'}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Deixe um comentário"
        value={comment}
        onChangeText={setComment}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela23')}>
        <Text style={styles.buttonText}>Enviar Avaliação</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  container2: { top:55 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 16, marginBottom: 10 },
  starsContainer: { flexDirection: 'row', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#DDD', borderRadius: 10, padding: 10, marginBottom: 20 },
  backButton: { position: "absolute", top: 50, left: 20 },
  button: { backgroundColor: '#FFA726', padding: 15, borderRadius: 10 },
  buttonText: { fontSize: 16, color: '#FFF', textAlign: 'center' }
});

export default Tela19;