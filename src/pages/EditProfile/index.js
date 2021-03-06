import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';
import { Firebase } from '../../config';
import { colors, getData, storeData } from '../../utils';
import { Button, Gap, Header, Input, Profile } from './../../components';


const EditProfile =({navigation})=>{
    const [form, setForm] = useState({
        fullName:'',
        email:'',
        occupation:''
    })
    const [photoAvatar,setPhotoAvatar] = useState(ILNullPhoto)
    const [photoForDB,setPhotoForDB] = useState('')
    const [password,setPassword] = useState('')
    
    useEffect(()=>{
        getData('user').then((res)=>{
            const data = res;
            setPhotoAvatar({uri:res.photo})
            setForm(data)
        })
    },[])

    const onChangeText = (key,value)=>{
        setForm({
            ...form,
            [key]:value
        })
    }

    const updateProfile =()=>{
        if(password.length > 0){
            if(password.length<8){
                showMessage({
                    message:'password at least 8 karakter',
                    type:'warning'
                })
            }else{
                updateProfileOnly()
                updatePassword()
            }
        }else{
          updateProfileOnly()
        }
    }

    const updatePassword=()=>{
        Firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                user.updatePassword(password).catch((err)=>{
                    showMessage({
                        message:err.message,
                        type:'danger'
                    })
                })
            }
        })
    }

    const updateProfileOnly =()=>{
        const data = form;
        form.photo = photoForDB

        Firebase.database()
        .ref(`users/${form.uid}/`)
        .update(data)
        .then(()=>{
            showMessage({ 
            message:'profile berhasil terupdate',
            type:'success'
            })
            
            storeData('user',form)
            // navigation.navigate('UserProfile')
        }).catch((err)=>{
            showMessage({
                message:err.message,
                type:'danger'
            })
        })
    }

    const imagePick=()=>{
        ImagePicker.launchImageLibrary({quality:0.5,maxWidth:200,maxHeight:200}, (response) => {
            if(response.didCancel===true || response.error){
                showMessage({
                    message: 'Photo tidak terpilih',
                    type: "warning",
                })
            }else{
                setPhotoAvatar({uri:response.uri})
                setPhotoForDB(`data:${response.type};base64,${response.data}`)
            }
            
        });
    }

    return(
       <View style={styles.page}>
           <Header onPress={()=>navigation.goBack()} title="Daftar Akun"/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <Profile editable={true} onPress={imagePick} photo={photoAvatar} />
                <Gap height={26}/>
                <Input title="Full Name" 
                value={form.fullName} onChangeText={(value)=>onChangeText('fullName',value)}
                />
                <Gap height={24}/>
                <Input 
                value={form.occupation} onChangeText={(value)=>onChangeText('occupation',value)}
                title="Pekerjaan"/>
                <Gap height={24}/>
                <Input
                value={form.email} 
                disable
                title="Email"/>
                <Gap height={24}/>
                <Input title="Password" value={password} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}/>
                <Gap height={40}/>
                <Button title="Save Profile" onPress={updateProfile}/>
           </ScrollView>
       </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white,
    },
    content:{
        padding:40,
        paddingTop:0
    }
})

export default EditProfile; 