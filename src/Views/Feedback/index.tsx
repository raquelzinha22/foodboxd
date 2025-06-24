import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from '@react-navigation/stack';
import type { IRootStackParamList } from '../../hook/rootStack';
import { styles } from './styles/styles';

type Tela19NavigationProp = StackNavigationProp<IRootStackParamList>;

type Props = {
  navigation: Tela19NavigationProp;
};
const Feedback: React.FC<Props> = ({ navigation }) =>  {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('PainelGestor')} >
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



export default Feedback;