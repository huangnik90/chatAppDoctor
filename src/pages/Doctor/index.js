import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../components/molecules';
import { fonts, colors, showError } from '../../utils';
import { Gap } from '../../components/atoms';
import { DummyDokter3, DummyDokter } from '../../assets';
import { Firebase } from '../../config';

const Doctor =({navigation})=>{

  const [news,setNews] = useState([])
  const [doctorCategory,setDoctorCategory] = useState([])
  const [doctors,setDoctors] = useState([])


  useEffect(()=>{

    Firebase.database()
    .ref('news/')
    .once('value')
    .then((res)=>{
      if(res.val()){
        const dataFilter = res.val().filter(el => el !==null)
        setNews(dataFilter)
      }
    })
    .catch((err)=>{
      showError(err.message)
    })

    Firebase.database()
    .ref('doctor_category/')
    .once('value')
    .then((res)=>{
      if(res.val()){
        const dataFilter = res.val().filter(el => el !==null)

        setDoctorCategory(dataFilter)
      }
    })
    .catch((err)=>{
      showError(err.message)
    })

    Firebase.database()
    .ref('doctors/')
    .orderByChild('rate')
    .limitToLast(3)
    .once('value')
    .then((res)=>{
      const oldData = res.val()
      const data = []

      //convert object to array pake Object.Key.map
      
      Object.keys(oldData).map((val)=>{
        data.push({
          id:val,
          data:oldData[val]
        })
      })

      if(res.val()){
        setDoctors(data)
      }
    })
    .catch((err)=>{
      showError(err.message)
    })



  },[])

    return(
     <View style={styles.page}>
       <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeProfile onPress={()=>navigation.navigate('UserProfile')}/>
                <View style={styles.wrapperSection}>
                   <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                </View>
                  
                  <View style={styles.wrapperScroll}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                          <View style={styles.category}>
                            <Gap width={32}/>
                          {doctorCategory.map((val)=>{
                            return(
                              <DoctorCategory 
                              key={val.id}
                              category={val.category}
                              image={val.image}
                              onPress={()=> navigation.navigate('ChooseDoctor',val)}
                              />
                            )
                          })}
                         
                          
                            <Gap width={22}/>
                          </View>
                      </ScrollView>
                  </View>
                  <View style={styles.wrapperSection}>
                    <Text style={styles.sectionLabel} >Top Rated Doctors</Text>
                    {doctors.map((val,index)=>{
                      return(
                        <RatedDoctor 
                        key={index}
                        onPress={()=>navigation.navigate('DoctorProfile',val)} 
                        name={val.data.fullName}
                        desc={val.data.profession}
                        avatar={{uri:val.data.photo}}
                        rate = {val.data.rate}
                        />
                      )
                    })}
                    
                  
                    <Text style={styles.sectionLabel} >Good News</Text>
                  </View>
                  {news.map((val)=>{
                    return(
                      <NewsItem
                        key={val.id}
                        date={val.date}
                        title = {val.title}
                        image={val.image}
                      />
                    )
                  })}
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
  wrapperSection:{
    paddingHorizontal:16

  }, 
  content:{
    backgroundColor:colors.white,
    flex:1,
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