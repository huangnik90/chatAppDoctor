import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { ILLogo } from '../../assets';

const SplashScreen =()=>{
    return(
        <View style={style.mainWrapper}>
          <ILLogo/>
          <Text style={style.fontTitle}>Chat Dokter Niko</Text>
        </View>
    )
}

const style= StyleSheet.create({
  mainWrapper:{
    backgroundColor:'white',
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