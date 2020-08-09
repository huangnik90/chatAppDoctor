import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {  Hospital } from '../../../assets';
import { colors, fonts } from '../../../utils';

const ListHospital =()=>{
    return(
     <View style={styles.container}>
         <Image style={styles.avatar} source={Hospital}/>
            <View>
                <Text style={styles.title} >Rumah Sakit</Text>
                <Text style={styles.title} >Nama Rumah Sakit</Text>
                <Text style={styles.alamat} >Alamat Rumah Sakit</Text>
            </View>
     </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        alignItems:'center',
    },
    avatar:{
        width:80,
        height:60,
        marginRight:16
    },
    title:{
        fontSize:16,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    alamat:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary,
        marginTop:6
    }
})

export default ListHospital;