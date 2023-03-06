
import React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import HomeStack from './screens/HomeStack';
import Cart from './screens/Cart';
import ProfileStack from './screens/ProfileStack';
import SerachStack from './screens/SerachStack';
import OrderStack from './screens/OrderStack';

export default  ProductNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) =>{
        if(route.name == 'HomeStack'){
          return <Image source={require('../../assets/images/home.png')}/>
        }else if(route.name == 'SerachStack'){
          return <Image source={require('../../assets/images/search.png')}/>
        }else if(route.name == 'OrderStack'){
          return <Image source={require('../../assets/images/cart.png')}/>
        }else if(route.name == 'ProfileStack'){
          return <Image source={require('../../assets/images/user.png')}/>
      }
      },
      tabBarLabel: ({focused, color, size}) => {
        if(route.name == 'HomeStack'){
          if(focused){
            return <Image source={require('../../assets/images/dot.png')}/>
          }
          return null;
        }
        if(route.name == 'SerachStack'){
          if(focused){
            return <Image source={require('../../assets/images/dot.png')}/>
          }
          return null;
        }
        if(route.name == 'OrderStack'){
          if(focused){
            return <Image source={require('../../assets/images/dot.png')}/>
          }
          return null;
        }
        if(route.name == 'ProfileStack'){
          if(focused){
            return <Image source={require('../../assets/images/dot.png')}/>
          }
          return null;
        }
      },
      headerShown: false
    })}>
      <Tab.Screen name = "HomeStack" component={HomeStack} />
      <Tab.Screen name = "SerachStack" component={SerachStack} />
      <Tab.Screen name = "OrderStack" component={OrderStack} />
      <Tab.Screen name = "ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  )   
}
