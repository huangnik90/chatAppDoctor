
import {createStore} from 'redux'

const initialState = {
    load:false,
    name:'Nikolas Wijaya'
}

const reducer = (state = initialState , action)=>{
    if(action.type ==='SET_LOADING'){
        return {...state,load:action.value}
    }
    if(action.type ==='SET_NAME'){
        return {...state,name:'action.value'}
    }
    return state
}

const Store = createStore(reducer)

export default Store