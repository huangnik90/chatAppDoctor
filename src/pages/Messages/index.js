import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../utils';
import { List } from '../../components/molecules';
import { DummyDokter2, DummyDokter3, DummyDokter } from '../../assets';

const Messages =()=>{
  const [doctor] = useState([
    {
      id:1,
      picture:DummyDokter2,
      name:'Michael Turnic',
      message:'Saya ingin syalalala..'
    },  
    {
      id:2,
      picture:DummyDokter3,
      name:'Shawn Mandes',
      message:'Saya ingin berkonsutasi pada tanggal 29..'
    },  
    {
      id:3,
      picture:DummyDokter,
      name:'Jackson Wang',
      message:'Saya menyarankan anda untuk..'
    }
  ])
    return(
     <View style={styles.page}>
       <View style={styles.content}>
          <Text style={styles.title} >Messages</Text>
        {
          doctor.map((val,index)=>{
          return (
          <List 
              key={index}
              picture={val.picture}
              name={val.name}
              chat={val.message}
          />)
        })
        }
       </View>
     </View>
    )
}



const styles = StyleSheet.create({
  page:{
    backgroundColor:colors.secondary,flex:1
  },
  content:{
    backgroundColor:colors.white,flex:1,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  title:{
    fontSize:20,
    fontFamily:fonts.primary[600],color:colors.text.primary, marginTop:30,marginLeft:16
  }
})

export default Messages;