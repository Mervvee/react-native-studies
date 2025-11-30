import { Button, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  //functionality type
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  const onPress = () => { openWebsite('https://thetravelguide.blog/934-2/') }
  
  const onPressContact = () => { openWebsite('https://thetravelguide.blog/contact/') }

  return (
    //here is how we'll see(the view)
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.headerContainer}>How To Travel For Free</Text>
        </View>
        <Image source={{ uri: 'https://www.wanderlustmagazine.com/wp-content/uploads/2023/11/guidebook-header-image-scaled.jpg' }} style={styles.cardImage} />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>Travel without the cost? Here are some ideas on how travel for free!</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <View style={styles.footerContainer}>
          <TouchableOpacity onPress={onPress}>
            <Text style={{ color: '#064792ff' }}>Read More...</Text>
          </TouchableOpacity></View>
          
          <View style={styles.footerContainer}>
          <Button touchSoundDisabled={true} onPress={onPressContact} title="Follow for more" color='#064792ff' accessibilityLabel='this is different from touchable opacity'/>
          </View>
          </View>
      </View>
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
  card: {},
  cardElevated: { 
    backgroundColor: '#bbddfaff',
    margin: 10,
    borderRadius: 8,
    padding: 10,
    elevation: 4
  },
  headerContainer: {
    fontSize: 18.5,
    fontWeight: 'bold',
    margin: 10,
    paddingHorizontal: 10,
  },
  cardImage: {
    height: 200,
    margin: 10,
    borderRadius: 8,
    padding: 10,
    elevation: 4,
  },
  bodyContainer: {
    margin: 10,
    paddingHorizontal: 10,
    marginBottom: 0
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: '#d6e9ffff',
    borderRadius: 8,
    padding: 5,
    elevation: 1.6
  },
})