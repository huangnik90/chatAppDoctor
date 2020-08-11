import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { colors, fonts } from '../../../utils'

const IsMe =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.chatContent}> 
                <Text style={styles.text}>Ibu Dokter, Apakah memakan nasi goreng itu enak?</Text>
            </View>
            <Text style={styles.date}>4.20 AM</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        alignItems:'flex-end',
        paddingRight:16
    },
    chatContent:{
        maxWidth:300,
        padding:12,
        paddingRight:18,
        backgroundColor:colors.cardLight,
        borderRadius:10,
        borderBottomRightRadius:0,
    
    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    date:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:8
    }
})
export default IsMe;