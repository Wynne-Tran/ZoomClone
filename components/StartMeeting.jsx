import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

function StartMeeting({name, setName, roomId, setRoomId, joinRoom}) {
  return (
    <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
            <TextInput 
                style={styles.TextInput}
                value={name}
                onChangeText={text => setName(text)}
                placeholder="Enter name..."
                placeholderTextColor="grey"
            />
        </View>
        <View style={styles.info}>
            <TextInput 
                style={styles.TextInput}
                value={roomId}
                onChangeText={text => setRoomId(text)}
                placeholder="Enter room id..."
                placeholderTextColor="grey"
            />
        </View>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
            onPress={() => joinRoom()}
            style={styles.meetingButton}>
                <Text style={{color: 'white', fontWeight:'bold'}}>Start Meeting</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default StartMeeting
const styles = StyleSheet.create({
    startMeetingContainer: {
      alignItems: 'center',
  
    },
    info: {
      width: "95%",
      backgroundColor: '#373538',
      height: 50,
      borderBottomWidth: 1,
      borderColor: "#484648",
      padding: 12,
      justifyContent: 'center'
    },
    TextInput: {
      color: 'white',
      fontSize: 18,
  
    },
    meetingButton: {
      width: 350,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0470DC',
      height: 50,
      borderRadius: 15
    },
  });