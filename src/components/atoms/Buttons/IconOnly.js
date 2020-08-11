import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBackArrow, IconBackArrowLight } from '../../../assets'

const IconOnly =({onPress,icon})=>{
    const Icon =()=>{
        if(icon==='back-dark'){
            return <IconBackArrow/>
        }
        if(icon ==='back-light'){
            return <IconBackArrowLight/>
        }
        return <IconBackArrow/>
    }

    return(
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

export default IconOnly
