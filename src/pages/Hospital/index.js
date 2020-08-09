import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { colors, fonts } from '../../utils';
import { ILHospital } from '../../assets';
import { ListHospital } from '../../components';

const Hospital =()=>{
    return(
     <View style={styles.page}>
       
       <ImageBackground source={ILHospital} style={styles.background}>
         <Text style={styles.title}>Nearby Hospital</Text>
         <Text style={styles.desc}>3 Tersedia</Text>
       </ImageBackground>
       <View style={styles.content}>
         <ListHospital/>
         <ListHospital/>
         <ListHospital/>
       </View>
     </View>
    )
}

const styles = StyleSheet.create({
  background:{height:240,
  paddingTop:30},
  title:{
    fontFamily:fonts.primary[600],
    textAlign:'center',
    color:colors.white,
    fontSize:20
  },
  desc:{
    fontFamily:fonts.primary[300],
    textAlign:'center',
    color:colors.white,
    fontSize:14,
    marginTop:6
  },
  page:{
    backgroundColor:colors.secondary,flex:1
  },
  content:{
    backgroundColor:colors.white,
    flex:1,
    borderRadius:20,
    marginTop:-30,
    paddingTop:14

  }
})

export default Hospital;