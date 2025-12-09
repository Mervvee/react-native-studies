import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View, Text, ImageSourcePropType, Image, Pressable } from 'react-native';
import { JSX } from 'react/jsx-dev-runtime';
import RNHapticFeedback, { HapticOptions } from "react-native-haptic-feedback";


import DiceOne from '../assets/dice-six-faces-one.png';
//diceona hata vermesin diye srcde index.d.ts dosyasını kurup png modulu tanimladik.
import DiceTwo from '../assets/dice-six-faces-two.png';
import DiceThree from '../assets/dice-six-faces-three.png';
import DiceFour from '../assets/dice-six-faces-four.png';
import DiceFive from '../assets/dice-six-faces-five.png';
import DiceSix from '../assets/dice-six-faces-six.png';

const options: HapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  }
  
//
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
//normalde asagidaki dice yeterli olacaktır cunku zaten icerisinde imageurli dicepropsa bağladik ama bu da bir secenek olarak kalsin.

//Dice içinde obje olarak imageurl i verdikten sonra diyorum ki buraya herhangi bir url vermiyıorum buyrada amacım şu:
//burada gelecek bir url kesinlikle bir image url olacak!
const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={{ width: 300, height: 300 }} source={imageUrl} />
    </View>
  )
}
//




function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  

  const rollDiceOnTop = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    RNHapticFeedback.trigger("selection", options);

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }



  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTop} style={styles.rollBtn}>
        <Text>Roll The Dice</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rollBtn: {
    padding: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: '#f7c9f4ff',
    opacity: 0.8,
    borderTopRightRadius: 15
  }
});

export default App;
