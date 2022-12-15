import { StyleSheet, Text, View, AsyncStorage, Image, TouchableOpacity  } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NextValBtn, BackBtn } from '../../components/buttons/btns';
import { MainHeader, SubHeader, SubTxt } from '../../components/headings/headings';


export const SignUpGender = ( {navigation}) => {

  const [femaleActive, setFemaleActive] = useState(false);
  const [maleActive, setMaleActive] = useState(false);
  const [otherActive, setOtherActive] = useState(false);
  const [gender, setGender] = useState("");

  const onChange = (value) => {
    setGender(value);

    if(value == "Male") {
      setMaleActive(true);
      setFemaleActive(false);
      setOtherActive(false);
    }
    if(value == "Female") {
      setMaleActive(false);
      setFemaleActive(true);
      setOtherActive(false);
    }
    if(value == "Other") {
      setMaleActive(false);
      setFemaleActive(false);
      setOtherActive(true);
    }
  }


  const validateGender= () => {

    let genValue = gender;

    if(genValue == "") {
        alert('Select Gender');
        return;
    }

    navigation.push("SignUpName");
    AsyncStorage.setItem('gender', genValue);
  }

  return (
    <View style={styles.container}>

        <View style={{ alignSelf: 'stretch', alignItems: 'center', textAlign: 'center', marginBottom: 5}}>
            <BackBtn/>
            <SubHeader text="Create Account"/>
        </View>

        <View style={{alignSelf: 'stretch', padding: 15, alignItems: 'center',}}>

            <View style={{alignSelf: 'stretch', textAlign: 'left', marginBottom: 10}}>
                <MainHeader text="What's your gender?"/>
            </View>
            
            <View style={{flexDirection:'row', flexWrap:'wrap', alignSelf: 'stretch', marginBottom: 25}} >

                <TouchableOpacity style={[styles.radioBtn, {backgroundColor: femaleActive ? '#fff' : '#000'}]} onPress={()=>onChange("Female")}>
                      <Text style={[styles.radioTxt, {color: femaleActive ? '#000' : '#fff'}]}>Female</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.radioBtn, {backgroundColor: maleActive ? '#fff' : '#000'}]} onPress={()=>onChange("Male")}>
                      <Text style={[styles.radioTxt, {color: maleActive ? '#000' : '#fff'}]}>Male</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.radioBtn, {backgroundColor: otherActive ? '#fff' : '#000'}]} onPress={()=>onChange("Other")}>
                      <Text style={[styles.radioTxt, {color: otherActive ? '#000' : '#fff'}]}>Other</Text>
                </TouchableOpacity>

            </View>


            
        </View>

        <NextValBtn 
            action={validateGender}
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
  radioBtn: {
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 500,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 10
  },
  radioTxt: {
    color: '#fff',
    fontWeight: 'bold'
  }

});
