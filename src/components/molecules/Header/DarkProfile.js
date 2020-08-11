import React from 'react'
import {Text,View, StyleSheet,Image} from 'react-native'
import { Gap, Button } from '../../atoms'
import { colors, fonts } from '../../../utils'
import { DummyDokter3 } from '../../../assets'

const DarkProfile =({title,desc,onPress,type})=>{
 
    return(
        <View style={styles.container}>
            <Button
                icon="back-light"
                type='icon-only'
                onPress={onPress}
            />
            <View style={styles.content}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
         
            <Image source={DummyDokter3} style={styles.avatar}/>
            <Gap width={24}></Gap>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.secondary ,
      paddingLeft:20,
      paddingRight:16,
      paddingVertical:30,
      flexDirection:"row",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      alignItems:'center'
  },
  content:{
      flex:1,
      textAlign:'center'
  },
  name: {
        fontFamily: fonts.primary[600],
        fontSize:20,
        color: colors.white,
        textAlign:'center'
  },
  desc:{
    fontFamily: fonts.primary.normal,
    fontSize:14,
    color: colors.text.subTitle,
    textAlign:'center'
  },
  avatar:{
      width:46,
      height:46
  }
})
export default DarkProfile;