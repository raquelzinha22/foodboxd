import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Tela6: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert("Erro", "Digite um e-mail válido.");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    console.log("handleRegister chamado");
    if (!validate()) {
      console.log("Validação falhou.");
      return;
    }
    setLoading(true);
    try {
      console.log("Tentando criar usuário com email:", email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuário criado com sucesso:", userCredential.user.uid);
      
      await AsyncStorage.setItem("userName", name);
      await AsyncStorage.setItem("userEmail", email);
      await AsyncStorage.setItem("userType", "gestor");
      
      setLoading(false);
      console.log("Navegando para Tela7...");
      (navigation as any).navigate('Tela7', { email });
    } catch (error) {
      setLoading(false);
      console.error("Erro no registro:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      Alert.alert("Erro no Registro", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => (navigation as any).navigate('Tela5')}>
        <AntDesign name="arrowleft" size={24} color="#222" />
      </TouchableOpacity>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Crie a sua conta e navegue pelo aplicativo</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Sua senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <AntDesign name={showPassword ? "eye" : "eyeo"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister} disabled={loading}>
        <Text style={styles.registerText}>{loading ? 'Registrando...' : 'Registrar'}</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        Ao clicar em Registrar, você concorda com nossos
        <Text style={styles.termsLink}> Termos e Política de Dados.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: '#fff' },
  backButton: { position: "absolute", top: 50, left: 20, zIndex: 2 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 40 },
  subtitle: { fontSize: 16, color: "gray", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "bold", marginTop: 10 },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 16
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  registerButton: {
    backgroundColor: "#F97316",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20
  },
  registerText: { color: "white", fontWeight: "bold", fontSize: 16 },
  termsText: { textAlign: "center", marginTop: 20, color: "gray" },
  termsLink: { color: "#F97316", fontWeight: "bold" }
});

export default Tela6;
