import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/atoms';
import { Firebase } from '../../config';
import { colors, fonts, showError, showWarning, storeData, useForm } from '../../utils';

const Login =({navigation})=>{
    const [form,setForm] = useForm({email:'',password:''})
    const dispatch = useDispatch()

    const signInBtn =()=>{
      // setLoading(true)
      dispatch({type:"SET_LOADING",value:true})

      Firebase
      .auth()
      .signInWithEmailAndPassword(form.email,form.password)
      .then((res)=>{
        dispatch({type:"SET_LOADING",value:false})
        Firebase.database().ref(`users/${res.user.uid}/`).once('value').then((resDB)=>{
          if(resDB){
            storeData('user',resDB.val())
            navigation.replace('MainApp')
          }
          else{
            dispatch({type:"SET_LOADING",value:false})
            showWarning('Terjadi Kesalahan, periksa koneksi dan coba lagi')
          }
        })
      })
      .catch((err)=>
        {
          dispatch({type:"SET_LOADING",value:false})
          showError(err.message)
        }
      );
      // 
    }

    return(
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
         <Link onPress={()=>navigation.navigate('Register')} size={12} align="center" title="Create New Account"/>
       </ScrollView>
     </View>
    )
}

const styles = StyleSheet.create({
  page:{padding:40,backgroundColor:colors.white,flex:1},
  title:{fontSize:20,fontFamily: fonts.primary[600],color:colors.text.primary,maxWidth:153, marginVertical:40}
})

export default Login;