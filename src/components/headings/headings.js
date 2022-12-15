import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export { MainHeader, SubHeader, SubTxt };

const MainHeader = (props) => {
    return (
        <Text style={headStyles.heading}>{props.text}</Text>
    );
}

const SubHeader = (props) => {
    return (
        <Text style={headStyles.subHeading}>{props.text}</Text>
    );
}

const SubTxt = (props) => {
    return (
        <Text style={headStyles.subTxt}>{props.text}</Text>
    );
}

const headStyles = StyleSheet.create({
    heading: {
        fontFamily: 'Cantata One',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
        textAlign: 'left',
    },
    subHeading: {
        fontFamily: 'Cantata One',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 50,
        textAlign: 'left',
    },
    subTxt: {
        color: '#AAA9A9',
        fontFamily: 'Cantata One',
        fontSize: 14,
        marginBottom: 25
    },
  
  })