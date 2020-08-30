import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { ILNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile =({onPress})=>{
    const [profile,setProfile] = useState({
        photo:ILNullPhoto,
        fullName:'',
        occupation:'',
    })
    useEffect(()=>{
        getData('user').then((res)=>{
            const data = res
            data.photo = {uri:res.photo}
            setProfile(data)
        })
    },[])
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
           <Image source={profile.photo} style={styles.avatar} />
           <View>
               <Text style={styles.name}>{profile.fullName}</Text>
               <Text style={styles.profession}>{profile.occupation}</Text>
           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container:{
      paddingHorizontal:16,
      paddingVertical:30,
      flexDirection:"row"
  },
    avatar:{
        width:46,
        height:46,
        borderRadius:46/2,
        marginRight:12
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        textTransform:'capitalize'
    },
    profession:{
        fontSize:12,
        fontFamily:fonts.primary[400],
        color:colors.text.secondary,
        textTransform:'capitalize'
    }
})
export default HomeProfile;