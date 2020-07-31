import React from 'react'
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native'

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
       backgroundColor: type === 'secondary'? 'white' :'#0bcad4'
    }),
    text:(type)=>({
        fontSize:16,
        fontWeight:'600',
        textAlign:'center',
        color:type==='secondary'? '#112340':'white'
    })
})

export default Button