import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style= {styles.headingText}>FlatCards</Text>
      <ScrollView horizontal = {true}>
        <View style= {styles.container}>
        <View style= {[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style= {[styles.card, styles.cardTwo]}>
          <Text>blue</Text>
        </View>
        <View style= {[styles.card, styles.cardThree]}>
          <Text>pink</Text>
        </View>
        <View style= {[styles.card, styles.cardThree]}>
          <Text>pink</Text>
        </View>
        <View style= {[styles.card, styles.cardThree]}>
          <Text>pink</Text>
        </View>
        <View style= {[styles.card, styles.cardThree]}>
          <Text>pink</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    
},
card: {
  width:100, 
  height:100,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
  margin:8,
  elevation: 5,
},
cardOne: {backgroundColor:'red',borderRadius:10,},
cardTwo: {backgroundColor:'lightblue',borderRadius:10,},
cardThree: {backgroundColor:'pink', borderRadius:10},

})