import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { IconSend, IconSendActive } from '../../../assets'
import { colors } from '../../../utils'

const ButtonIcon =({onPress,disable})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.container(disable)}>
            {disable ?
            <IconSend/> :
            <IconSendActive/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (disable)=>(
        {
            backgroundColor:disable?colors.disable: colors.tertiary,
            width:45,
            height:45,
            borderRadius:10,
            paddingBottom:8,
            paddingLeft:8,
            paddingTop:3, 
            paddingRight:3
        }

    )
})

export default ButtonIcon
