import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles/styles";


const CreateManager: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
  setLoading(true);
  setLoading(false);
};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => (navigation as any).navigate('Welcome')}>
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

export default CreateManager;
