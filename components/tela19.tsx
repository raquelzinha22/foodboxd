import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { firestore } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

type RootStackParamList = {
  Tela18: undefined;
  Tela25: undefined;
  Tela19: { mealName?: string, comment?: string };
  Tela26: undefined; 
  Tela27: undefined;
  Tela28: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;
type Tela19RouteProp = RouteProp<RootStackParamList, 'Tela19'>;

const Tela19: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<Tela19RouteProp>();
  // 0: empty, 1: half, 2: full
  const [stars, setStars] = useState([0, 0, 0, 0, 0]);
  const [comment, setComment] = useState('');

  const mealName = route.params?.mealName || "a Refeição";

  useEffect(() => {
    if (route.params?.comment !== undefined) {
      setComment(route.params.comment);
    }
  }, [route.params?.comment]);

  const handleStarPress = (index: number) => {
    const newStars = [...stars];
    // Cycle through 0 -> 1 -> 2 -> 0
    newStars[index] = (newStars[index] + 1) % 3;
    setStars(newStars);
  };
  
  const getStarIconName = (state: number): 'star' | 'star-half' | 'star-border' => {
    switch(state) {
      case 1: return 'star-half';
      case 2: return 'star';
      default: return 'star-border';
    }
  };

  const getSatisfactionLevel = () => {
    const totalRating = stars.reduce((acc, state) => acc + state * 0.5, 0);
    if (totalRating <= 1) return "Ruim";
    if (totalRating <= 2.5) return "Regular";
    if (totalRating <= 4) return "Bom";
    return "Excelente";
  };

  const handleSubmit = async () => {
    const totalRating = stars.reduce((acc, state) => acc + state * 0.5, 0);
    
    if (totalRating === 0 && !comment) {
      Alert.alert("Atenção", "Por favor, adicione uma avaliação ou um comentário antes de enviar.");
      return;
    }

    try {
      await addDoc(collection(firestore, "avaliacoes"), {
        rating: totalRating,
        comment: comment,
        meal: mealName,
        createdAt: serverTimestamp()
      });

      if (totalRating > 0) {
        console.log(`Avaliação: ${totalRating}/5`, `Comentário: ${comment}`);
        navigation.navigate('Tela26');
      } else if (comment) {
        console.log(`Comentário: ${comment}`);
        navigation.navigate('Tela28');
      }
    } catch (error) {
      console.error("Erro ao salvar avaliação: ", error);
      Alert.alert("Erro", "Não foi possível enviar sua avaliação. Tente novamente mais tarde.");
    }
  };

  const handleAddComment = () => {
    navigation.navigate('Tela27');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Como estava o</Text>
        <Text style={styles.mealName}>{mealName}?</Text>

        <Text style={styles.label}>Avalie em:</Text>
        <View style={styles.starsContainer}>
          {stars.map((state, index) => (
            <TouchableOpacity key={index} onPress={() => handleStarPress(index)} style={styles.starButton}>
              <MaterialIcons
                name={getStarIconName(state)}
                size={45}
                color={state > 0 ? '#FFBF00' : '#DDD'}
              />
            </TouchableOpacity>
          ))}
        </View>

        {stars.some(s => s > 0) && (
          <Text style={styles.satisfactionText}>{getSatisfactionLevel()}</Text>
        )}

        <Text style={styles.label}>Deixe um comentário! Sua opinião é muito importante para nós.</Text>
        <TouchableOpacity style={styles.commentButton} onPress={handleAddComment}>
          <MaterialIcons name="comment" size={24} color="#334155" />
          <Text style={styles.commentButtonText}>{comment ? "Comentário adicionado!" : "Adicionar comentário"}</Text>
        </TouchableOpacity>
        
        <View style={{flex: 1}} />

        <TouchableOpacity 
          style={[styles.submitButton, stars.every(s => s === 0) && !comment && styles.submitButtonDisabled]} 
          onPress={handleSubmit}
          disabled={stars.every(s => s === 0) && !comment}
        >
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ... (O resto do código de styles permanece o mesmo)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  backButton: {
    width: 40, 
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#1E293B',
    textAlign: 'center',
  },
  mealName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    color: '#475569',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  starButton: {
    marginHorizontal: 5,
    padding: 5
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: '100%',
    paddingVertical: 40,
  },
  commentButtonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
  },
  submitButton: {
    backgroundColor: '#F97316',
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonDisabled: {
    backgroundColor: '#FDBA74',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  satisfactionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Tela19;