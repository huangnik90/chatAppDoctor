import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { colors, fonts, showError } from '../../utils';
import { ILHospital } from '../../assets';
import { ListHospital } from '../../components';
import { Firebase } from '../../config';

const Hospital =()=>{
  
  const [listHospital,setListHospital] = useState([])
  useEffect(()=>{
    Firebase.database().ref('hospitals/').once('value').then((res)=>{
      if(res.val()){
        const dataFilter = res.val().filter(el => el !==null)
        setListHospital(dataFilter)
      }
    }).catch((err)=>{
      showError(err.message)
    })
  },[])
    return(
     <View style={styles.page}>
       
       <ImageBackground source={ILHospital} style={styles.background}>
         <Text style={styles.title}>Nearby Hospital</Text>
         <Text style={styles.desc}>3 Tersedia</Text>
       </ImageBackground>
       <View style={styles.content}>
         {listHospital.map((val)=>{
           return(
              <ListHospital 
              key={val.id}
              type={val.type}
              address={val.address}
              name={val.name}
              picture={val.image}
              />
           )
         })}
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