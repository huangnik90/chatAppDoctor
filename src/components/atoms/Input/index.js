import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import { colors } from '../../../utils'

const Input = (props)=>{
    return(
        <View>
            <Text style={styles.label}>{props.title}</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:colors.border,
        borderRadius:10,
        padding:12
    },
    label:{
        fontSize:16,
        color: colors.text.secondary,
        marginBottom:6,
        fontFamily:'Nunito-Regular'
    }   
})

export default Input