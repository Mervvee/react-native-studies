import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal = {true} style= {styles.container}>
        <View style= {[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style= {[styles.card, styles.cardElevated2]}>
            <Text>me</Text>
        </View>
        <View style= {[styles.card, styles.cardElevated3]}>
            <Text>to</Text>
        </View>
        <View style= {[styles.card, styles.cardElevated4]}>
            <Text>see</Text>
        </View>
        <View style= {[styles.card, styles.cardElevated5]}>
            <Text>more</Text>
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
  container:{
    padding:10,
  },
  card:{
    width:100, 
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    margin:10,
  elevation: 10,
  },
  cardElevated: {
    backgroundColor:'#18610eff'
  },
  cardElevated2: {
    backgroundColor:'#196ad4ff'
  },
  cardElevated3: {
    backgroundColor:'#daf34fff'
  },
  cardElevated4: {
    backgroundColor:'#aa32e2ff'
  },
  cardElevated5: {
    backgroundColor:'#29fc56ff'
  }
})