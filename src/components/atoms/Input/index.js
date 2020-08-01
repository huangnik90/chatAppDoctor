import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

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
        borderColor:'#E9E9E9',
        borderRadius:10,
        padding:12
    },
    label:{
        fontSize:16,
        color:'#7D8797',
        marginBottom:6,
        fontFamily:'Nunito-Regular'
    }   
})

export default Input