import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const resetar = () => setContador(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, styles.incrementar]} onPress={incrementar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.decrementar]} onPress={decrementar}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.resetar]} onPress={resetar}>
          <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numero: {
    fontSize: 48,
    marginBottom: 40,
    color: '#333',
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  incrementar: {
    backgroundColor: '#4CAF50',
  },
  decrementar: {
    backgroundColor: '#f44336',
  },
  resetar: {
    backgroundColor: '#2196F3',
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
