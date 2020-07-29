import React from 'react'
import {Text,View, StyleSheet, ImageBackground} from 'react-native'
import { ILLogo, ILGetStarted } from '../../assets';
import {Button} from '../../components/atoms';

const GetStarted =()=>{
    return(
        <ImageBackground source={ILGetStarted} style={styles.wrapper}>
            <View>
            <ILLogo/>
            <Text style={styles.fontTitle}>Konsultasi dengan Niko jadi lebih mudah & flexible</Text>
            </View>
          
            <View>
                <Button type='primary' title='Get Started'/>
                <View style={{height:16}}/>
                <Button type='secondary' title='Sign In'/>
            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding:40,justifyContent:"space-between",flex:1
    },
    fontTitle:{
        fontSize:28, fontWeight:'600', color:'black',marginTop:91,color:'white'
    }
})

export default GetStarted;