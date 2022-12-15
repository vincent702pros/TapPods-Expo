import {Text, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export { MainBtn, NextBtn, BackBtn, NextValBtn };

const MainBtn = (props) => {
    var color = props.color;
    var border = props.border;
    var action = props.action;

    return (
      <TouchableOpacity style={[btnStyles.mainBtn,{backgroundColor: color, borderColor: border}]} onPress={action}>
          <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 15  }}>{props.title}</Text>
      </TouchableOpacity>
    );
}

const NextBtn = (props) => {

    const navigation = useNavigation();
    const action = () => navigation.push(props.page);
    var color = props.color;
    var border = props.border;

    return (
      <TouchableOpacity style={[btnStyles.nxtBtn,{backgroundColor: color, borderColor: border}]} onPress={action}>
          <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 15  }}>{props.title}</Text>
      </TouchableOpacity>
    );
}


const NextValBtn = (props) => {

  const navigation = useNavigation();
  var color = props.color;
  var border = props.border;

  return (
    <TouchableOpacity style={[btnStyles.nxtBtn,{backgroundColor: color, borderColor: border}]} onPress={props.action}>
        <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 15  }}>{props.title}</Text>
    </TouchableOpacity>
  );
}


const BackBtn = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={btnStyles.backBtn}>
        <Ionicons name="arrow-back-outline" size={30} color="#fff"/>
    </TouchableOpacity>
  );
}

const btnStyles = StyleSheet.create({
  mainBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 500,
    color: '#fff',
    fontSize: 18,
    padding: 15,
    width: 300,
    marginBottom: 20,
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
  
  },
  backBtn: {
      position: "absolute",
      left: 15,
  }

})