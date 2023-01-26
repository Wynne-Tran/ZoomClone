import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from './Home'
import MeetingRoom from './MeetingRoom'
function Navigation() {
    const stack = createStackNavigator();
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName='Home'>
            <stack.Screen options={{headerShown: false}}  name="Home" component={Home}/>
            <stack.Screen 
            options={{
                //headerShown: false,
                title: 'Start a Meeting',
                headerStyle: {
                    backgroundColor: "#1c1c1c",
                    shadowOpacity: 0,
                    borderBottomColor: '#1c1c1c'
                },
                headerTintColor: "white"
            }}  
            name="Room" 
            component={MeetingRoom}
            />
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
