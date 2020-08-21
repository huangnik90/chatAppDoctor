import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, getData } from '../../utils';
import { Gap, Header, List, Profile } from './../../components';
import { ILNullPhoto } from '../../assets';
const UserProfile =({navigation})=>{
    const [profile,setProfile] = useState({
        fullName:'',
        occupation:'',
        photo:ILNullPhoto
    })

    useEffect(()=>{
        getData('user').then((res)=>{
            const data = res;
            data.photo = {uri:res.photo}
            setProfile(data)
        })
    },[])
    return(
       <View style={styles.container}>
           <Header onPress={()=>navigation.goBack()} title="Profile"/>
           <Gap heigth={10}/>
           {profile.fullName.length>0 &&
           <Profile name={profile.fullName} photo={profile.photo} desc={profile.occupation}/>
           }
           <Gap heigth={14}/>
           <List onPress={()=>navigation.navigate("EditProfile")} name="Edit Profile" chat="Last updated yesterday" type="next" icon="edit-profile"/>
           <List name="Language" chat="Available 12 languages" type="next" icon="language"/>
           <List name="Give Us Rate" chat="On Google Play Store" type="next" icon="rate"/>
           <List name="Sign Out" chat="Read our guidelines" type="next" icon="help"/>

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