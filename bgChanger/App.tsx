import { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { JSX } from 'react/jsx-dev-runtime';

function App(): JSX.Element {
  const [randomBackground, setrandomBackground] = useState('#ffffff');
  const [randomBtnColor, setrandomBtnColor] = useState('#000000');
  const [randomBtnTxt, setrandomBtnTxt] = useState('#fcb1fcff');

  const generateBackgroundColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setrandomBackground(color);
  }; 

  const generateButtonColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setrandomBtnColor(color);
  };
  const generateButtonTxtColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setrandomBtnTxt(color);
  };
  return (
    <SafeAreaProvider>
      <StatusBar  />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateBackgroundColor} style={{ marginBottom: 20 }}>
          <View style={[styles.actionBtn, { backgroundColor: randomBtnColor }]}>
            <Text style={[styles.actionBtnTxt, { color: randomBtnTxt }]}>
              Change Background Color
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={generateButtonColor} style={{ marginBottom: 20 }}>
          <View style={[styles.actionBtn, { backgroundColor: randomBtnColor }]}>
            <Text style={[styles.actionBtnTxt, { color: randomBtnTxt }]}>
              Change Button Background C
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={generateButtonTxtColor} style={{ marginBottom: 20 }}>
          <View style={[styles.actionBtn, { backgroundColor: randomBtnColor }]}>
            <Text style={[styles.actionBtnTxt, { color: randomBtnTxt }]}>
              Change Background Text Color
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#ebb4b4ff',
  },
  actionBtn: {
    borderRadius: 20,
    backgroundColor: '#260661ff',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffffff',
    textTransform: 'uppercase',
  }
});

export default App;