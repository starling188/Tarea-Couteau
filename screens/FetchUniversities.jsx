import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Linking, StyleSheet } from 'react-native';

const FetchUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState('');

  const fetchUniversities = async () => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Introduce el nombre del país"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <Button title="Buscar Universidades" onPress={fetchUniversities} color="#4CAF50" />

      {universities.length > 0 && (
        <FlatList
          data={universities}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.universityItem}>
              <Text style={styles.universityName}>{item.name}</Text>
              <Text style={styles.universityLink}>{item.web_pages[0]}</Text>
              <Text style={styles.visitLink} onPress={() => Linking.openURL(item.web_pages[0])}>
                Visitar Sitio Web
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  universityItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  universityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  universityLink: {
    color: '#555',
    marginBottom: 5,
  },
  visitLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default FetchUniversities;
