// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductCart from './../screens/cart/ProductCart';
import Content from './Content';


const Tab = createBottomTabNavigator();



function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Content} />
      <Tab.Screen name="Cart" component={ProductCart} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
