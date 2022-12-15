import { StyleSheet, View, SafeAreaView, TextInput, AsyncStorage  } from 'react-native';
import React, { useState } from 'react';
import { BackBtn, NextValBtn } from '../../components/buttons/btns';
import { MainHeader, SubHeader, SubTxt } from '../../components/headings/headings';

export const SignUpEmail = ( {navigation} ) => {

  const [email, setEmail] = useState('');

  const validateEmail = () => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if(reg.test(email) === false) {
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
            email: email,
            key: 'tpKEY123'
        }),
        })
        .then(res => res.json())
        .then(function(data) {
  
          if (data != false) {
            alert("User already exists!");
          }else {
            AsyncStorage.setItem('email', email);
            navigation.push("SignUpPswd");
          }
           
        })
        .catch(error => console.log('Error: Failed to fetch'))
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
                  onChangeText={(value => setEmail(value.replace(/\s/g, '')))}
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
            border="#FF0078"
        />
  
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
