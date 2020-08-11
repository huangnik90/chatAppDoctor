import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';
import { IconNextArrow } from '../../../assets';

const ListDoctor =({picture,name,chat,type,onPress})=>{
    return(
     <TouchableOpacity  onPress={onPress} style={styles.container}>
         <Image style={styles.avatar} source={picture}/>
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
        flex:1
    },
    avatar:{
        width:46,
        height:46,
        marginRight:12
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

export default ListDoctor;