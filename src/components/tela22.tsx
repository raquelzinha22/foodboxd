import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Tela5: undefined;
  Tela18: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tela18'>;

const Tela22: React.FC = () =>  {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loadProfileData = async () => {
      const savedName = await AsyncStorage.getItem("userName");
      const savedEmail = await AsyncStorage.getItem("userEmail");
      
      if (savedName) setName(savedName);
      if (savedEmail) setEmail(savedEmail);
    };
    loadProfileData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Tela5');
  };

  const saveChanges = async () => {
    await AsyncStorage.setItem("userName", name);
    await AsyncStorage.setItem("userEmail", email);
    Alert.alert("Sucesso", "Dados salvos com sucesso!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Tela18')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      
      <Image source={require('../assets/icon.png')} style={styles.profileImage} />
      <Text style={styles.profileName}>{name || 'Usuário'}</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Seu nome" />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" editable={false} />

      <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
        <Text style={styles.saveButtonText}>Salvar mudanças</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair (Logout)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: "center",
    backgroundColor: '#fff'
  },
  backButton: { 
    position: "absolute", 
    top: 50, 
    left: 20,
    zIndex: 1,
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    alignSelf: "center", 
    marginBottom: 10 
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: { 
    fontSize: 14, 
    fontWeight: "bold", 
    marginTop: 15,
    color: '#333'
  },
  input: { 
    backgroundColor: "#F5F5F5", 
    padding: 12, 
    borderRadius: 8, 
    marginTop: 5,
    fontSize: 16
  },
  saveButton: { 
    backgroundColor: "#F97316", 
    padding: 15, 
    borderRadius: 8, 
    alignItems: "center", 
    marginTop: 25 
  },
  saveButtonText: { 
    color: "white", 
    fontWeight: "bold",
    fontSize: 16
  },
  logoutButton: { 
    backgroundColor: "#DC2626", 
    padding: 15, 
    borderRadius: 8, 
    alignItems: "center", 
    marginTop: 15 
  },
  logoutButtonText: { 
    color: "white", 
    fontWeight: "bold",
    fontSize: 16
  },
});

export default Tela22;
