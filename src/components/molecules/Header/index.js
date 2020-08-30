import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import { Gap, Button } from '../../atoms'
import { colors, fonts } from '../../../utils'
import DarkProfile from './DarkProfile'

const Header =({title,onPress,type,desc,photo})=>{
  if(type==='dark-profile'){
      return(
          <DarkProfile onPress={onPress} 
          title={title} 
          desc={desc}
          photo={photo}
          />
      )
  }
    return(
        <View style={styles.container(type)}>
            <Button
                icon={type==='dark'?"back-light":"back-dark"}
                type='icon-only'
                onPress={onPress}
            />
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24}></Gap>
        </View>
    )
}

const styles = StyleSheet.create({
  container: (type) =>({
      backgroundColor: type ==='dark'? colors.secondary : colors.white,
      paddingHorizontal:16,
      paddingVertical:30,
      flexDirection:"row",
      borderBottomLeftRadius: type ==='dark'?20:0,
      borderBottomRightRadius: type ==='dark'?20:0,
  }),
  text: type=>({
        flex:1,
        textAlign:'center',
        fontFamily: fonts.primary[600],
        fontSize:20,
        color:type==='dark'?colors.white:colors.text.primary,
  })
})
export default Header;