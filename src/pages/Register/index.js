import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Gap } from '../../components/atoms';
import { Header } from '../../components/molecules';
import { colors } from '../../utils';



const Register =()=>{
    return(
     <View style={styles.page}>
        <Header title="Registrasi"/>
            <View style={styles.content}>
                <Input title="Full Name"/>
                <Gap height={24}/>
                <Input title="Pekerjaan"/>
                <Gap height={24}/>
                <Input title="Email"/>
                <Gap height={24}/>
                <Input title="Password"/>
                <Gap height={40}/>
                <Button title="Continue"/>
            </View>
     </View>
    )
}

const styles = StyleSheet.create({
  content:{padding:40,paddingTop:0},
  page:{backgroundColor:colors.white, flex:1}
})

export default Register;