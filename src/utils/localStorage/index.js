import AsyncStorage from '@react-native-community/async-storage';


export const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  }

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        const data = JSON.parse(value)
        return data
      }
    } catch(e) {
      // error reading value
    }
  }

  export const removeData = async (key)=>{
    try{
      await AsyncStorage.removeItem(key)
    }catch(e){
      
    }
  }