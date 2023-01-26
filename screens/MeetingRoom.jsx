import React, {useState, useEffect, useRef} from 'react'
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native'
import StartMeeting from '../components/StartMeeting';
import {io} from 'socket.io-client'
import { Camera, CameraType } from 'expo-camera';
import * as Permissions from 'expo-permissions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: '#efefefef'
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop-Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
]
function MeetingRoom() {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
    const [activeUsers, setActiveUsers] = useState(["Wynne", "Chuot", "Aan"])
    const [permission, setPermission] = useState(false)
    const [type, setType] = useState(CameraType.front);

    const API_URL = 'http://192.168.1.103:30001'
    const socket = io(`${API_URL}`)

    function toggleCameraType() {
      setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    const joinRoom = () => {
      socket.emit('join-room', {roomId: roomId, userName: name})
    }

    const openCam = async() => {
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      console.log(camera)
      if (camera.status === 'granted') {
        setPermission(true)
      } else {
        Alert.alert("Permession")
      }
    }

    //connect server
    useEffect(() => {
      openCam()
      console.log('here');
      socket.on("connection", () => console.log("Client connected"))

      // socket.on('all-users', users => {
      //   console.log("Active Users")
      //   console.log(users)
      //   setActiveUsers(users)
      // })
    }, [])
  return (
    <View style={styles.container}>
      {permission ? (
        <View style={{flex: 1}}>
          <View style={styles.activeUsersContainers}>
            <View style={styles.cameraContianer}>
              <Camera 
                type={type}
                style={{
                  width: activeUsers.length == 0 ? '100%' : 150, 
                  height: activeUsers.length == 0 ? 600 : 150
                }}
              >
                {/* <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                    <Text style={styles.text}>Flip Camera</Text>
                  </TouchableOpacity>
                </View> */}
              </Camera>
              {
                activeUsers.map((user, index) => 
                  <View key={index} style={styles.activeUsersContainer}>
                    <Text style={{color: 'white'}}>{user}</Text>
                  </View>
                )
              }
            </View>
          </View>
          <View style={styles.menu}>
            {menuIcons.map((item, index) => 
              <TouchableOpacity style={styles.title} key={index}>
                <FontAwesome name={item.name} size={24} color={'#ffffff'} />
                <Text style={styles.textTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <StartMeeting 
          name={name} 
          setName={setName} 
          roomId={roomId} 
          setRoomId={setRoomId} 
          joinRoom={joinRoom} />    
      )}
    </View>
  )
}

export default MeetingRoom
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    marginTop: 15
  },
  textTitle: {
    color: 'white',
    marginTop: 10
  },
  cameraContianer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  }, 
  activeUsersContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeUsersContainers: {
    flex: 1,
    justifyContent: 'center',

  }
});