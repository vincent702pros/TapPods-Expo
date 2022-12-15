import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { MainBtn } from '../../components/buttons/btns';


export const StartScreen = ({ navigation }) => {

  const onPress = () => navigation.navigate('SignUp');
  const goLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.container}>

      <Image
        style={{ width: 75, height: 75, marginBottom: 125 }}
        source={{
          uri: 'https://www.tappods.com/wp-content/uploads/2022/11/image-1.png',
        }}
      /> 
      <Text style={styles.heading}>Surf Micro Pods.{'\n'}Free on TapPods.</Text>

      <MainBtn title="Sign Up Free" color="#FF0078" border="#FF0078" action={onPress} />
      <MainBtn title="Continue with Google" color="#000" border="#FFF"/>
      
      <TouchableWithoutFeedback onPress={goLogin}>
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', marginTop: 20 }}>
          Login
        </Text>
      </TouchableWithoutFeedback>
      

      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'Cantata One',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 100,
    textAlign: 'center',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 500,
    color: '#fff',
    fontSize: 18,
    padding: 15,
    width: 300,
    marginBottom: 20,
   }

});
