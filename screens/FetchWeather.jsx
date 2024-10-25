import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const FetchWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "35cf0d2186d78bb176a1292a87a780fb";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const fetchWeather = async () => {
    try {
      const response = await fetch(`${apiUrl}Santo%20Domingo&appid=${apiKey}`);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      {weather && weather.main ? (
        <View style={styles.weatherInfo}>
          <Text style={styles.title}>Clima en Santo Domingo</Text>
          <Text style={styles.detail}>Temperatura: {weather.main.temp}°C</Text>
          <Text style={styles.detail}>Clima: {weather.weather[0]?.description}</Text>
          <Text style={styles.detail}>Humedad: {weather.main.humidity}%</Text>
          <Text style={styles.detail}>Velocidad del viento: {weather.wind.speed} m/s</Text>
        </View>
      ) : (
        <Text style={styles.errorMessage}>No se pudo obtener la información del clima.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
  },
  loadingIndicator: {
    marginTop: 20,
  },
  weatherInfo: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default FetchWeather;
