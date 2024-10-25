import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FetchAge = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [category, setCategory] = useState('');

  const fetchAge = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);

      if (data.age < 18) {
        setCategory('Joven');
      } else if (data.age < 60) {
        setCategory('Adulto');
      } else {
        setCategory('Anciano');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingresa un nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Button title="Predecir Edad" onPress={fetchAge} color="#841584" />

      {age !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Nombre: {name}</Text>
          <Text style={styles.resultText}>Edad estimada: {age}</Text>
          <Text style={styles.resultText}>Categoría: {category}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff', // Cambia el fondo del contenedor
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Para Android
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff', // Cambia el fondo del campo de texto
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333', // Cambia el color del texto
  },
});

export default FetchAge;
