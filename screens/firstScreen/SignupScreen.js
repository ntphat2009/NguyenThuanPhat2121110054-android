// screens/SignupScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button ,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Gọi API để đăng ký tài khoản (ở đây là giả định)
      // Nếu đăng ký thành công, lưu thông tin đăng nhập vào AsyncStorage
      await AsyncStorage.setItem('username', username);
      alert('Đăng ký thành công!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Lỗi khi đăng ký:', error);
    }
  };

  return (
    <View>
        
      <Text style={styles.headerShown}>Signup Screen</Text>
      <View>
            <Text style={styles.title}>Username :</Text>
            <TextInput style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
      </View>
      
      <View>
            <Text style={styles.title}>Password :</Text>
            <TextInput style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
      </View>
      
      <View style={styles.buttonlg}>
      <Button title="Signup" onPress={handleSignup} />

      </View>
      <Text onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text>
    </View>
  );
};

const styles=StyleSheet.create({
    input:{
        padding:20,
        borderWidth:'1px',
        borderColor:'blue',

    },
    title:{
        marginTop:'10px',
        marginBottom:'10px',
        fontWeight:'bold',
    },
    buttonlg:{
        marginTop:20,
    },
    
    headerShown:{
        
        fontWeight:'1000',
        color:'blue',
        marginHorizontal:'auto',
        
    }

    
})
export default SignupScreen;
