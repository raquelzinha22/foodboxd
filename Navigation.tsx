import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Tela1 from './components/tela1';
import Tela2 from './components/tela2';
import Tela3 from './components/tela3';
import Tela4 from './components/tela4';
import Tela5 from './components/tela5';
import Tela6 from './components/tela6';
import Tela7 from './components/tela7';
import Tela8 from './components/tela8';
import Tela9 from './components/tela9';
import Tela18 from './components/tela18';
import Tela19 from './components/tela19';
import Tela20 from './components/tela20';
import Tela21 from './components/tela21';
import Tela22 from './components/tela22';
import Tela23 from './components/tela23';
import Tela24 from './components/tela24';

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
        <Stack.Screen name="Tela6" component={Tela6} />
        <Stack.Screen name="Tela7" component={Tela7} />
        <Stack.Screen name="Tela8" component={Tela8} />
        <Stack.Screen name="Tela9" component={Tela9} />
        <Stack.Screen name="Tela18" component={Tela18} />
        <Stack.Screen name="Tela19" component={Tela19} />
        <Stack.Screen name="Tela20" component={Tela20} />
        <Stack.Screen name="Tela21" component={Tela21} />
        <Stack.Screen name="Tela22" component={Tela22} />
        <Stack.Screen name="Tela24" component={Tela24} />
       
       

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;