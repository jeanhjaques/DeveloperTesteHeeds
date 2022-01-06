import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
import Home from './src/Home.js';
import Maps from './src/Maps.js';
import ShopRegister from './src/ShopRegister.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="ShopRegister" component={ShopRegister}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

