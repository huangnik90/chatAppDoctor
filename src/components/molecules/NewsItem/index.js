import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'

const NewsItem =({title,onPress,date,image})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
           <Image source={{uri:image}} style={styles.avatar}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    avatar:{
        width:80,
        height:60
    },
    title:{
        fontFamily:fonts.primary[600],
        fontSize:16,
        color: colors.text.primary,
        marginBottom:4,maxWidth:'90%',
        textTransform:'capitalize'
    },
    date:{
        fontSize:12,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary
    },container:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        paddingBottom:12,
        paddingTop:16,
        paddingHorizontal:16
    },
    titleWrapper:{
        flex:1
    }
})
export default NewsItem;