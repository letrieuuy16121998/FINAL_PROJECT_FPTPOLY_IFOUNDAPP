import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Profile from './Profile';
import {Login} from '../../users/screens/Login'
import EditProfile from './EditProfile';
import {Reset} from '../../users/screens/Reset'
import CartHistory from './CartHistory';

export default  ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="Reset" component={Reset} />
  </Stack.Navigator>
  )
}


