import React from "react";
import { Image, Text, View ,StyleSheet, ScrollView,Button} from "react-native";
import ListCategory from "./ListCategory";
import ListProduct from './ListProduct';


const HomeScreen= ()=>{
    return(
        <>
        <ScrollView>
            <View style={styles.item}>
                <Image source={require('../../assets/banner1.webp')} style={{width:'100%',height:160,borderRadius:5}}/>
            </View >
            
            <ListCategory/>
            <ListProduct/>
            <View>
            </View>
        </ScrollView>
        
        </>
        
    );
}

const styles = StyleSheet.create({
    item:{
        width:'100%',
       
    }
})

export default HomeScreen;