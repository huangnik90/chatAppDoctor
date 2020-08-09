import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { DummyDokter3 ,IconStar} from '../../../assets'
import { fonts, colors } from '../../../utils'

const RatedDoctor =({title,onPress})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.avatar} source={DummyDokter3}/>
            <View style={styles.profile}>
                <Text style={styles.label}>Nama Dokter</Text>
                <Text style={styles.profession}>Jabatan</Text>
            </View>
            <View style={styles.rate}>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar:{
        width:50,
        height:50,
        marginRight:12,
        paddingBottom:16
    },
    container:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    profile:{
        flex:1,
    },
    rate:{
        flexDirection:'row'
    },
    label:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary
    },
    profession:{
        fontSize:12,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary
    }
})
export default RatedDoctor;