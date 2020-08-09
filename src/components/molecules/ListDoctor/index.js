import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DummyDokter } from '../../../assets';
import { colors, fonts } from '../../../utils';

const ListDoctor =()=>{
    return(
     <View style={styles.container}>
         <Image style={styles.avatar} source={DummyDokter}/>
            <View>
                <Text style={styles.name} >Nama Dokter</Text>
                <Text style={styles.chat}>pesan chat</Text>
            </View>
     </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        alignItems:'center',
        paddingVertical:16
    },
    avatar:{
        width:46,
        height:46,
        marginRight:12
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    chat:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary
    }
})

export default ListDoctor;