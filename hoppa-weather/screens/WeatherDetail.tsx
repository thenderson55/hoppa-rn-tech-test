import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { WeatherStackParams } from '../WeatherStackParams';

function WeatherDetail() {
  const route: RouteProp<WeatherStackParams, 'WeatherDetail'> = useRoute();
  const { item } = route.params;
  const info = item.day;
  console.log('Item Detail', info);
  console.log('Item Detail 1', info.mintemp_c);
  console.log('Item Detail 2', info.maxtemp_c);
  console.log('Item Detail 3', info.condition.text);
  return <Text>WeatherDetail</Text>;
}

export default WeatherDetail;
