import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';


import HomeScreen from '../screens/home/HomeScreen'
import ProductDetail from '../screens/productDetail/ProductDetail';


import LoginScreen from '../screens/firstScreen/LoginScreen';
import SignupScreen from '../screens/firstScreen/SignupScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductCategory from './../screens/productCategory/ProductCategory';
const Stack = createStackNavigator();

function Content () {
 
  return (
  
      
      <Stack.Navigator initialRouteName="Login" headerMode="none">
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
          // headerBackTitleVisible: false, // Ẩn title trên nút quay lại
          // // headerLeft: null, // Ẩn nút quay lại
          // headerTitleAlign: 'center', // Căn giữa tiêu đề
          headerTitle: 'Home',
          // Nội dung tiêu đề
        }}
      />
      <Stack.Screen name="ProductCategory" component={ProductCategory} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>

  );
};
export default Content;