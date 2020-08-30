import React from 'react'
import {View, Text,ScrollView, StyleSheet} from 'react-native'
import { Header,InputChat,ChatItem } from '../../components'
import { fonts, colors } from '../../utils'

const Chat = ({navigation,route})=>{
    const dataDoctor = route.params;
    return(
        <View style={styles.page}>
            <Header type="dark-profile" 
            onPress={()=>navigation.goBack()}  
            title={dataDoctor.data.fullName}
            desc={dataDoctor.data.profession}
            photo={{uri:dataDoctor.data.photo}}
            />
            <View style={styles.content}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
                    <ChatItem isMe/>
                    <ChatItem/>
            </ScrollView>
               
            </View>

            <InputChat 
            onChangeText={()=>alert("text changed")}
            value="z"
            onPress={()=>alert('uch')}
            />
         
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