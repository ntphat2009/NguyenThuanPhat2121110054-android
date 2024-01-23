import { Image, Text, View ,StyleSheet,Button,TouchableOpacity,FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";

const ProductCategory=({ route })=>{
    const { category, products } = route.params;
    const goBack = () => {
      navigation.goBack();
      };


return (
  
  <ScrollView>

  
  <View style={{width:'100%',marginTop:10,justifyContent:'center'}}>
    <Text style={styles.nameCategory}>{category}</Text>
  </View>
  <View style={styles.container}>
  {products.map((item) => (
      <View style={styles.item}  key={item.id} item={item}>
      <TouchableOpacity onPress={() => handlePress(item)}>
<Image source={{ uri: item.image }} style={{ width: '100%', height: 160 }} />
</TouchableOpacity>

          <View style={styles.description}> 
              <Text style={styles.descName}>{item.title} </Text> 
              <Text style={styles.descPrice}>{item.price}VND </Text>
            
          </View>

      
      </View >
  ))}    
  </View>
  <View>
    <Button  title="Quay lại" onPress={goBack} />
  </View>
  </ScrollView>
  );
  
}


const styles =StyleSheet.create({
  title:{
      
      flexDirection:'row',
      justifyContent:'space-between'
  },
  container:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
      marginBottom:15
  },
  item:{
      width:'45%', 
      marginTop:'10px',
      borderRadius:'5px',
      border:'1px solid #aaaeb5',
      marginBottom:'10px'
      
  },
  description:{
      backgroundColor:'#aaaeb5'
  },
  descName:{
      textAlign:'center',
      flexWrap:'wrap',
      fontWeight:'bold'
  },
  descPrice:{
      position:'absolute',
      bottom:50,
      right:10,
      zIndex:3,
      backgroundColor:'#ff4747',
      color:'black',
      fontWeight:'bold',
      borderRadius:10
  },
  nameCategory:{
    color:'white',
    backgroundColor:'green',
    fontWeight:'bold',
    borderRadius:10,
    textTransform:'uppercase',
    marginRight:'auto',
    padding:20
}
})
export default ProductCategory;