import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

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

  return <Text>WeatherList</Text>;
}

export default WeatherList;
