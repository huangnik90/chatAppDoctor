import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { colors, fonts } from '../../../utils'

const ProfileItem =({label,value})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border
    },
    label:{
        fontSize:14,
        color:colors.text.secondary,
        fontFamily:fonts.primary.normal,
        marginBottom:6
    },
    value:{
        fontSize:14,
        color:colors.text.primary,
        fontFamily:fonts.primary.normal,
    }
})
export default ProfileItem