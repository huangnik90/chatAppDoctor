import React from 'react'
import { View,Image, Text, StyleSheet } from 'react-native'
import { Header, Button, Link, Gap } from './../../components'
import { ILNullPhoto, IconAddPhoto } from '../../assets'
import { colors, fonts } from '../../utils'
const UploadPhoto =(props)=>{
    return(
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={()=>props.navigation.goBack()} />

            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar}/>
                        <Image source={IconAddPhoto} style={styles.addBtn}/>
                    </View>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.profession}>Product Manager</Text>
                </View>
            
                <View>
                    <Button onPress={()=>props.navigation.replace('MainApp')} title="Upload and Continue"/>
                    <Gap height={30}/>
                    <Link onPress={()=>props.navigation.replace('MainApp')} title="Skip for this" align="center" size={16}/>
                </View>
            </View>

        </View>
    )
}
export default UploadPhoto

const styles = StyleSheet.create({
    avatar:{
        width:110,height:110
    },
    avatarWrapper:{
        width:130,
        height:130,
        borderRadius:130/2,

    },page:{
        backgroundColor:colors.white,
        flex:1,
        justifyContent:"space-between",
    },
    profile:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    addBtn:{
        position:'absolute',
        width:40,
        height:40,
        bottom:18,
        right:16
    },content:{
        paddingHorizontal:40,
        paddingBottom:40,
        flex:1,
        justifyContent:"space-between"
    }
    ,name:{
        textAlign:'center',
        fontSize:24,
        color:colors.text.primary,
        fontFamily:fonts.primary[600]
    },
    profession:{
        textAlign:'center',
        fontSize:18,
        color:colors.text.secondary,
        fontFamily:fonts.primary[400]
    }
})