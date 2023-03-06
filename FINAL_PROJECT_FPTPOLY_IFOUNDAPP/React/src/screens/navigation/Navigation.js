import { StyleSheet, Text, View } from 'react-native';
import React ,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } 
from '@react-navigation/bottom-tabs';
import UserNavigation from '../users/UserNavigation';
import PrductNavigation from '../product/ProductNavigation';
import { UserContext } from '../users/UserContext';

export default  Navigaton = () => {
    const { isLoggedIn } = useContext(UserContext);
  return (
    
      <NavigationContainer>
        {
            isLoggedIn == true ?
            <PrductNavigation /> :
            <UserNavigation />

        }
    </NavigationContainer>
    
  )
}


