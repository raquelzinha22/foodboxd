import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Tela1 from './src/components/tela1';
import Tela2 from './src/components/tela2';
import Tela3 from './src/components/tela3';
import Tela4 from './src/components/tela4';
import Welcome from './src/components/Welcome';
import CreateManager from './src/components/Cadastro';
import Tela7 from './src/components/tela7';
import Tela8 from './src/components/tela8';
import HomeManager from './src/components/HomeManager';
import PainelGestor from './src/components/PainelGestor';
import Feedback from './src/components/Feedback';
import Tela20 from './src/components/tela20';
import Tela21 from './src/components/tela21';
import Tela22 from './src/components/PerfilGestor';
import Tela24 from './src/components/tela24';
import Login from './src/components/Login/';
import Tela23 from './src/components/tela23';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CreateManager" component={CreateManager} />
        <Stack.Screen name="Tela7" component={Tela7} />
        <Stack.Screen name="Tela8" component={Tela8} />
        <Stack.Screen name="HomeManager" component={HomeManager} />
        <Stack.Screen name="PainelGestor" component={PainelGestor} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Tela20" component={Tela20} />
        <Stack.Screen name="Tela21" component={Tela21} />
        <Stack.Screen name="Tela22" component={Tela22} />
        <Stack.Screen name="Tela24" component={Tela24} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Tela23' component={Tela23} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;