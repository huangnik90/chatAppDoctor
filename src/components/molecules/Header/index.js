import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import {IconBackArrow} from './../../../assets'

const Header =({title})=>{
    return(
        <View>
            <IconBackArrow></IconBackArrow>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
})
export default Header;