import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [contato, setContato] = useState({
    nome: '',
    telefone: ''
  })

  const registrarContato = () => {
    console.log(JSON.stringify(contato))
    setContato({ nome: '', telefone: '' })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Contatos</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome'
        value={contato.nome} 
        onChangeText={t => setContato({ ...contato, ['nome']: t })}
      />
      <TextInput
        style={styles.input}
        placeholder='Telefone' 
        value={contato.telefone} 
        onChangeText={t => setContato({ ...contato, ['telefone']: t })}
      />
      <Button title='Cadastrar' onPress={registrarContato}/>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  input: {
    borderBottomColor: '#AAA',
    marginBottom: 8,
    backgroundColor: '#CCC',
    width: '70%',
    padding: 8
  }
});
