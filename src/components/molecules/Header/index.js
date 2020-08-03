import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import {IconBackArrow} from './../../../assets'
import { Gap } from '../../atoms'
import { colors } from '../../../utils'

const Header =({title})=>{
    return(
        <View style={styles.container}>
            <IconBackArrow/>
            <Text style={styles.text}>{title}</Text>
            <Gap width={24}></Gap>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:colors.white,
      paddingHorizontal:16,
      paddingVertical:30,
      flexDirection:"row"
  },
  text:{
        flex:1,
        textAlign:'center',
        fontFamily:'Nunito-SemiBold',
        fontSize:20,
        color:colors.text.primary
  }
})
export default Header;