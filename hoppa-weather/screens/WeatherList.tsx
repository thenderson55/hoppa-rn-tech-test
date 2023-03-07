import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

function WeatherList() {
  const [weatherForecast, setWeatherForecast] = useState();
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState(null);
  console.log('weatherForecast', weatherForecast);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log('location lat', location.coords.latitude);
      console.log('location long', location.coords.longitude);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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
        // style={styles.list}
        // contentContainerStyle={styles.listContent}
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
  },
});
export default WeatherList;
