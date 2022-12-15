import { StyleSheet, Text, View, SafeAreaView, TextInput, AsyncStorage } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BackBtn, NextValBtn } from '../../components/buttons/btns';
import { MainHeader, SubHeader, SubTxt } from '../../components/headings/headings';

export const SignUpPswd = ( {navigation} ) => {

  const [text, setText] = useState('');

  const validatePassword = () => {
    console.log(text);
    let textvalue = text.replace(/\s/g, '');

    if(textvalue.length < 8) {
        alert('Enter Valid Password');
        return;
    }

    navigation.push("SignUpBirthdate");
    AsyncStorage.setItem('password', textvalue);
  }

  return (
    <View style={styles.container}>

        <View style={{ alignSelf: 'stretch', alignItems: 'center', textAlign: 'center', marginBottom: 5}}>
            <BackBtn/>
            <SubHeader text="Create Account"/>
        </View>

        <View style={{alignSelf: 'stretch', padding: 15, alignItems: 'center',}}>

            <View style={{alignSelf: 'stretch', textAlign: 'left'}}>
                <MainHeader text="Create a Password"/>
            </View>
            

            <SafeAreaView style={{width: '100%'}}>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(value => setText(value))}
                />
            </SafeAreaView>

            <View style={{alignSelf: 'stretch', textAlign: 'left'}}>
                <SubTxt text="Use at least 8 characters"/>
            </View>
            
        </View>


        <NextValBtn 
            action={validatePassword}
            title="Next" 
            color="#FF0078" 
            border="#FF0078"/>
      
    </View> 
  );
}

const displayData = async () => {
  try {
    let email =  await AsyncStorage.getItem('email');
    alert(email);
  }
  catch(error) {
      alert(error);
  }
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
  nxtBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 500,
    color: '#fff',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 35,
    paddingLeft: 35,
    marginBottom: 20,
  },
});
