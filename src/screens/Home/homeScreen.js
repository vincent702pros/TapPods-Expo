import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  PermissionsAndroid,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

import { WebView } from "react-native-webview";

import Pod from "../../components/Pod";

export default function HomeScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPod, setCurrentPod] = useState({});
  const [data, setData] = useState([]);
  const webViewRef = useRef({});

  useEffect(() => {
    fetch("https://www.tappods.com/wp-json/wp/v2/posts/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setCurrentPod(data[0]?.acf.audio_file);
  }, [data]);

  const handleCurrentPod = (pod) => {
    setCurrentPod(pod);

    console.log("POD", pod);

    // webViewRef.current.injectJavaScript(
    //     `
    //     document.getElementById("source").src = ${pod};
    //     true;
    //     `
    // )
  };

  useEffect(() => {
    webViewRef.current.injectJavaScript(
      `document.getElementById("source").src = ${currentPod};true;`
    );
    webViewRef.current.injectJavaScript(
      'document.getElementById("audio").play();true;'
    );
  }, [currentPod]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Text style={styles.mainTitle}>Explore</Text>
          <Text style={styles.subTitle}>See all</Text>
        </View>

        <FlatList
          horizontal
          style={styles.flatList}
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleCurrentPod(item.acf.audio_file)}
            >
              <Pod item={item} />
            </TouchableOpacity>
          )}
        />

        <View style={{ paddingVertical: 20 }}></View>

        <View style={styles.titleWrapper}>
          <Text style={styles.mainTitle}>Your Library</Text>
          <Text style={styles.subTitle}>See all</Text>
        </View>

        <FlatList
          horizontal
          style={styles.flatList}
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleCurrentPod(item.acf.audio_file)}
            >
              <Pod key={item.id} item={item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        mediaPlaybackRequiresUserAction={false} // Allow autoplay
        useWebKit={true}
        source={{
          html: `<audio id="audio" loop> <source id="source" src="${currentPod}" type="audio/mp3" /> </audio>`,
        }}
      />

      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => {
          webViewRef.current.injectJavaScript(
            'document.getElementById("audio").play();true;'
          );
        }}
      >
        <Text style={{ color: "white" }}>Play</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 50,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  flatList: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  scrollView: {
    paddingHorizontal: 0,
  },
  mainTitle: {
    color: "#fff",
    alignSelf: "start",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    flex: 1,
  },
  subTitle: {
    color: "#FF0078",
    alignSelf: "start",
    fontSize: 16,
    fontWeight: "semibold",
    marginBottom: 10,
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 100,
    textAlign: "center",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 500,
    color: "#fff",
    fontSize: 18,
    padding: 15,
    width: 300,
    marginBottom: 20,
  },
});
