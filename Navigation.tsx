// Navigation.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import type { IRootStackParamList } from './src/hook/rootStack';

// Views principais
import Welcome from './src/Views/Welcome';
import Login from './src/Views/Gestor/Login';
import CreateManager from './src/Views/Gestor/Cadastro';
import HomeManager from './src/Views/Gestor/HomeManager';
import PainelGestor from './src/Views/Gestor/PainelGestor';
import EditarCardapioDia from './src/Views/Gestor/CardapioDoDia';
import Feedback from './src/Views/Usuario/Feedback';
import PerfilGestor from './src/Views/Gestor/PerfilGestor';
import CardapioDaSemana from './src/Views/Gestor/CardapioDaSemana';
import PainelUsuario from './src/components/PainelUsuario';

// Telas temporárias
import Tela1 from './src/Views/tela1';
import Tela2 from './src/Views/tela2';
import Tela3 from './src/Views/tela3';
import Tela4 from './src/Views/tela4';
import Tela7 from './src/Views/tela7';
import Tela8 from './src/Views/tela8';
import Tela20 from './src/Views/Usuario/CardapioSemanaUser';
import Tela23 from './src/Views/tela23';
import Tela24 from './src/Views/tela24';
import MenuUsuario from './src/Views/Usuario/UsuárioMenu';
import FeedbackGestor from './src/Views/Gestor/Feedback';
import ValorNutricional from './src/Views/Gestor/ValorNutricional';
import ValorNutricionalUsuario from './src/Views/Usuario/ValorNutricionalUser';
import GraficoAvaliacoes from './src/Views/Gestor/Gráficos';

const Stack = createStackNavigator<IRootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Rotas principais */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateManager" component={CreateManager} />
        <Stack.Screen name="HomeManager" component={HomeManager} />
        <Stack.Screen name="PainelGestor" component={PainelGestor} />
        <Stack.Screen name="EditarCardapioDia" component={EditarCardapioDia} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="PerfilGestor" component={PerfilGestor} />
        <Stack.Screen name="CardapioDaSemana" component={CardapioDaSemana} />
        <Stack.Screen name="Tela18" component={PainelUsuario} />
        <Stack.Screen name="MenuUsuario" component={MenuUsuario} />
        <Stack.Screen name="FeedbackGestor" component={FeedbackGestor} />
        <Stack.Screen name="ValorNutricionalUser" component={ValorNutricionalUsuario} />
        <Stack.Screen name="ValorNutricional" component={ValorNutricional} />
        <Stack.Screen name="GraficoAvaliacoes" component={GraficoAvaliacoes} />


        {/* Telas temporárias */}
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela7" component={Tela7} />
        <Stack.Screen name="Tela8" component={Tela8} />
        <Stack.Screen name="Tela20" component={Tela20} />
        <Stack.Screen name="Tela23" component={Tela23} />
        <Stack.Screen name="Tela24" component={Tela24} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
