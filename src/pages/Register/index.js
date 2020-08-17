import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Input, Gap } from '../../components/atoms';
import { Header,Loading } from '../../components';
import { colors, useForm } from '../../utils';
import {Firebase} from '../../config'
import { showMessage, hideMessage } from "react-native-flash-message";
//jangan lupa masukin react native flash message di Root app.js
const Register =(props)=>{
    // const [fullname,setFullname] = useState('')
    // const [occupation,setOccupation] = useState('')
    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [form, setForm] = useForm({
        fullName:'',
        occupation:'',
        email:'',
        password:''
    })

    const onPressContinue =()=>{
        setLoading(true)
        Firebase.auth().createUserWithEmailAndPassword(form.email,form.password)
        .then((res)=>{
            //register data to database
            Firebase.database()
            .ref(`users/${res.user.uid}/`)
            .set({
                fullName:form.fullName,
                occupation:form.occupation,
                email:form.email,
            })

            showMessage({
                message: 'Register Success',
                type: "success",
              });
            setLoading(false)
            setForm('reset')
           

        })
        .catch( (error) =>{
            showMessage({
                message: error.message,
                // type: "danger",
                backgroundColor:colors.error,
                color:colors.white
              });
            setLoading(false)
            setForm('reset')
        })
        // props.navigation.navigate("UploadPhoto")
    }
    return(
    <>
     <View style={styles.page}>
        <Header title="Registrasi" onPress={()=> props.navigation.goBack()}/>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input title="Full Name" value={form.fullName} onChangeText={(value)=>setForm('fullName',value)} />
                    <Gap height={24}/>
                    {/* this is how to use custome useState */}
                    <Input title="Pekerjaan" value={form.occupation} onChangeText={(value)=>setForm('occupation',value)}/>
                    {/* normal Hook */}
                    {/* <Input title="Pekerjaan" value={occupation} onChangeText={(value)=>setOccupation(value)}/> */}
                    <Gap height={24}/>
                    <Input title="Email" value={form.email} onChangeText={(value)=>setForm('email',value)}/>
                    <Gap height={24}/>
                    <Input title="Password" secureTextEntry={true} value={form.password} onChangeText={(value)=>setForm('password',value)}/>
                    <Gap height={40}/>
                    <Button title="Continue" onPress={onPressContinue}/>
                </ScrollView>
            </View>
     </View>

     {loading && <Loading/> }

     </>
    )
}

const styles = StyleSheet.create({
  content:{padding:40,paddingTop:0},
  page:{backgroundColor:colors.white, flex:1}
})

export default Register;