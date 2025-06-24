// Navigation.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Views
import Welcome from './src/Views/Welcome';
import Login from './src/Views/Login';
import CreateManager from './src/Views/Cadastro';
import HomeManager from './src/Views/HomeManager';
import PainelGestor from './src/Views/PainelGestor';
import EditarCardapioDia from './src/Views/CardapioDoDia';
import Feedback from './src/Views/Feedback';
import PerfilGestor from './src/Views/PerfilGestor';
// Telas genéricas temporárias ou placeholders
import Tela1 from './src/Views/tela1';
import Tela2 from './src/Views/tela2';
import Tela3 from './src/Views/tela3';
import Tela4 from './src/Views/tela4';
import Tela7 from './src/Views/tela7';
import Tela8 from './src/Views/tela8';
import Tela20 from './src/Views/tela20';
import Tela21 from './src/Views/tela21';
import Tela22 from './src/Views/PerfilGestor'; // já importado como PerfilGestor
import Tela23 from './src/Views/tela23';
import Tela24 from './src/Views/tela24';
import type { IRootStackParamList } from './src/hook/rootStack';
import CardapioDaSemana from './src/Views/CardapioDaSemana';
import EditarDia from './src/Views/EditarDia';

const Stack = createStackNavigator<IRootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Telas principais */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateManager" component={CreateManager} />
        <Stack.Screen name="HomeManager" component={HomeManager} />
        <Stack.Screen name="PainelGestor" component={PainelGestor} />
        <Stack.Screen name="EditarCardapioDia" component={EditarCardapioDia} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="PerfilGestor" component={PerfilGestor} />
        <Stack.Screen name="CardapioDaSemana" component={CardapioDaSemana} />
        <Stack.Screen name="EditarDia" component={EditarDia} /> 

        {/* Telas temporárias ou em desenvolvimento */}
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela7" component={Tela7} />
        <Stack.Screen name="Tela8" component={Tela8} />
        <Stack.Screen name="Tela20" component={Tela20} />
        <Stack.Screen name="Tela21" component={Tela21} />
        <Stack.Screen name="Tela22" component={Tela22} />
        <Stack.Screen name="Tela23" component={Tela23} />
        <Stack.Screen name="Tela24" component={Tela24} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
