import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, fonts } from '../../utils';
import { Header, List, Profile, Gap } from './../../components';
const UserProfile =({navigation})=>{
    return(
       <View style={styles.container}>
           <Header onPress={()=>navigation.goBack()} title="Profile"/>
           <Gap heigth={10}/>
           <Profile name="Wanita" desc="Mungkin dia dokter"/>
           <Gap heigth={14}/>

           <List onPress={()=>navigation.navigate("EditProfile")} name="Edit Profile" chat="Last updated yesterday" type="next" icon="edit-profile"/>
           <List name="Language" chat="Available 12 languages" type="next" icon="language"/>
           <List name="Give Us Rate" chat="On Google Play Store" type="next" icon="rate"/>
           <List name="Help Center" chat="Read our guidelines" type="next" icon="help"/>

       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    }
})

export default UserProfile;