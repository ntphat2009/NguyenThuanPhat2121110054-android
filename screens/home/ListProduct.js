import React, { useState, useEffect } from "react";
import { Image, Text, View ,StyleSheet,TouchableOpacity  } from "react-native";
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
const ListProduct = ()=>{
    const navigation=useNavigation();
    const handlePress = (item) => {
        navigation.navigate('ProductDetail', { item });
      };
      
    const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Gọi hàm để lấy dữ liệu từ API và cập nhật state
    getDataFromAPI();
  }, []);

  const getDataFromAPI = () => {
    axios
      .get('http://fakestoreapi.com/products')
      .then(function (response) {
        setProductData(response.data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  };
    return(
        <>
        <View style={styles.title}>
            <Text style={{color:'black',fontWeight:'bold'}}>Sản phẩm</Text>
            <Text>Xem thêm</Text>
        </View>
        <View style={styles.container}>
        {productData.map((item) => (
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
        </>
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
})
export default ListProduct;