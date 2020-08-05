import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import IconOnly from './IconOnly'

const Button = (props)=>{
    if(props.type==='icon-only'){
        return(
           <IconOnly icon={props.icon} onPress={props.onPress}/>
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
    text:(type)=>({
        fontSize:16,
        fontFamily:fonts.primary[600],
        textAlign:'center',
        color:type==='secondary'? colors.button.secondary.text : colors.button.primary.text
    })
})

export default Button