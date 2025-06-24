import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebaseConfig";

interface RegisterResponse {
  success: boolean;
  message: string;
  data?: any;
}

const auth = getAuth(app);

export async function registerUser(name: string, email: string, password: string): Promise<RegisterResponse> {
  try {
    if (!name || !email || !password) {
      return { success: false, message: "Preencha todos os campos." };
    }

    if (!email.includes("@") || !email.includes(".")) {
      return { success: false, message: "Digite um e-mail válido." };
    }

    if (password.length < 6) {
      return { success: false, message: "A senha deve ter pelo menos 6 caracteres." };
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await AsyncStorage.multiSet([
      ["userName", name],
      ["userEmail", email],
      ["userType", "gestor"]
    ]);

    return {
      success: true,
      message: "Cadastro realizado com sucesso!",
      data: userCredential.user,
    };

  } catch (error: any) {
    let errorMessage = "Erro ao cadastrar. Tente novamente.";

    // Tratamento de erros do Firebase
    if (error.code) {
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Este e-mail já está em uso.";
          break;
        case "auth/invalid-email":
          errorMessage = "E-mail inválido.";
          break;
        case "auth/weak-password":
          errorMessage = "A senha é muito fraca.";
          break;
        default:
          errorMessage = `Erro: ${error.message || error.code}`;
      }
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
}
