import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Header,InputChat,ChatItem } from '../../components'
import { fonts, colors } from '../../utils'

const Chat = ({navigation})=>{
    return(
        <View style={styles.page}>
            <Header type="dark-profile" onPress={()=>navigation.goBack()}  title="Nairobi Putri Hayza"/>
            <View style={styles.content}> 
                <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
                <ChatItem isMe/>
                <ChatItem/>
            </View>

            <InputChat />
         
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white
    },
    content:{
        flex:1,
    },
    chatDate:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical:20,
        textAlign:'center'
    }
})

export default Chat