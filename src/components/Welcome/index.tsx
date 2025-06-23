import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from "./styles/styles";
import type { IRootStackParamList } from "../../hook/rootStack";


type WelcomeNavigationProp = StackNavigationProp<IRootStackParamList>;

type Props = {
  navigation: WelcomeNavigationProp;
};

type UserType = 'usuario' | 'gestor';

const Welcome: React.FC<Props> = ({ navigation }) => {
  const [userType, setUserType] = useState<UserType>('usuario');

  const handleContinue = async () => {
    await AsyncStorage.setItem("userType", userType);
    if (userType === 'usuario') {
      navigation.navigate('PainelGestor');
    } else {
      navigation.navigate('HomeManager');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#222" />
      </TouchableOpacity>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Escolha qual a sua forma de entrada.</Text>

      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={[styles.profileBox, userType === 'usuario' && styles.profileBoxActive]}
          onPress={() => setUserType('usuario')}
        >
          <MaterialIcons name="person-outline" size={36} color={userType === 'usuario' ? '#F97316' : '#222'} />
          <Text style={[styles.profileText, userType === 'usuario' && styles.profileTextActive]}>Usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.profileBox, userType === 'gestor' && styles.profileBoxActive]}
          onPress={() => setUserType('gestor')}
        >
          <MaterialIcons name="supervisor-account" size={36} color={userType === 'gestor' ? '#F97316' : '#222'} />
          <Text style={[styles.profileText, userType === 'gestor' && styles.profileTextActive]}>Gestor</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Welcome;


