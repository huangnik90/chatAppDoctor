import {showMessage} from 'react-native-flash-message'
import { colors } from '../colors'

export const showError = (message)=>{
    return (
        showMessage({
            message: message,
            type: "default",
            backgroundColor: colors.error,
            color:colors.white
          })
    )
}


export const showWarning = (message)=>{
    return (
        showMessage({
            message: message,
            type: "warning",
          })
    )
}

export const showSuccess =(message)=>{
    return(
        showMessage({
            message: 'Register Success',
            type: "success",
          })
    )
}
