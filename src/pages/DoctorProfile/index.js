import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile =({navigation})=>{
    return(
        <View style={styles.page}>
            <Header onPress={()=>navigation.goBack()} title="Profile"/>
            <Profile
                name="Sample 1"
                desc="Desc Sample 1"
            />
            <Gap height={10}/>
            <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020"/>
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum Indonesia"/>
            <ProfileItem label="No. STR" value="00000011230002330"/>
            <View style={styles.action}>
                  <Button title="Start Consultation" onPress={()=>navigation.navigate('Chat')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white
    },
    action:{
        paddingHorizontal:40,
        paddingTop:23
    }

})
export default DoctorProfile