import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const MyHeader = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.headerText}>footwear</Text>
      </View>
      <View>
      <Image source={require('../assets/logo.jpg')}
      style={{width: 100, height: 100}} />
      </View>
       
       
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'15px',
    marginBottom:'20px'
  },
 
  headerText: {
    color: 'black', // Màu chữ
    fontSize: 18, // Kích thước chữ
    fontWeight: 'bold', // Độ đậm của chữ
    textTransform:'uppercase',
  },
});

export default MyHeader;
