import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { ILLogo } from '../../assets';
import { Input, Link, Button, Gap } from '../../components/atoms';
import { colors, fonts, useForm, storeData } from '../../utils';
import { Firebase } from '../../config';
import { showMessage } from "react-native-flash-message";
import { Loading } from '../../components';

const Login =({navigation})=>{
    const [form,setForm] = useForm({email:'',password:''})
    const [loading,setLoading] =useState(false)


    const signInBtn =()=>{
      setLoading(true)
      Firebase.auth().signInWithEmailAndPassword(form.email,form.password)
      .then((res)=>{
        setLoading(false)
        Firebase.database().ref(`users/${res.user.uid}/`).once('value').then((resDB)=>{
          if(resDB){
            storeData('user',resDB.val())
            navigation.replace('MainApp')
          }
          else{
            setLoading(false)
            showMessage({
              message:'Sign in gagal coba periksa koneksi dan coba lagi',
              type: "warning",
            });
          }
        })
      })
      .catch((err)=>
        {
          setLoading(false)
          showMessage({
            message: err.code+': Check your email and password',
            type: "default",
            backgroundColor:colors.error,
            color:colors.white
          });
        }
      );
      // 
    }

    return(
    <>
     <View style={styles.page}>
       <ScrollView showsVerticalScrollIndicator={false}>
       <Gap height={40} />
       <ILLogo />
         <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
         <Input
         value={form.email}
         onChangeText={(value)=>setForm("email",value)}
         title="Email Address"/>
         <Gap height={10} />
         <Input
         secureTextEntry={true}
         value={form.password}
         onChangeText={(value)=>setForm("password",value)}
         title="Password"/>
         <Link size={12} title="Forgot my password"/>
         <Gap height={40} />
         <Button 
         title="Sign In"
         onPress={signInBtn}
         />
         <Gap height={30} />
         <Link onPress={()=>navigation.navigate('Register')} size={20} align="center" title="Create New Account"/>
       </ScrollView>
     </View>
     {loading && <Loading/>}
     </>
    )
}

const styles = StyleSheet.create({
  page:{padding:40,backgroundColor:colors.white,flex:1},
  title:{fontSize:20,fontFamily: fonts.primary[600],color:colors.text.primary,maxWidth:153, marginVertical:40}
})

export default Login;