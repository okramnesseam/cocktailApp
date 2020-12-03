import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer}  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/Homepage'
import Listpage from './components/Listpage'
import Recipepage from './components/Recipepage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="Homepage" component={Homepage} />
     <Stack.Screen name="Listpage" component={Listpage} />
     <Stack.Screen name="Recipepage" component={Recipepage} />
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
