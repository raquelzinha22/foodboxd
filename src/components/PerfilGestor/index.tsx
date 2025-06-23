import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from "./styles/styles"; // Adjust the import path as necessary
import type { IRootStackParamList } from "../../hook/rootStack";

type Tela3NavigationProp = StackNavigationProp<IRootStackParamList, 'Tela3'>;

type Props = {
  navigation: Tela3NavigationProp;
};
const Tela22: React.FC<Props> = ({ navigation }) =>  {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    const loadProfileData = async () => {
      const savedName = await AsyncStorage.getItem("userName");
      const savedEmail = await AsyncStorage.getItem("userEmail");
      const savedPassword = await AsyncStorage.getItem("userPassword");
      const savedBirthDate = await AsyncStorage.getItem("userBirthDate");
      
      if (savedName) setName(savedName);
      if (savedEmail) setEmail(savedEmail);
      if (savedPassword) setPassword(savedPassword);
      if (savedBirthDate) setBirthDate(savedBirthDate);
    };
    loadProfileData();
  }, []);

  const saveChanges = async () => {
    await AsyncStorage.setItem("userName", name);
    await AsyncStorage.setItem("userEmail", email);
    await AsyncStorage.setItem("userPassword", password);
    await AsyncStorage.setItem("userBirthDate", birthDate);
    alert("Dados salvos com sucesso!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('PainelGestor')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Image source={require('../../assets/tela3.png')} style={styles.profileImage} />
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <Text style={styles.label}>Data de aniversário</Text>
      <TextInput style={styles.input} value={birthDate} onChangeText={setBirthDate} />

      <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
        <Text style={styles.saveButtonText}>Salvar mudanças</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Tela22;