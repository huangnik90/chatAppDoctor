import React from 'react'
import {View,Text,StyleSheet, Image} from 'react-native'
import { colors, fonts } from '../../../utils'
import { DummyDokter2 } from '../../../assets/Dummy'

const Other =()=>{
    return(
        <View style={styles.container}>
            <Image source={DummyDokter2} style={styles.avatar}/>
            <View>
                <View style={styles.chatContent}> 
                    <Text style={styles.text}>Enak banget dokter tapi ya mao gimana lagi ya ada yang kurang yaitu MSG</Text>
                </View>
                <Text style={styles.date}>4.22 AM</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    avatar:{width:30,
    height:30,marginRight:12},
    container:{
        marginBottom:20,
        alignItems:'flex-end',
        paddingLeft:16,
        flexDirection:'row',
    },
    chatContent:{
        maxWidth:300,
        padding:12,
        paddingRight:18,
        backgroundColor:colors.primary,
        borderRadius:10,
        borderBottomLeftRadius:0,
    
    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.white
    },
    date:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:8
    }
})
export default Other;