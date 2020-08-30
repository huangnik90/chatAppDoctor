import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, List } from '../../components/molecules';
import { Firebase } from '../../config';
import { colors } from '../../utils';

const ChooseDoctor =({navigation,route})=>{
    const chooseDocCategory = route.params
    const [doctorCategory,setDoctorCategory] = useState([])
    useEffect(()=>{
        renderCategory()
    },[])

    const renderCategory = ()=>{
        Firebase.database().ref('doctors/')
        .orderByChild('category')
        .equalTo(chooseDocCategory.category)
        .once('value')
        .then((result)=>{
            if(result.val()){
                const oldData = result.val()
                const newData= []
                Object.keys(oldData).map((value)=>{
                    newData.push({
                        id: value,
                        data: oldData[value] 
                    })
                })
                setDoctorCategory(newData)
            }
        })
    }

    return(
     <View style={styles.page}>
        <Header type="dark" onPress={()=>navigation.goBack()} title={"Pilih "+chooseDocCategory.category}/>
        {doctorCategory.map((val,index)=>{
            return(
                <List 
                key={val.id}
                type="next"
                onPress={()=>navigation.navigate("DoctorProfile",val)}
                picture={{uri:val.data.photo}}
                name={val.data.fullName}
                chat={val.data.gender}/>
            )
        })}
     </View>
    )
}

const styles = StyleSheet.create({
 page:{
     backgroundColor:colors.white,flex:1
 }
 
})

export default ChooseDoctor;