import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const ListHospital =(props)=>{
    return(
     <View style={styles.container}>
         <Image style={styles.avatar} source={{uri:props.picture}}/>
            <View>
                <Text style={styles.title}>{props.type}</Text>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.alamat}>{props.address}</Text>
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