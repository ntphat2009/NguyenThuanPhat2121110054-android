// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button ,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        // Lấy thông tin tài khoản từ AsyncStorage
        const storedUsername = await AsyncStorage.getItem('username');
        
        // Kiểm tra xem tài khoản có tồn tại không
        if (storedUsername && storedUsername === username) {
          // Gọi API để kiểm tra thông tin đăng nhập (ở đây là giả định)
          // Nếu thông tin hợp lệ, lưu thông tin đăng nhập vào AsyncStorage
          await AsyncStorage.setItem('username', username);
          alert('Đăng nhập thành công!');
          
          // Chuyển hướng đến màn hình chính (main)
          navigation.navigate('Home');
        } else {
          alert('Tài khoản không tồn tại!');
        }
      } catch (error) {
        console.error('Lỗi khi đăng nhập:', error);
      }
  };

  return (
    <View >
      <Text style={styles.headerShown}>Login Screen</Text>
      <View>
        <Text style={styles.title}>Username :</Text>
        <TextInput style={styles.input}
        placeholder="Nhập tên đăng nhập..."
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      </View>
      <View>
        
        <Text style={styles.title}>Password :</Text>
        <TextInput style={styles.input}
        placeholder="Nhập mật khẩu..."
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      </View>
      <View style={styles.buttonlg}>
      <Button  title="Login" onPress={handleLogin} />

      </View>
      <Text onPress={() => navigation.navigate('Signup')}>Don't have an account? Signup</Text>
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
export default LoginScreen;
