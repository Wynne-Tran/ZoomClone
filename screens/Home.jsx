import React from 'react'
import {View,StyleSheet, Text, SafeAreaView} from 'react-native'
import ContactMenu from '../components/ContactMenu'
import Header from '../components/Header'
import MenuButton from '../components/MenuButton'
import SearchBar from '../components/SearchBar'

function Home({navigation}) {
  return (
    <View style={styles.container}>
        <SafeAreaView>
            <Header />
            <SearchBar />
            <MenuButton navigation={navigation} />
            <ContactMenu />
        </SafeAreaView>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 70,
      paddingHorizontal: 10,
      backgroundColor: '#1c1c1c',
    },
  });