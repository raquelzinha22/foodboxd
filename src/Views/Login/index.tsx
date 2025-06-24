import type { StackNavigationProp } from "@react-navigation/stack";
import type { IRootStackParamList } from "../../hook/rootStack";
import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles/styles";
import { AntDesign } from "@expo/vector-icons";

type LoginScreenNavigationProp = StackNavigationProp<IRootStackParamList>;

interface ILogin {
  navigation: LoginScreenNavigationProp;
}

export default function Login({ navigation }: ILogin) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    navigation.navigate("PainelGestor");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Bem-vindo novamente!</Text>
      <Text style={styles.subtitle}>Entrar na sua conta</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu email"
          value={email}
          onChangeText={setEmail}
          autoComplete="email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Sua senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <AntDesign
              name={showPassword ? "eye" : "eyeo"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Tela7')}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CreateManager')}>
        <Text style={styles.signupText}>
          Ainda não tem uma conta? <Text style={styles.signupLink}>Crie uma!</Text>
        </Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Ou entre com</Text>

      <TouchableOpacity style={styles.googleButton}>
        <AntDesign name="google" size={24} color="red" />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>
    </View>
  );
}
