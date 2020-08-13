import React from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'

const HomeProfile =({title,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
           <Image source={DummyUser} style={styles.avatar} />
           <View>
               <Text style={styles.name}>Shayna Melinda</Text>
               <Text style={styles.profession}>Product Designer</Text>
           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container:{
      paddingHorizontal:16,
      paddingVertical:30,
      flexDirection:"row"
  },
    avatar:{
        width:46,
        height:46,
        marginRight:12
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary
    },
    profession:{
        fontSize:12,
        fontFamily:fonts.primary[400],
        color:colors.text.secondary
    }
})
export default HomeProfile;