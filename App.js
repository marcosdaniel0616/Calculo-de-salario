import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  let [salarioHora, setSalarioHora] = useState(0);
  let [horas, setHoras] = useState(1);

  let [salarioBruto, setSalarioBruto] = useState(0);
  salarioBruto = salarioHora * horas

  let [impostoRenda, setImpostoRenda] = useState(0);
  impostoRenda = (salarioBruto) * 11 / 100;

  let [inssVal, setInssVal] = useState(0);
  inssVal = (salarioBruto) * 8 / 100;

  let [sindicato, setSindicato] = useState(0);
  sindicato = (salarioBruto) * 5 / 100;

  let [descontos, setDescontos] = useState();
  descontos = (impostoRenda + inssVal + sindicato) 

  let [salarioLiq, setSalarioLiq] = useState();
  salarioLiq = (salarioBruto) - descontos

  return (

    <View style={styles.container}>
      <Text>Informe o quanto você ganha por hora: R$</Text>
      <TextInput style={styles.input} 
      keyboardType='numeric'
      onChangeText={(sal) => setSalarioHora(sal)}/>

      <Text>Número de horas que você trabalha por mês:</Text>
      <TextInput style={styles.input}
      keyboardType='numeric'
      onChangeText={(hor) => setHoras(hor)}/>
      <Text>Salário bruto: R${salarioBruto.toFixed(2)}</Text>
      <Text>INSS (8%): R${inssVal.toFixed(2)}</Text>
      <Text>Sindicato (5%): R${(sindicato).toFixed(2)}</Text>
      <Text>Descontos: R${descontos.toFixed(2)}</Text>
      <Text>Salário líquido: R${salarioLiq.toFixed(2)}  </Text>

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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
});


