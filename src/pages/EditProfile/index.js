import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../utils';
import { Gap, Header, Profile, Button, Input } from './../../components';
import { ScrollView } from 'react-native-gesture-handler';
const EditProfile =({navigation})=>{
    return(
       <View style={styles.page}>
           <Header onPress={()=>navigation.goBack()} title="Daftar Akun"/>
           <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <Profile />
                <Gap height={26}/>
                <Input title="Full Name"/>
                <Gap height={24}/>
                <Input title="Pekerjaan"/>
                <Gap height={24}/>
                <Input title="Email"/>
                <Gap height={24}/>
                <Input title="Password"/>
                <Gap height={40}/>
                <Button title="Save Profile" onPress={()=>navigation.goBack('UserProfile')}/>
           </ScrollView>
       </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white,
    },
    content:{
        padding:40,
        paddingTop:0
    }
})

export default EditProfile; 