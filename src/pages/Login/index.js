import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Input, Link, Button, Gap } from '../../components/atoms';
import { colors, fonts } from '../../utils';

const Login =({navigation})=>{
    return(
     <View style={styles.page}>
         <ILLogo />
         <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
         <Input title="Email Address"/>
         <Gap height={10} />
         <Input title="Password"/>
         <Link size={12} title="Forgot my password"/>
         <Gap height={40} />
         <Button 
         title="Sign In"
         onPress={()=> navigation.replace('MainApp')}
         />
         <Gap height={30} />
         <Link onPress={()=>navigation.navigate('Register')} size={20} align="center" title="Create New Account"/>
     </View>
    )
}

const styles = StyleSheet.create({
  page:{padding:40,backgroundColor:colors.white,flex:1},
  title:{fontSize:20,fontFamily: fonts.primary[600],color:colors.text.primary,maxWidth:153, marginVertical:40}
})

export default Login;