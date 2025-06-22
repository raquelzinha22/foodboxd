// App.tsx (Corrigido)
import React from 'react';
import { Text, View } from 'react-native';
import Navigation from './Navigation'; // ajuste o caminho se seu Navigation estiver em outra pasta
import app from './firebaseConfig';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}


