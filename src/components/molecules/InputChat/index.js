import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { Button } from '../../atoms'
import { fonts } from '../../../utils'

const InputChat =({onPress,value,onChangeText})=>{
    return(
        <View style={styles.container}>
           <TextInput style={styles.input} placeholder='Tuliskan pesan..' 
           onChangeText={onChangeText}
           value={value}
           />
           <Button onPress={onPress} 
           disable={value.length < 1} 
           type="btn-icon-send" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:16,
        flexDirection:'row'
    },
    input:{
        backgroundColor:colors.disable,
        padding:14,
        borderRadius:10,
        flex:1,
        marginRight:10,
        fontSize:14,
        fontFamily:fonts.primary.normal,
        maxHeight:45
    }
})
export default InputChat;