import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Coteau</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Gender Predictor"
          onPress={() => navigation.navigate('GenderPredictor')}
          color="#6200EE" // Cambia el color del botón
        />
        <Button
          title="Go to Age Predictor"
          onPress={() => navigation.navigate('AgePredictor')}
          color="#03DAC5" // Cambia el color del botón
        />
        <Button
          title="Go to Universities"
          onPress={() => navigation.navigate('Universities')}
          color="#FF9800" // Cambia el color del botón
        />
        <Button
          title="Go to Weather"
          onPress={() => navigation.navigate('Weather')}
          color="#F44336" // Cambia el color del botón
        />
        <Button
          title="About Me"
          onPress={() => navigation.navigate('About')}
          color="#9C27B0" // Cambia el color del botón
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Color de fondo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Espacio debajo del título
  },
  buttonContainer: {
    width: '80%', // Ancho del contenedor de botones
    gap: 15, // Espaciado entre los botones
  },
});
