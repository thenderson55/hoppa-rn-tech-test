import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import WeatherCard from '../components/WeatherCard';

function WeatherList() {
  const [weatherForecast, setWeatherForecast] = useState();
  console.log('weatherForecast', weatherForecast);
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          'https://api.weatherapi.com/v1/forecast.json?key=d5f2df6ca375402faed103236230603&q=Paris&days=7'
        );
        const data = await response.json();
        setWeatherForecast(data.forecast.forecastday);
      } catch (error) {
        console.log('Error', error);
      }
    };
    getWeather();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={weatherForecast}
        renderItem={({ item }) => <WeatherCard item={item} />}
        // keyExtractor={(item) => item.ref}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  list: {
    borderRadius: 8,
    marginHorizontal: 15,
  },
  listContent: {
    marginBottom: 50,
    borderRadius: 8,
  },
});
export default WeatherList;
