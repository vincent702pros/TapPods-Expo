import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, AsyncStorage  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BackBtn, NextValBtn } from '../../components/buttons/btns';
import { MainHeader, SubHeader, SubTxt } from '../../components/headings/headings';


export const SignUpEmail = ( {navigation} ) => {

  const [text, setText] = useState('');
  const [doesExist, setDoesExist] = useState();

  const validateEmail = () => {

    let emailValue = text.replace(/\s/g, '');

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if(reg.test(emailValue) === false) {
        alert('Enter Valid Email');
        return;
    }


    fetch('https://www.tappods.com/wp-json/tpapi/v1/checkemail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailValue,
            key: 'tpKEY123'
        }),
        })
        .then(res => res.json())
        .then(function(data) {
  
          if (data != false) {
            alert("User already exists!");
          }else {
            AsyncStorage.setItem('email', emailValue);
            navigation.push("SignUpPswd");
          }
          
        
        })
        .catch(error => console.log('error'))

  }



  return (
    <View style={styles.container}>

        <View style={{ alignSelf: 'stretch', alignItems: 'center', textAlign: 'center', marginBottom: 5}}>

            <BackBtn/>
            <SubHeader text="Create Account"/>

        </View>

        <View style={{alignSelf: 'stretch', padding: 15, alignItems: 'center',}}>

            <View style={{alignSelf: 'stretch', textAlign: 'left'}}>
                <MainHeader text="What's your email?"/>
            </View>
            

            <SafeAreaView style={{width: '100%'}}>
                <TextInput 
                  style={styles.input}
                  onChangeText={(value => setText(value))}
                  />
            
            </SafeAreaView>

            <View style={{alignSelf: 'stretch', textAlign: 'left'}}>
                <SubTxt text="You'll need to confirm this email later"/>
            </View>
            
        </View>


        <NextValBtn 
            action={validateEmail}
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
});
