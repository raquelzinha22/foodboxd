import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Tela9: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<'empresa' | 'funcionario' | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Entrar na sua conta, você é?</Text>
      
      <View style={styles.userTypeContainer}>
        <TouchableOpacity
          style={[styles.userType, selectedUser === 'empresa' && styles.selectedUser]} 
          onPress={() => setSelectedUser('empresa')}>
          <Text style={styles.userTitle}>Empresa</Text>
          <Text style={styles.userSubtitle}>Enviar para o seu email</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.userType, selectedUser === 'funcionario' && styles.selectedUser]} 
          onPress={() => setSelectedUser('funcionario')}>
          <Text style={styles.userTitle}>Funcionário</Text>
          <Text style={styles.userSubtitle}>Envie seu número de celular</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={() => console.log("Esqueceu sua senha?")}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log("Login") }>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <Text style={styles.registerText}>Não tenha uma conta? <Text style={styles.registerLink}>Crie uma!</Text></Text>
      
      <Text style={styles.orText}>Ou com</Text>
      
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Entre com o Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Entre com a Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  userTypeContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  userType: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  selectedUser: {
    borderWidth: 2,
    borderColor: "#f90",
  },
  userTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  forgotPassword: {
    color: "#f90",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f90",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
  },
  registerLink: {
    color: "#f90",
    fontWeight: "bold",
  },
  orText: {
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Tela9;