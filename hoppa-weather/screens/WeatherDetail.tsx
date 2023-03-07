import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { WeatherStackParams } from '../WeatherStackParams';

function WeatherDetail() {
  const route: RouteProp<WeatherStackParams, 'WeatherDetail'> = useRoute();
  const { item } = route.params;
  const info = item.day;
  return (
    <View style={styles.container}>
      {info && (
        <>
          <Image
            style={styles.img}
            source={{
              uri: 'https://unsplash.it/150/150',
            }}
          />
          <View>
            <Text style={styles.condition}> {info.condition.text}</Text>
          </View>
          <View>
            <Text style={styles.text}>
              min {info.mintemp_c}°C max {info.maxtemp_c}°C
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              {info.daily_chance_of_rain}% chance of rain
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  img: {
    width: 150,
    height: 150,
  },
  condition: {
    fontSize: 25,
    marginVertical: 15,
  },
  text: {
    marginBottom: 15,
    fontSize: 16,
  },
});

export default WeatherDetail;
