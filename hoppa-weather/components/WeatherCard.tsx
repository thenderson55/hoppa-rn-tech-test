import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WeatherStackParams, WeatherType } from '../WeatherStackParams';

type Props = {
  item: WeatherType;
};

function WeatherCard(props: Props) {
  const navigation: NativeStackNavigationProp<WeatherStackParams> =
    useNavigation();
  const { item } = props;
  const info = item.day;
  console.log('Item', item.day);
  console.log('Res 1', item.day.mintemp_c);
  console.log('Res 2', item.day.maxtemp_c);
  console.log('Res 3', item.day.condition.text);

  return (
    <View style={styles.container}>
      {item && (
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => navigation.navigate('WeatherDetail', { item })}
        >
          {info.condition.text && (
            <Text numberOfLines={1} style={styles.text}>
              {info.condition.text}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
  },
  text: {
    color: 'black',
  },
});

export default WeatherCard;
