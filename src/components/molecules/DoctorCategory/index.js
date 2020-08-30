import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const DoctorCategory =({category,image,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                source={{uri:image}}
                style={styles.imageDoctor}
            />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
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
        color:colors.text.primary,
        textTransform:'capitalize'
    }
 
})
export default DoctorCategory;