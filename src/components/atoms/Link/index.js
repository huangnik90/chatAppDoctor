import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import { colors, fonts } from '../../../utils'

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
            fontFamily: fonts.primary[400],
            color: colors.text.secondary,
            fontSize:size,
            textAlign:align,
         
        })
})
export default Link;