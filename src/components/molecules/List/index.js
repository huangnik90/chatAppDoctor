import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';
import { IconNextArrow, IconHelp, IconEditProfile, IconLanguage } from '../../../assets';

const List =({picture,name,chat,type,onPress,icon})=>{
    const Icon = ()=>{
        if(icon==='edit-profile'){
            return(
                <IconEditProfile/>
            )
        }
        if(icon==='rate'){
            return(
                <IconHelp/>
            )
        }
        if(icon==='help'){
            return(
                <IconHelp/>
            )
        }
        if(icon==='language'){
            return(
                <IconLanguage/>
            )
        }
        return null
      
    }
    return(
     <TouchableOpacity  onPress={onPress} style={styles.container}>
         {icon ? <Icon/> :<Image style={styles.avatar} source={picture}/>}
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.chat}>{chat}</Text>
            </View>
            {
                type==='next'&&<IconNextArrow/>
            }
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        alignItems:'center',
        paddingVertical:16,
        justifyContent:'space-between'
    },
    content:{
        flex:1,marginLeft:16
    },
    avatar:{
        width:46,
        height:46,
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    chat:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary
    }
})

export default List;