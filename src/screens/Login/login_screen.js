import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { MainBtn, NextValBtn } from "../../components/buttons/btns";
import { useState, useContext } from "react";
import { UserContext } from "../../utils/user-context";

export const LoginScreen = ({ navigation }) => {
  const goSignUp = () => navigation.navigate("SignUp");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { currentUser, setCurrentUser, setIsLoggedIn } =
    useContext(UserContext);

  const authUser = () => {
    if (email == "") {
      alert("Enter Valid Email");
      return;
    }
    if (pass == "") {
      alert("Enter Valid Email");
      return;
    }

    //Connect to WordPress Rest API Login User
    fetch("https://www.tappods.com/wp-json/tpapi/v1/authuser/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: pass,
        key: "tpKEY123",
      }),
    })
      .then((res) => res.json())
      .then(function (data) {
        if (data.id == null) {
          alert("Email or Password is incorrect");
          return;
        }
        //Save data to user context
        currentUser.id = data.id;
        currentUser.fname = data.firstname;
        currentUser.lname = data.lastname;
        currentUser.userEmail = data.email;
        currentUser.fullname = data.displayname;

        console.log("Authorization Success");

        setIsLoggedIn(true);

        //Navigate to Home
        // navigation.push("Home");
      })
      .catch((error) => console.log("Error"));
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 75, height: 75, marginBottom: 125 }}
        source={{
          uri: "https://www.tappods.com/wp-content/uploads/2022/11/image-1.png",
        }}
      />
      <SafeAreaView style={{ marginBottom: 35 }}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value) => setPass(value)}
        />
      </SafeAreaView>

      <NextValBtn
        action={authUser}
        title="Sign In"
        color="#FF0078"
        border="#FF0078"
      />

      <TouchableWithoutFeedback onPress={goSignUp}>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Sign Up
        </Text>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    fontFamily: "Cantata One",
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 100,
    textAlign: "center",
  },
  input: {
    width: 300,
    backgroundColor: "#404040",
    color: "#fff",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputLabel: {
    color: "#fff",
    marginLeft: 12,
  },
});
