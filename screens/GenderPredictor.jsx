import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function GenderPredictor() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);

  const fetchGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGender(data.gender);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gender Predictor</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict Gender" onPress={fetchGender} color="#6200EE" />
      {gender && (
        <View style={[styles.resultContainer, { backgroundColor: gender === 'male' ? '#2196F3' : '#F50057' }]}>
          <Text style={styles.resultText}>{gender === 'male' ? 'Masculino' : 'Femenino'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#B0BEC5',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  resultText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
