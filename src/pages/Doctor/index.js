import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../components/molecules';
import { fonts, colors } from '../../utils';
import { Gap } from '../../components/atoms';

const Doctor =()=>{
    return(
     <View style={styles.page}>
       <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeProfile/>
                  <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                  <View style={styles.wrapperScroll}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                          <View style={styles.category}>
                            <Gap width={16}/>
                            <DoctorCategory/>
                            <DoctorCategory/>
                            <DoctorCategory/>
                            <DoctorCategory/>
                            <Gap width={6}/>
                          </View>
                      </ScrollView>
                  </View>
                  <Text style={styles.sectionLabel} >Top Rated Doctors</Text>
                  <RatedDoctor/>
                  <RatedDoctor/>
                  <RatedDoctor/>
                  <Text style={styles.sectionLabel} >Good News</Text>
                  <NewsItem/>
                  <NewsItem/>
                  <NewsItem/>   
              <Gap height={30}/>

            </ScrollView>
       </View>
     </View>
    )
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:colors.secondary,
  },
  content:{
    backgroundColor:colors.white,
    flex:1,
    paddingHorizontal:16,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  welcome:{
    fontFamily:fonts.primary[600],
    fontSize:20,
    marginBottom:16,
    maxWidth:209
  },
  category:{
    flexDirection:'row'
  },
  wrapperScroll:{
    marginHorizontal:-16,
  },
  sectionLabel:{
    fontSize:16,
    fontFamily:fonts.primary[600],
    marginTop:30,
    marginBottom:16
  }
})

export default Doctor;