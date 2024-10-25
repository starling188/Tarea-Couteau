import React, { useState } from 'react';
import { View, Text, Button, FlatList, Linking, StyleSheet } from 'react-native';

const FetchNews = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch(`https://TU_WORDPRESS_SITE/wp-json/wp/v2/posts`);
      const data = await response.json();
      setNews(data.slice(0, 3)); // Guardamos solo las tres primeras noticias
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Cargar Noticias" onPress={fetchNews} />

      {news.length > 0 && (
        <FlatList
          data={news}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Text style={styles.title}>{item.title.rendered}</Text>
              <Text style={styles.excerpt}>
                {item.excerpt.rendered.replace(/<[^>]+>/g, '')}
              </Text>
              <Text style={styles.readMore} onPress={() => Linking.openURL(item.link)}>
                Leer más
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
  newsItem: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2, // Para sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  excerpt: {
    color: '#555',
    marginVertical: 5,
  },
  readMore: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default FetchNews;
