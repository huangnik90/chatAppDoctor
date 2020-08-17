import React from 'react'

import {View, Text, TextInput, ActivityIndicator, StyleSheet} from 'react-native'
import { colors, fonts } from '../../../utils'

const Loading =()=>{
    return(
        <View style={styles.wrapper}>
        <ActivityIndicator size='large' color={colors.primary}/>
        <Text style={styles.label} >Loading</Text>
        </View>
    )
 
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        width:'100%',
        height:'100%',
        position:'absolute',
        backgroundColor:colors.loadingBackground,
        justifyContent:'center',
        alignItems:'center'
    },
    label:{
        fontFamily:fonts.primary[600],
        color:colors.primary,
        fontSize:18,
        paddingTop:20
    }
})
export default Loading