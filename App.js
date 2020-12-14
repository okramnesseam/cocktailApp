import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer}  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/Homepage'
import Listpage from './components/Listpage'
import Recipepage from './components/Recipepage'
import RandomRecipepage from './components/RandomRecipepage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name="Homepage" component={Homepage} />
     <Stack.Screen name="Listpage" component={Listpage} />
     <Stack.Screen name="Recipepage" component={Recipepage} />
     <Stack.Screen name="RandomRecipepage" component={RandomRecipepage} />
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
