
import { Image, Text, View ,StyleSheet, ScrollView} from "react-native";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const ProductCart=()=>{
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
        <ScrollView>
            <View style={styles.item}>
                <Image source={require('../../assets/1.jpg')} style={{width:'100%',height:160,borderRadius:5}}/>
            </View >
            <View>
                <Text style={styles.nameProduct}>Giày bóng đá Nike air</Text>
                
                
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Giá :</Text>
                <Text style={styles.price}>1.000.000VNĐ</Text>
            </View>
            <View>
                <Text style={styles.buyButton}>Mua ngay</Text>
            </View>
            <View>
            <Text style={{color:'red',fontWeight:'bold'}}>Mô tả sản phẩm</Text>
            <Text>Dù nhiều ý kiến cho rằng Cristiano Ronaldo không còn ở trên đỉnh cao của sự nghiệp nhưng một ngôi sao huyền thoại bóng đá thế giới sẽ luôn biết cách tỏa sáng theo phong cách riêng của anh ấy. Điều đó, chúng ta có thể chiêm ngưỡng bằng những bước chạy thần tốc, đường dẫn bóng đẹp mắt mà Ronaldo đã thể hiện ở mùa giải Cúp C1 châu Âu.  Đến hẹn lại lên, Nike lại một lần nữa sẵn sàng cho sự kiện ra mắt Nike Mercurial 'Dream Speed 7' 2023 - lấy cảm hứng từ đôi Mercurial Vapor năm 2008, để anh  tiếp tục chinh phục những danh hiệu mới.</Text>
            </View>
        </ScrollView>
        
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
    buyButton:{

        backgroundColor:'red',
        fontWeight:'bold',
        borderRadius:15,
        width:'90%',
        textAlign:'center',
        textTransform:'uppercase',
        margin:'auto'
    }

})

export default ProductCart;