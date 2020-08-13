import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDokter2 } from '../../assets';
import { Header, List } from '../../components/molecules';
import { colors } from '../../utils';

const ChooseDoctor =({navigation})=>{
    return(
     <View style={styles.page}>
         <Header type="dark" onPress={()=>navigation.goBack()} title="Pilih Dokter"/>
        
        <List 
         type="next"
         onPress={()=>navigation.navigate("Chat")}
         picture={DummyDokter2}
         name="Michelle Tyson"
         chat="Wanita"/>
    

     </View>
    )
}

const styles = StyleSheet.create({
 page:{
     backgroundColor:colors.white,flex:1
 }
 
})

export default ChooseDoctor;