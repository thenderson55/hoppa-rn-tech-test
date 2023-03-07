import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
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
        <Stack.Screen name='WeatherList' component={WeatherList} />
        <Stack.Screen
          name='WeatherDetail'
          // options={{
          //   header: () => null,
          // }}
          component={WeatherDetail}
        />
      </Stack.Navigator>

      {/* <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
      </View> */}
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
