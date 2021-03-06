import React, { useEffect } from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { ILLogo } from '../../assets';
import { colors } from '../../utils';
import { Firebase } from '../../config';

const SplashScreen =(props)=>{
  //ini di pake biar useEffect cuma terpanggil di splash screen saja.. 
  useEffect(()=>{
   const unsubscribe = Firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          //kalo lagi login (user data ada)
          props.navigation.navigate('MainApp')
        }else{
          props.navigation.navigate('GetStarted')
        }
      })

    return ()=> unsubscribe()
  },[props.navigation])

    return(
        <View style={style.mainWrapper}>
          <ILLogo/>
          <Text style={style.fontTitle}>Looking for Doctor?</Text>
        </View>
    )
}

const style= StyleSheet.create({
  mainWrapper:{
    backgroundColor:colors.white,
    flex:1,
    alignItems:'center',
    justifyContent:"center"
  },
  fontTitle:{
    fontSize:20,
    fontWeight:"600",
    marginTop:20
  }

})

export default SplashScreen;