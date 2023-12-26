import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>This is my footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#4CAF50', // Màu nền của footer
    padding: 10, // Khoảng cách giữa nội dung và mép của footer
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
    borderTopWidth: 1, // Đường viền trên cùng của footer
    borderTopColor: '#ccc', // Màu của đường viền
  },
  footerText: {
    color: '#333', // Màu chữ
    fontSize: 16, // Kích thước chữ
  },
});

export default MyFooter;
