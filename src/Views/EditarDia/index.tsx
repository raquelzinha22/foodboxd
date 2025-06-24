import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { IRootStackParamList } from "../../hook/rootStack";


type EditarDiaProps = {
  navigation: StackNavigationProp<IRootStackParamList, "EditarDia">;
};

export default function EditarDia({ navigation }: EditarDiaProps) {

  return (
    <KeyboardAvoidingView
      style={localStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={localStyles.content}>
        <Text style={localStyles.label}>Nome do dia da semana:</Text>
        <TextInput
          style={localStyles.input}
          placeholder="Ex: Segunda-feira"
        />
        <TouchableOpacity style={localStyles.button}>
          <Text style={localStyles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const localStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  content: {
    padding: 20,
    marginTop: 50,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F97316",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
