import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import MyFooter from './component/Footer';
import MyHeader from './component/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavigator from './component/TabNavigation';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyHeader/> */}
      {/* <MyFooter/> */}
      <NavigationContainer>
         <TabNavigator />
    </NavigationContainer>
      
    </View>
    
    
    
    
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    paddingHorizontal:'15px',
    marginLeft:15,
    marginRight:15,
  },

  
});
