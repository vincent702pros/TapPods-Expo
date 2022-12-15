import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { GenreListContextProvider } from "./src/GenreListContext";
import { StartStack, TabBar } from "./src/navigation/navigationScreen";
import { UserContextProvider } from "./src/utils/user-context";
import { useFonts } from 'expo-font';


export default function App() {

  const [loaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins/Poppins-Black.ttf'),
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContextProvider setIsLoggedIn={setIsLoggedIn}>
      <GenreListContextProvider>
        <>
          <NavigationContainer>
            {isLoggedIn ? <TabBar /> : <StartStack />}
          </NavigationContainer>
          <StatusBar style="auto" />
        </>
      </GenreListContextProvider>
    </UserContextProvider>
  );
}
