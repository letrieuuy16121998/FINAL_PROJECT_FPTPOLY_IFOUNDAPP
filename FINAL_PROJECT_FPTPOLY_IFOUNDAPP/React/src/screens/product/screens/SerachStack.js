import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Serach from './Serach';
import Detail from './Detail';

export default  SerachStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Search" component={Serach} />
    {/* <Stack.Screen name="Detail" component={Detail} />   */}
  </Stack.Navigator>
  )
}


