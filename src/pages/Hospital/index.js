import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils';

const Hospital =()=>{
    return(
     <View style={styles.page}>
         <Text >Hospital</Text>
     </View>
    )
}

const styles = StyleSheet.create({
  page:{padding:40,backgroundColor:colors.white,flex:1},
})

export default Hospital;