import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LoginScreen } from "../screens/Login/login_screen.js";
import { StartScreen } from "../screens/Login/start_screen.js";
import { SignUpBirthdate } from "../screens/Sign Up/birthdate.js";
import { ChoosePods } from "../screens/Sign Up/choose_pods.js";
import { SignUpEmail } from "../screens/Sign Up/email.js";
import { SignUpGender } from "../screens/Sign Up/gender.js";
import { SignUpName } from "../screens/Sign Up/name.js";
import { SignUpPswd } from "../screens/Sign Up/password.js";

import HomeScreen from "../screens/Home/homeScreen";
import LibraryScreen from "../screens/Library/libraryScreen";
import PremiumScreen from "../screens/Premium/premiumScreen";
import ProfileScreen from "../screens/Profile/profileScreen.js";
import SearchScreen from "../screens/Search/searchScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const StartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="SignUp" component={SignUpEmail} />
      <Stack.Screen name="SignUpPswd" component={SignUpPswd} />
      <Stack.Screen name="SignUpBirthdate" component={SignUpBirthdate} />
      <Stack.Screen name="SignUpGender" component={SignUpGender} />
      <Stack.Screen name="SignUpName" component={SignUpName} />
      <Stack.Screen name="ChoosePods" component={ChoosePods} />

      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "black" },
      }}
    >
      <Stack.Screen
        options={({ navigation }) => ({
          title: "",

          headerTitleStyle: {
            textAlign: "left",
            fontWeight: "bold",
          },
          headerLeft: () => (
            <View style={{ marginTop: 20, marginLeft: -10 }}>
              <Text
                style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
              >
                Welcome
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{ marginTop: 20, marginRight: -10, flexDirection: "row" }}
            >
              <View style={styles.notificationContainer}>
                <View style={styles.notificationDot}></View>
                <TouchableOpacity>
                  <Ionicons name="notifications" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Ionicons
                  style={{ marginLeft: 10, marginTop: -2 }}
                  name="person-circle-outline"
                  size={26}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
        })}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="Settings"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "black" },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

const LibraryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "black" },
      }}
    >
      <Stack.Screen
        options={{
          title: "",

          headerTitleStyle: {
            textAlign: "left",
            fontWeight: "bold",
          },
          headerLeft: () => (
            <View
              style={{
                marginTop: 20,
                marginLeft: -10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={styles.userAvatar}>
                <Text style={styles.userName}>JO</Text>
              </View>
              <Text
                style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
              >
                Your Library
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                marginTop: 10,
                marginRight: -10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Ionicons name="ios-search-sharp" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  style={{
                    marginLeft: 10,
                    marginBottom: 0,
                  }}
                  name="ios-add-sharp"
                  size={40}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Library"
        component={LibraryScreen}
      />
    </Stack.Navigator>
  );
};

const PremiumStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "black" },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Premium"
        component={PremiumScreen}
      />
    </Stack.Navigator>
  );
};

export const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Search") {
            iconName = "ios-search";
          } else if (route.name === "Your Library") {
            iconName = "ios-library";
          } else if (route.name === "Premium") {
            iconName = "arrow-up-circle";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF0078",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Your Library"
        component={LibraryStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Premium"
        component={PremiumStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 10,
    width: 10,
    borderRadius: 500,
    backgroundColor: "#FF0078",
    zIndex: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  userAvatar: {
    height: 30,
    width: 30,
    borderRadius: 500,
    backgroundColor: "tomato",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
