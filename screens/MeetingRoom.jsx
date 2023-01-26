import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import StartMeeting from '../components/StartMeeting';
import {io} from 'socket.io-client'


function MeetingRoom() {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
    const [activeUsers, setActiveUsers] = useState()

    const joinRoom = () => {
      socket.emit('join-room', {roomId: roomId, userName: name})
    }

    const API_URL = 'http://192.168.1.103:30001'
    //connect server
    useEffect(() => {
      console.log('here');
      socket = io(`${API_URL}`)
      socket.on("connection", () => console.log("Client connected"))

      socket.on('all-users', users => {
        console.log("Active Users")
        console.log(users)
        setActiveUsers(users)
      })
    }, [])
  return (
    <View style={styles.container}>
        <StartMeeting 
        name={name} 
        setName={setName} 
        roomId={roomId} 
        setRoomId={setRoomId} 
        joinRoom={joinRoom} />
    </View>
  )
}

export default MeetingRoom
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex: 1,

  },
});