import React, { useState } from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = (props)=>{
    const [border,setBorder] = useState(colors.border)
    const onFocusForm = ()=>{
        setBorder(colors.tertiary)
    }
    const onBlurForm = ()=>{
        setBorder(colors.border)
    }
    return(
        <View>
            <Text style={styles.label}>{props.title}</Text>
            <TextInput 
            onFocus={onFocusForm} 
            onBlur={onBlurForm} 
            style={styles.input(border)}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: border =>({
        borderWidth:1,
        borderColor:border,
        borderRadius:10,
        padding:12
    }),
    label:{
        fontSize:16,
        color: colors.text.secondary,
        marginBottom:6,
        fontFamily: fonts.primary.normal
    }   
})

export default Input