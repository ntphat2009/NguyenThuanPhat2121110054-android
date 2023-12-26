import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';


import HomeScreen from '../screens/home/HomeScreen'
import ProductDetail from '../screens/productDetail/ProductDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();

function Content () {
 
  return (
  
      
      <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerBackTitleVisible: false, // Ẩn title trên nút quay lại
          headerLeft: null, // Ẩn nút quay lại
          headerTitleAlign: 'center', // Căn giữa tiêu đề
          headerTitle: 'ProductDetail',
          // Nội dung tiêu đề
        }}
      />
    </Stack.Navigator>

  );
};
export default Content;