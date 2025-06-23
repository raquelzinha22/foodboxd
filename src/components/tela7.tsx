import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Welcome: undefined;
  Tela6: undefined;
  Tela7: { email: string } | undefined;
  Tela8: undefined;
};

const Tela7: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Tela7'>>();
  const [code, setCode] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const email = route?.params?.email || "";
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      if (text && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleContinue = () => {
    if (code.some(digit => digit === "")) {
      Alert.alert("Erro", "Por favor, preencha todos os dígitos do código.");
      return;
    }
    (navigation as any).navigate('Tela8');
  };

  const handleResend = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Código reenviado", `Um novo código foi enviado para ${email}`);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => (navigation as any).navigate('Welcome')}>
        <AntDesign name="arrowleft" size={24} color="#222" />
      </TouchableOpacity>
      <Text style={styles.title}>E-mail de verificação</Text>
      <Text style={styles.subtitle}>Por favor, insira o código que enviamos para o e-mail abaixo:</Text>
      <Text style={styles.email}>{email}</Text>

      <View style={styles.codeContainer}>
        {code.map((num, index) => (
          <TextInput
            key={index}
            ref={(el) => { inputs.current[index] = el }}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            value={num}
            onChangeText={text => handleChange(text, index)}
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity onPress={handleResend} disabled={loading}>
        <Text style={styles.resendText}>{loading ? 'Reenviando...' : 'Não recebi nenhum código? Reenviar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#F97316',
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 8,
  },
  codeInput: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: '#F97316',
    borderRadius: 8,
    fontSize: 24,
    marginHorizontal: 4,
    backgroundColor: '#FFF7ED',
  },
  resendText: {
    color: '#F97316',
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#F97316',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Tela7;