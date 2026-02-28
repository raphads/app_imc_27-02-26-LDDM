import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  return (
    <View style={styles.container}>
     <TextInput placeholder='Digite seu peso'
                inputMode='decimal'
                value={peso.toString()}
                onChangeText={(text) => setPeso(Number(text))}
      />

      <TextInput placeholder='Digite sua altura'
                inputMode='decimal'
                value={altura.toString()}
                onChangeText={(text) => setAltura(Number(text))}
      />    
      <Text>Seu IMC é: {altura>0? peso / (altura * altura):0}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
