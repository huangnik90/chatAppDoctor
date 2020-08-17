import React, { useEffect } from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { ILLogo } from '../../assets';
import { colors } from '../../utils';

const SplashScreen =(props)=>{
  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate('GetStarted')
    },1000)
  },[props.navigation])

    return(
        <View style={style.mainWrapper}>
          <ILLogo/>
          <Text style={style.fontTitle}>Kuw Dokter</Text>
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