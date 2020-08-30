import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor =({name,desc,avatar, rate,onPress})=>{
    const arr =[]
    for (let i=0;i<rate;i++){
        arr.push(i)
    }
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.avatar} source={avatar}/>
            <View style={styles.profile}>
            <Text style={styles.label}>{name}</Text>
            <Text style={styles.profession}>{desc}</Text>
            </View>
            <View style={styles.rate}>
            <Text>
              {arr.map((val,index)=>{
                  return(
                      <IconStar
                        key={index}
                      />
                  )
              })}
            </Text>  
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    avatar:{
        width:50,
        height:50,
        marginRight:12,
        paddingBottom:16
    },
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom:15
    },
    profile:{
        flex:1,
    },
    rate:{
        flexDirection:'row'
    },
    label:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        textTransform:'capitalize'
    },
    profession:{
        fontSize:12,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        textTransform:'capitalize'
    }
})
export default RatedDoctor;