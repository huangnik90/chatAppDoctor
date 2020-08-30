import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IconCancelPhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile =({name,desc,photo,editable,onPress})=>{
    return(
       <View style={styles.container}>
           {editable?
            <TouchableOpacity onPress={onPress} style={styles.borderProfile}>
            <Image source={photo} style={styles.avatar}/>
            {name?null:<Image style={styles.cancelIcon} source={IconCancelPhoto}/>} 
            </TouchableOpacity>
            :
            <View style={styles.borderProfile}>
            <Image source={photo} style={styles.avatar}/>
            {name?null:<Image style={styles.cancelIcon} source={IconCancelPhoto}/>} 
            </View>
           
           }
           
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
        height:110,
        borderRadius:110/2
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
        marginTop:16,
        textTransform:'capitalize'

    },
    profession:{
        fontFamily:fonts.primary[600],
        fontSize:16,
        color:colors.text.secondary,
        marginTop:2,
        textTransform:'capitalize'
    },
    content:{
        alignItems:'center'
    }
})

export default Profile;