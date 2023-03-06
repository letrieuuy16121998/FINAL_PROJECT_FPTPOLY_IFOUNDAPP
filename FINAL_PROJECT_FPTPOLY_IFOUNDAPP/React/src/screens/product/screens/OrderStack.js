import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from './Home';
import Detail from '../screens/Detail';
import Paymentmethod from './Paymentmethod';
import Cart from './Cart';
import Order from './Order';
import DetailOrder from './DetailOrder';


export default  OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    
    <Stack.Screen name="Order" component={Order} />
    <Stack.Screen name="DetailOrder" component={DetailOrder} />
    
    

  </Stack.Navigator>
  )
}


