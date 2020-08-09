import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { colors, fonts } from '../../../utils'
import { DummyNews } from '../../../assets'

const NewsItem =({title,onPress})=>{
    return(
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>NewsItem Molecules</Text>
                <Text style={styles.date}>Date</Text>
            </View>
       
           <Image source={DummyNews} style={styles.avatar}/>
        </View>
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
        marginBottom:4,maxWidth:'90%'
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