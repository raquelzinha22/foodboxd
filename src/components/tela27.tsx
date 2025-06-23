import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Tela19: { comment: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Tela27: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [comment, setComment] = useState('');

  const handleSaveComment = () => {
    // Navega de volta para a Tela19 e passa o comentário como parâmetro
    navigation.navigate('Tela19', { comment });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adicionar comentário...</Text>
      </View>

      <TextInput
        style={styles.input}
        value={comment}
        onChangeText={setComment}
        placeholder="Digite seu comentário aqui..."
        multiline
        autoFocus={true}
        textAlignVertical="top"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveComment}>
        <AntDesign name="check" size={24} color="white" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15,
  },
  input: {
    flex: 1,
    padding: 20,
    fontSize: 18,
  },
  saveButton: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    backgroundColor: '#F97316',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});

export default Tela27; 