
import { Image, Text, View ,StyleSheet,Button,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";

const ProductDetail=({ route })=>{
    const { item } = route.params;
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
      };
      const addToCart = async () => {
        try {
          // Lấy dữ liệu từ AsyncStorage
          const existingCart = await AsyncStorage.getItem('cart');
      
          // Chuyển dữ liệu từ JSON string thành mảng (nếu có)
          const cart = existingCart ? JSON.parse(existingCart) : [];
      
          // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
          const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
      
          if (existingItemIndex !== -1) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1
            cart[existingItemIndex].quantity += 1;
          } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng với số lượng là 1
            cart.push({ ...item, quantity: 1 });
          }
      
          // Lưu giỏ hàng mới vào AsyncStorage
          await AsyncStorage.setItem('cart', JSON.stringify(cart));
          
          alert('Sản phẩm đã được thêm vào giỏ hàng!');
        } catch (error) {
          console.error('Lỗi khi thêm vào giỏ hàng:', error);
        }
      };
      
    return(
        <>
            <View>
            
            <Button  title="Quay lại" onPress={goBack} />
            </View>
            <View style={styles.item}>
                <Image source={{
                uri: item.image,
                }} style={{width:'100%',height:160,borderRadius:5}}/>
            </View >
            <View>
                <Text style={styles.nameProduct}>{item.title}</Text>
                
                
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Giá :</Text>
                <Text style={styles.price}>{item.price}VNĐ</Text>
            </View>
            <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.buyButton}>Mua ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={addToCart}>
                <Text style={styles.buyButton}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
            </View>
            
            <View>
            <Text style={{color:'red',fontWeight:'bold'}}>Mô tả sản phẩm</Text>
            <Text>{item.description}</Text>
            </View>
            {/* <View><Text>Số lượng sản phẩm trong giỏ hàng: {cartItems.length}</Text></View> */}
        
        </>
        
    );
}

const styles = StyleSheet.create({
    item:{
        width:'100%',
       
    },
    nameProduct:{
        marginTop:10,
        fontWeight:'bold',
        flexWrap:'wrap',
        color:'black'
    },
    price:{
        marginTop:5,
       
        flexWrap:'wrap',
        color:'red'
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:15,
        bottom:0
    },
    buyButton:{

        color:'white',
        backgroundColor:'green',
        fontWeight:'bold',
        borderRadius:10,
        // width:'90%',
        // textAlign:'center',
        textTransform:'uppercase',
        padding:20
    }

})

export default ProductDetail;