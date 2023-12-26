import React from "react";
import { Image, Text, View ,StyleSheet} from "react-native";

const ListCategory=()=>{
    return(
        <>
        <View style={styles.title}>
            <Text style={{color:'black',fontWeight:'bold'}}>Danh mục</Text>
            <Text>Xem thêm</Text>
        </View>
        <View style={styles.container}>
            <View style={styles.item}>
                <Image source={require('../../assets/cat1.jpg')} style={{width:'100%',height:80,borderRadius:5}}/>
            </View >
            <View style={styles.item}>
                <Image source={require('../../assets/cat2.jpg')} style={{width:'100%',height:80,borderRadius:5}}/>
            </View >
            <View style={styles.item}>
                <Image source={require('../../assets/cat3.jpg')} style={{width:'100%',height:80,borderRadius:5}}/>
            </View >
            <View style={styles.item}>
                <Image source={require('../../assets/cat4.jpg')} style={{width:'100%',height:80,borderRadius:5}}/>
            </View >
        

            
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
        justifyContent:'space-between',
        marginBottom:15
    },
    item:{
        width:'20%', 
        marginTop:'10px',
        borderRadius:'10px'
        
    }
})
export default ListCategory;