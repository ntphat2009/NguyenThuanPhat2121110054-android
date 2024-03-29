// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './../screens/cart/CartScreen';
import Content from './Content';


const Tab = createBottomTabNavigator();



function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" options={{headerShown:false,}} component={Content} />
      <Tab.Screen name="Cart" options={{headerShown:false,}} component={CartScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
