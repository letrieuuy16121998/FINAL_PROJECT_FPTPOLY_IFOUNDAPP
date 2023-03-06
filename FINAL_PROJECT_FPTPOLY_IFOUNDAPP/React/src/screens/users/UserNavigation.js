import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import  {Login}  from './screens/Login';
import  {Register}  from './screens/Register';
import { Reset } from './screens/Reset';
import Profile from '../product/screens/Profile';

export default  UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Reset" component={Reset} />   
    <Stack.Screen name="Profile" component={Profile} /> 
  </Stack.Navigator>
  )
}


