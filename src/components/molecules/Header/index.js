import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import { Gap, Button } from '../../atoms'
import { colors, fonts } from '../../../utils'

const Header =({title,onPress})=>{
    return(
        <View style={styles.container}>
            <Button
                icon="back-dark"
                type='icon-only'
                onPress={onPress}
            />
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
        fontFamily: fonts.primary[600],
        fontSize:20,
        color:colors.text.primary
  }
})
export default Header;