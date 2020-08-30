import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import IconOnly from './IconOnly'
import ButtonIconSend from './ButtonIconSend'

const Button = (props)=>{
    if(props.type ==='btn-icon-send'){
        return <ButtonIconSend onPress={props.onPress} disable={props.disable}/>
    }
    if(props.type==='icon-only'){
        return(
           <IconOnly icon={props.icon} onPress={props.onPress}/>
        )
    }
    if(props.disable){
        return(
        <View style={styles.disableBG}>
            <Text style={styles.disableText}>{props.title}</Text>
        </View>
        )
    }
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container(props.type)}>
            <Text style={styles.text(props.type)}>{props.title}</Text>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    container: (type)=>({
       borderRadius:10,
       paddingVertical:10,
       backgroundColor: type === 'secondary'? colors.button.secondary.background : colors.button.primary.background
    }),
    disableBG:{
        borderRadius:10,
        paddingVertical:10,
        backgroundColor:colors.button.disable,
    },
    disableText:{
        fontSize:18,
        fontFamily:fonts.primary[600],
        textAlign:'center',
        color:colors.text.disable
    },
    text:(type)=>({
        fontSize:18,
        fontFamily:fonts.primary[600],
        textAlign:'center',
        color:type==='secondary'? colors.button.secondary.text : colors.button.primary.text
    })
})

export default Button