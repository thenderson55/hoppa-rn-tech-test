import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { WeatherStackParams, WeatherType } from '../WeatherStackParams';

type Props = {
  item: WeatherType;
};

function WeatherCard(props: Props) {
  const navigation: NativeStackNavigationProp<WeatherStackParams> =
    useNavigation();
  const { item } = props;
  const info = item.day;

  return (
    <>
      {info && (
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('WeatherDetail', { item })}
        >
          <Image
            style={styles.img}
            source={{
              uri: 'https://unsplash.it/150/150',
            }}
          />
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.condition}>{info.condition.text}</Text>
              <Text style={styles.smallText}>
                min {info.mintemp_c}°C max {info.maxtemp_c}°C
              </Text>
            </View>
            <View style={styles.tempWrapper}>
              <Text>{info.daily_chance_of_rain}%</Text>
              <Text style={styles.smallText}>chance of rain</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  tempWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 12,
  },
  img: {
    width: 50,
    height: 50,
  },
  condition: {
    fontSize: 16,
  },
});

export default WeatherCard;
