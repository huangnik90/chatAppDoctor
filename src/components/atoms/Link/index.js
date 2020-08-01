import React from 'react'
import {Text,View, StyleSheet} from 'react-native'

const Link =({title,size,align})=>{
    return(
        <View>
            <Text style={styles.label(size,align)}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: (size,align) =>({
            textDecorationLine:'underline',
            fontFamily:'Nunito-Regular',
            color:'#7D8797',
            fontSize:size,
            textAlign:align
        })
})
export default Link;