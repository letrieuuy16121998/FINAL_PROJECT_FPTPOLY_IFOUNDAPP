import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from './Home';
import Detail from '../screens/Detail';
import Paymentmethod from './Paymentmethod';
import Cart from './Cart';
import Order from './Order';
import CartDetail from './CartDetail';



export default  HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} /> 
    <Stack.Screen name="Paymethod" component={Paymentmethod} /> 
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="CartDetail" component={CartDetail} />
    
    
    

  </Stack.Navigator>
  )
}


