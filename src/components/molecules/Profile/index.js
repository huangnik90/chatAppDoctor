import React from 'react';
import { StyleSheet, View,Text, Image } from 'react-native';
import {  DummyUser, IconCancelPhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Profile =({name,desc,navigation})=>{
    return(
       <View style={styles.container}>
           <View style={styles.borderProfile}>
               <Image source={DummyUser} style={styles.avatar}/>
              {name?null:<Image style={styles.cancelIcon} source={IconCancelPhoto}/>} 
           </View>
           {name &&
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profession}>{desc}</Text>
            </View>
           }
               

       </View>
    )
}

const styles = StyleSheet.create({
    cancelIcon:{
        position:'absolute',
        right:5,
        bottom:0,
        width:43,
        height:43
    },
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    avatar:{
        width:110,
        height:110
    },borderProfile:{
        justifyContent:'center',
        borderWidth: 1,
        width:130,
        height:130,
        borderColor:colors.border,
        borderRadius:130/2,
        justifyContent:'center',
        alignItems:'center'
    },
    name:{
        fontFamily:fonts.primary[600],
        fontSize:20,
        color:colors.text.primary,
        marginTop:16
    },
    profession:{
        fontFamily:fonts.primary[600],
        fontSize:16,
        color:colors.text.secondary,
        marginTop:2
    },
    content:{
        alignItems:'center'
    }
})

export default Profile;