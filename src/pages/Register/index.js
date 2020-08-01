import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from '../../components/atoms';
import { Header } from '../../components/molecules';



const Register =()=>{
    return(
     <View>
        <Header title="Registrasi"/>
        <Input title="Full Name"/>
        <Input title="Pekerjaan"/>
        <Input title="Email"/>
        <Input title="Password"/>
        <Button title="Continue"/>
     </View>
    )
}

const styles = StyleSheet.create({
  
})

export default Register;