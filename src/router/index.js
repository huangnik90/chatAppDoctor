import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {SplashScreen, GetStarted} from '../pages';

const Stack = createStackNavigator();

const Router = ()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{headerShown:false}}/>
            <Stack.Screen 
            name="GetStarted" 
            component={GetStarted} 
            options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default Router;