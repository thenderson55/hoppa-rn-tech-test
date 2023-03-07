import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

function WeatherList() {
  const [weatherForecast, setWeatherForecast] = useState();
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    const locationCoords = `${location?.coords.latitude}, ${location?.coords.longitude}`;
    const getWeather = async () => {
      try {
        const response = await fetch(
          location?.coords
            ? `https://api.weatherapi.com/v1/forecast.json?key=d5f2df6ca375402faed103236230603&q=${locationCoords}&days=7`
            : 'https://api.weatherapi.com/v1/forecast.json?key=d5f2df6ca375402faed103236230603&q=Bangkok&days=7'
        );
        const data = await response.json();
        setWeatherForecast(data?.forecast?.forecastday);
      } catch (error) {
        setErrorMsg('Error fetching weather data');
      }
    };
    getWeather();
  }, [location]);

  return (
    <SafeAreaView style={styles.container}>
      {weatherForecast && (
        <FlatList
          data={weatherForecast}
          renderItem={({ item }) => <WeatherCard item={item} />}
        />
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default WeatherList;
