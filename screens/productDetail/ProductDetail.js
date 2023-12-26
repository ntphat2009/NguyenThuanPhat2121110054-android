
import { Image, Text, View ,StyleSheet,Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const ProductDetail=({ route })=>{
    const { item } = route.params;
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
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
            <View>
                <Text style={styles.buyButton}>Mua ngay</Text>
            </View>
            <View>
            <Text style={{color:'red',fontWeight:'bold'}}>Mô tả sản phẩm</Text>
            <Text>{item.description}</Text>
            </View>
        
        
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

export default ProductDetail;