import React, { useState, useEffect } from "react";
import { Image, Text, View ,StyleSheet,TouchableOpacity ,FlatList } from "react-native";
import {useNavigation} from '@react-navigation/native';

import axios from 'axios';

const ListCategory=()=>{
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);

    // Hàm gọi API để lấy danh sách categories
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    // Gọi hàm để lấy danh sách categories khi component được render
    useEffect(() => {
      fetchCategories();
    }, []);
  
    // Hàm xử lý khi chọn một category
    const handleCategoryPress = async (selectedCategory) => {
        try {
          console.log('Category pressed:', selectedCategory);
      
          const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
          const data = await response.json();
          navigation.navigate('ProductCategory', { category: selectedCategory, products: data });
        } catch (error) {
          console.error('Error fetching products by category:', error);
        }
      };
      
      
    return(
        <>
        
        <View style={styles.title}>
            <Text style={{color:'black',fontWeight:'bold'}}>Danh mục</Text>
            <Text>Xem thêm</Text>
        </View>
        <View style={styles.container}>
            <FlatList 
            data={categories}
            keyExtractor={(item) => item}
            style={styles.container}
            horizontal={true}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCategoryPress(item)}>
                <View style={styles.item}>
                <Text style={styles.nameCategory}>{item}</Text>
                </View>
                
            </TouchableOpacity>
            )}
        />
            

            
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
        marginHorizontal:'10px',
        marginBottom:15
    },
    item:{
        width:'200px', 
        marginTop:'10px',
        borderRadius:'10px'
        
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
export default ListCategory;