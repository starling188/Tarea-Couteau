import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: Starling Jose Gonzalez Miranda</Text>
      <Text style={styles.text}>Email: gonzalezmiranda188@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Color de fondo
  },
  text: {
    fontSize: 18, // Tamaño de fuente
    color: '#333', // Color del texto
    marginBottom: 10, // Espaciado entre los textos
    fontWeight: 'bold', // Negrita
  },
});

export default About;
