import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconDoctorActive, IconDoctorInactive, IconHospitalActive, IconHospitalInactive, IconMessageActive, IconMessageInactive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem =({title,active, onLongPress,onPress})=>{
    const Icon = () =>{
        if(title==='Doctor'){
            return active ? <IconDoctorActive/> : <IconDoctorInactive/>
        }
        if(title==='Hospital'){
            return active ? <IconHospitalActive/> :<IconHospitalInactive/>
        }
        if(title==='Messages'){
            return active ? <IconMessageActive/> :<IconMessageInactive/>
        }
        return(
            <IconDoctorInactive/>
        )
    }

    return(
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text: (active)=>({
        fontSize:10,
        fontFamily:fonts.primary[600],
        marginTop:4,
        color:active ? colors.text.active :colors.text.inactive
    })
})

export default TabItem