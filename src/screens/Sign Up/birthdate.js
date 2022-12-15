import { StyleSheet, Text, View, SafeAreaView, AsyncStorage, TouchableOpacity, TouchableWithoutFeedback, Platform  } from 'react-native';
import { NextValBtn, BackBtn } from '../../components/buttons/btns';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MainHeader, SubHeader, SubTxt } from '../../components/headings/headings';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export const SignUpBirthdate = ( {navigation}) => {
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('');

  const showDatePicker = () => setShow(true);

  const onChange = (event, selectedDate) => {
    //Get Selected Date 
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");

    //Format date Object as String
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate); //Set date text value

    setShow(false); //Hide Popup

  }


  const validateDate = () => {
    let textvalue = text;

    if(textvalue.length < 0) {
        alert('Enter Birthdate');
        return;
    }
    navigation.push("SignUpGender");
    AsyncStorage.setItem('dob', textvalue);
  }

  return (
    <View style={styles.container}>

        <View style={{ alignSelf: 'stretch', alignItems: 'center', textAlign: 'center', marginBottom: 5}}>
            <BackBtn/>
            <SubHeader text="Create Account"/>
        </View>

        <View style={{alignSelf: 'stretch', padding: 15, alignItems: 'center',}}>

            <View style={{alignSelf: 'stretch', textAlign: 'left'}}>
                <MainHeader text="What's your Birthdate?"/>
            </View>
            

            <SafeAreaView style={{width: '100%'}}>
                    
                    <View style={styles.input}>
                      <TouchableWithoutFeedback onPress={showDatePicker} >
                            <Text style={{color: '#fff'}}>{text}</Text>
                      </TouchableWithoutFeedback>
                    </View>
                    

            </SafeAreaView>


            {show ?
              <View style={{position: 'absolute', background: '#red'}}>
                  <DateTimePicker 
                  display="calendar"
                  mode="date"
                  value={new Date()}
                  onChange={onChange}
                  />
              </View>
              :
              null
              }

        </View>

        <NextValBtn 
            action={validateDate}
            title="Next" 
            color="#FF0078" 
            border="#FF0078"/>
      
    </View> 
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    textAlign: 'left',
    paddingTop: 35,
  },
  input: {
    width: '100%',
    backgroundColor: '#404040',
    color: '#fff',
    height: 46,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color : "#000"
  }

});
