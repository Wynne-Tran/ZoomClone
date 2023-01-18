import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'


const contactMenuButtons = [
  {
    type: "starred",
    name: "Temp"
  },
  {
    type: "contact",
    name: "Wynne Tran",
    photo: require('../assets/adaptive-icon.png'),
  },
  {
    type: "contact",
    name: "Tram Tran",
    photo: require('../assets/icon.png'),
  },
  {
    type: "contact",
    name: "Hoang Tram",
    photo: require('../assets/favicon.png'),
  },
  {
    type: "contact",
    name: "Tram Hoang",
    photo: require('../assets/splash.png'),
  },


]
function ContactMenu() {
  return (
    <View style={styles.container}>
        {
          contactMenuButtons.map((item, index) => 
            <View key={index} style={styles.row}>
              {item.type == 'starred' ? (
                <View style={styles.startIcon}>
                  <AntDesign name='star' size={30} color="#efefef" />
                </View>
              ) : (
                <Image style={styles.image} source={item.photo} />
              )} 
              <Text style={styles.text}>
                {item.name}
              </Text>
            </View>
          )
        }
    </View>
  )
}

export default ContactMenu
const styles = StyleSheet.create({
  container: {
    
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  startIcon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 40,
    height: 40, 
    borderRadius: 50
  }
});
