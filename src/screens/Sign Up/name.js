import { StyleSheet, Text, View, SafeAreaView, AsyncStorage , TextInput  } from 'react-native';
import { useState, useContext } from 'react';
import { NextValBtn, BackBtn } from '../../components/buttons/btns';
import { MainHeader, SubHeader, SubTxt } from '../../components/headings/headings';
import { UserContext } from '../../utils/user-context';

export const SignUpName = ( {navigation} ) => {

  const [name, setName] = useState('');
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const validateCredentials = async () => {
    let textvalue = name;
    let nameArray = textvalue.split(" ");

    if(textvalue == "") {
        alert('Enter Valid Full Name');
        return;
    }

    try {

      //Get Cached Data
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      const dob = await AsyncStorage.getItem('dob');
      const gender = await AsyncStorage.getItem('gender');
      let firstname = nameArray[0];
      let lastname = nameArray[1];

      // console.log(dob);

      //Connect to WordPress Rest API Create User
      fetch('https://www.tappods.com/wp-json/tpapi/v1/tpcreateuser/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: email,
            password: password,
            email: email,
            fname: firstname,
            lname: lastname,
            birthdate: dob,
            gender: gender,
            key: 'tpKEY123'
        }),
        })
        .then(res => res.json())
        .then(function(data) {

          if(data.id == null) {
              alert("User Not Created");
              return;
          }
            //Save data to user context
            currentUser.id = data.id;
            currentUser.fname = data.firstname;
            currentUser.lname = data.lastname;
            currentUser.userEmail = data.email;
            currentUser.fullname = data.displayname;

            console.log("User Created Succesfully");

            //Navigate to Next Page
            navigation.push('ChoosePods');
        })
        .catch(error => console.log('error'))

      //Reset Aysnc variables

      
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }

  }

  return (
    <View style={styles.container}>

        <View style={{ alignSelf: 'stretch', alignItems: 'center', textAlign: 'center', marginBottom: 5}}>
            <BackBtn/>
            <SubHeader text="Create Account"/>
        </View>

        <View style={{alignSelf: 'stretch', padding: 15, alignItems: 'center',}}>

            <View style={{alignSelf: 'stretch', textAlign: 'left'}}>
                <MainHeader text="What's your name?"/>
            </View>
            

            <SafeAreaView style={{width: '100%'}}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value => setName(value))}
                />
            </SafeAreaView>

            <View style={{alignSelf: 'stretch', textAlign: 'left'}}>
                <SubTxt text="This appears on your TapPods profile."/>
            </View>
            
        </View>

        <NextValBtn 
            action={validateCredentials}
            title="Create Account" 
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
  }

});
