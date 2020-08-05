import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBackArrow } from '../../../assets'

const IconOnly =({onPress,icon})=>{
    const Icon =()=>{
        if(icon==='back-dark'){
            return <IconBackArrow/>
        }
        if(icon ==='back-light'){
            return <IconBackArrow/>
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
