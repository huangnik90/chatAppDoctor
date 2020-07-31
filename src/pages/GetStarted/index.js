import React from 'react'
import {Text,View, StyleSheet, ImageBackground} from 'react-native'
import { ILLogo, ILGetStarted } from '../../assets';
import {Button, Gap} from '../../components/atoms';

const GetStarted =({navigation})=>{
    return(
        <ImageBackground source={ILGetStarted} style={styles.wrapper}>
            <View>
            <ILLogo/>
            <Text style={styles.fontTitle}>Konsultasi dengan dokter jadi lebih mudah & flexible</Text>
            </View>
          
            <View>
                <Button onPress={()=>navigation.navigate('Register')} type='primary' title='Get Started'/>
                <Gap height={16}/>
                <Button onPress={()=>navigation.navigate('Login')} type='secondary' title='Sign In'/>
            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding:40,justifyContent:"space-between",flex:1
    },
    fontTitle:{
        fontSize:28, fontWeight:'600', color:'black',marginTop:91,color:'white', 
        fontFamily:'Nunito-SemiBold'
    }
})

export default GetStarted;