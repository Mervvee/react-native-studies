import { Alert, Linking, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Etst() {

  const openInstagram = async () => {
  const appURL = "instagram://user?username=merve";
  const webURL = "https://instagram.com/merve";

 try {
    const supported = await Linking.canOpenURL(appURL);
    
    console.log("App açılabilir mi? :", supported); // ← Burada true/false görebilirsin

    if (supported) {
      await Linking.openURL(appURL);   // Uygulamadan aç
    } else {
      await Linking.openURL(webURL);   // Tarayıcıdan aç
    }
  } catch (error) {
    Alert.alert('Hata', 'Instagram açılamadı.');
    console.error('Instagram açma hatası:', error);
  }
};


  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
