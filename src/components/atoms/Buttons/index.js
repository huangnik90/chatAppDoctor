import React from 'react'
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native'
import { colors } from '../../../utils'

const Button = (props)=>{
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
        fontWeight:'600',
        textAlign:'center',
        color:type==='secondary'? colors.button.secondary.text : colors.button.primary.text
    })
})

export default Button