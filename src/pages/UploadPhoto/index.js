import React, { useState } from 'react'
import { View,Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Button, Link, Gap } from './../../components'
import { ILNullPhoto, IconAddPhoto, IconCancelPhoto } from '../../assets'
import { colors, fonts,storeData } from '../../utils'
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message'
import {Firebase} from '../../config'
const UploadPhoto =(props)=>{
    
    const {fullName,occupation,email,uid} = props.route.params
    const [hasPhoto,setHasPhoto] = useState(false)
    const [photoAvatar,setPhotoAvatar] = useState(ILNullPhoto)
    const [photoForDB,setPhotoForDB] = useState('')

    const getPhoto =()=>{
        ImagePicker.launchImageLibrary({quality:0.5,maxWidth:200,maxHeight:200}, (response) => {
            if(response.didCancel===true || response.error){
                showMessage({
                    message: 'Photo tidak terpilih',
                    type: "warning",
                })
            }else{
                setPhotoAvatar({uri:response.uri})
                setHasPhoto(true)
                setPhotoForDB(`data:${response.type};base64,${response.data}`)
            }
            
        });
    }

    const submitPhoto = () =>{
        Firebase.database()
                .ref(`users/${uid}/`)
                .update({photo: photoForDB})
        const data = props.route.params
        data.photo = photoForDB

        storeData('user',data)
        
        props.navigation.replace('MainApp')
    }
    return(
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={()=>props.navigation.goBack()} />

            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity onPress={getPhoto} style={styles.avatarWrapper}>
                        <Image source={photoAvatar} style={styles.avatar}/>
                        {hasPhoto?
                        <Image source={IconCancelPhoto} style={styles.addBtn}/>
                        :
                        <Image source={IconAddPhoto} style={styles.addBtn}/>
                        }
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{occupation}</Text>
                </View>
            
                <View>
                    <Button disable={hasPhoto?false:true} onPress={submitPhoto} title="Upload and Continue"/>
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
        width:110,height:110,
        borderRadius:110/2
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