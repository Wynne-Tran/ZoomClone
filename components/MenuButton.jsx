import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const items = [
  {
    id: 1,
    name: 'video-camera',
    title: 'New Meeting',
    color: "#FF751F"
  },
  {
    id: 2,
    name: 'plus-square',
    title: 'Join'
  },
  {
    id: 3,
    name: 'calendar',
    title: 'Schedule'
  },
  {
    id: 4,
    name: 'upload',
    title: 'Share Screen'
  },
  {
    id: 5,
    name: 'upload',
    title: 'Share Screen'
  },
  {
    id: 6,
    name: 'upload',
    title: 'Share Screen'
  },
]

function MenuButton({navigation}) {

  const  openMeeting = () => {
    navigation.navigate('Room')
  }
  return (
    <ScrollView 
    horizontal={true}
    style={styles.container}>
      {items.map((item, index) => 
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={() => openMeeting()}
            style={{...styles.button, backgroundColor: item.color ? item.color : "#0470DC"} }
            >
              <FontAwesome name={item.name} size={23} color={'#efefef'} />
          </TouchableOpacity>
          <Text style={styles.textButton}>{item.title}</Text>
        </View>
      )}
    </ScrollView>
  )
}

export default MenuButton
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#1F1F1F',
  
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#858585',
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600"
  }
});
