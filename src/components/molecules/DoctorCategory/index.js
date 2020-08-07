import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyIconDokter } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory =({title,onPress})=>{
    return(
        <View style={styles.container}>
            <Image
                source={DummyIconDokter}
                style={styles.imageDoctor}
            />
           <Text style={styles.label}>Saya butuh</Text>
           <Text style={styles.category}>dokter umum</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageDoctor:{
        width: 65,
        height: 65,
        marginBottom:28
    },
    container:{
        backgroundColor:colors.cardLight,padding:12,
        alignSelf:'flex-start',
        borderRadius:10,
        marginRight:10,
        width:100,
        height:150
    },
    label:{
        fontFamily:fonts.primary[300],
        fontSize:12,
        color:colors.text.primary
    },
    category:{
        fontFamily:fonts.primary[600],
        fontSize:12,
        color:colors.text.primary
    }
 
})
export default DoctorCategory;