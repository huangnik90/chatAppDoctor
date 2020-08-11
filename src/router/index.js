import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import React from 'react'
import {
    ChooseDoctor,
    SplashScreen, 
    GetStarted, 
    Register,
    Login, 
    UploadPhoto,
    Doctor,
    Hospital,
    Messages, 
    Chat} from '../pages';
import { BottomNavigator } from '../components/molecules';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
const Router = ()=>{
    return(
        <Stack.Navigator initialRouteName="MainApp" >
            <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{headerShown:false}}/>
            <Stack.Screen 
            name="GetStarted" 
            component={GetStarted} 
            options={{headerShown:false}}/>
            <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{headerShown:false}}/>
            <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{headerShown:false}}/>
            <Stack.Screen 
            name="UploadPhoto" 
            component={UploadPhoto} 
            options={{headerShown:false}}/>
             <Stack.Screen 
            name="MainApp" 
            component={MainApp} 
            options={{headerShown:false}}/>
            <Stack.Screen 
            name="ChooseDoctor" 
            component={ChooseDoctor} 
            options={{headerShown:false}}/>
            <Stack.Screen 
            name="Chat" 
            component={Chat} 
            options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

const MainApp =()=>{
    return(
        <Tab.Navigator tabBar={props=><BottomNavigator {...props}/>}>
            <Tab.Screen name="Doctor" component={Doctor}/>
            <Tab.Screen name="Messages" component={Messages}/>
            <Tab.Screen name="Hospital" component={Hospital}/>
        </Tab.Navigator>
    )
}
export default Router;