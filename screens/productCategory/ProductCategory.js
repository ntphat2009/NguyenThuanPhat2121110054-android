import { Image, Text, View ,StyleSheet,Button,TouchableOpacity,FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";

const ProductCategory=({ route })=>{
    const { category, products } = route.params;
    
//     return(
//         <>
//         <View style={styles.title}>
//             <Text style={{color:'black',fontWeight:'bold'}}>Sản phẩm</Text>
//             <Text>Xem thêm</Text>
//         </View>
//         <View style={styles.container}>
//         {productData.map((item) => (
//             <View style={styles.item}  key={item.id} item={item}>
//             <TouchableOpacity onPress={() => handlePress(item)}>
//   <Image source={{ uri: item.image }} style={{ width: '100%', height: 160 }} />
// </TouchableOpacity>

//                 <View style={styles.description}> 
//                     <Text style={styles.descName}>{item.title} </Text> 
//                     <Text style={styles.descPrice}>{item.price}VND </Text>
                  
//                 </View>

            
//             </View >
//         ))}    
//         </View>
//         </>
//     );
return (
    <View>
      <Text>{category}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            {/* Hiển thị các thông tin khác của sản phẩm */}
          </View>
        )}
      />
    </View>
  );
}
export default ProductCategory;