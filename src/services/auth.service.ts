import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export async function registerUser(name: string, email: string, password: string) {
  if (!name || !email || !password) {
    throw new Error("Preencha todos os campos.");
  }

  if (!email.includes("@") || !email.includes(".")) {
    throw new Error("Digite um e-mail válido.");
  }

  if (password.length < 6) {
    throw new Error("A senha deve ter pelo menos 6 caracteres.");
  }

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await AsyncStorage.setItem("userName", name);
  await AsyncStorage.setItem("userEmail", email);
  await AsyncStorage.setItem("userType", "gestor");

  return userCredential.user;
}
