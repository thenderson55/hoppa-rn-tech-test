import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherDetail from './screens/WeatherDetail';
import WeatherList from './screens/WeatherList';
import { WeatherStackParams } from './WeatherStackParams';

const Stack = createNativeStackNavigator<WeatherStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WeatherList'>
        <Stack.Screen
          name='WeatherList'
          options={{ title: '7-day Forecast' }}
          component={WeatherList}
        />
        <Stack.Screen
          name='WeatherDetail'
          options={{ title: 'Weather Detail' }}
          component={WeatherDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
