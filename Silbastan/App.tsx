import {Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import Test from './components/Test'
import ContactList from './components/ContactList'

const App = () => {
  return (
    //*** SORUNU HENÜZ ÇÖZMEDİ
    //burada safeareaview'e flex:1 vermeyince sayfada scroll bug oluştu çünkü safeareaview sayfayı nasıl ne kadar kaplaması gerektiğini bilmiyordu!
    //React Native'de bu bilinen bir bugdır. Dikkat et
    //SORUNU HENÜZ ÇÖZMEDİ ***

    //sorun her bir sayfada ayrı ayrı safearaeviewler ve scrollvieler vermekten kaynaklanıyordu.
    //onları ayarladık. safeareaviewleri kaldırdık ancak kendi içinde yine ayrı ıscrolllanacakları bıraktık ufak ayarlarla!
    <SafeAreaView style={{flex: 1}}> 
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
        removeClippedSubviews={true}
        scrollEventThrottle={16}
      >
        <Text style={{padding: 10}}>App</Text> 
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
        <Test/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App