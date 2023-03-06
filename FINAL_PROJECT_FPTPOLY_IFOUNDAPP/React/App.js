import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/product/screens/Home';
import  Login  from './src/screens/users/screens/Login';
import Paymentmethod from './src/screens/product/screens/Paymentmethod'
import { Register } from './src/screens/users/screens/Register';
import { Reset } from './src/screens/users/screens/Reset';
import Navigation from './src/screens/navigation/Navigation';
import { UserContextProvider } from './src/screens/users/UserContext';
import { ProductContextProvider } from './src/screens/product/ProductContext';
import { UserContext } from './src/screens/users/UserContext';
import Cart from './src/screens/product/screens/Cart';
import Iphone from './src/screens/product/screens/Iphone';
import Detail from './src/screens/product/screens/Detail';
import DetailOrder from './src/screens/product/screens/DetailOrder';
import Order from './src/screens/product/screens/Order';
import EditProfile from './src/screens/product/screens/EditProfile';

export default function App() {
  return (
      <UserContextProvider>
        <ProductContextProvider> 
          <Navigation/>
        </ProductContextProvider>   
      </UserContextProvider>
   
  );
}


