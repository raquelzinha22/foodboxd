import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Tela1 from './src/components/tela1';
import Tela2 from './src/components/tela2';
import Tela3 from './src/components/tela3';
import Tela4 from './src/components/tela4';
import Tela5 from './src/components/Welcome';
import CreateManager from './src/components/Cadastro';
import Tela7 from './src/components/tela7';
import Tela8 from './src/components/tela8';
import HomeManager from './src/components/HomeManager/HomeManager';
import Tela18 from './src/components/tela18';
import Tela19 from './src/components/tela19';
import Tela20 from './src/components/tela20';
import Tela21 from './src/components/tela21';
import Tela22 from './src/components/tela22';
import Tela24 from './src/components/tela24';
import Login from './src/components/Login/';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Tela5" component={Tela5} />
        <Stack.Screen name="CreateManager" component={CreateManager} />
        <Stack.Screen name="Tela7" component={Tela7} />
        <Stack.Screen name="Tela8" component={Tela8} />
        <Stack.Screen name="HomeManager" component={HomeManager} />
        <Stack.Screen name="Tela18" component={Tela18} />
        <Stack.Screen name="Tela19" component={Tela19} />
        <Stack.Screen name="Tela20" component={Tela20} />
        <Stack.Screen name="Tela21" component={Tela21} />
        <Stack.Screen name="Tela22" component={Tela22} />
        <Stack.Screen name="Tela24" component={Tela24} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;