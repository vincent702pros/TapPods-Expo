import { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, StatusBar } from "react-native";

import LibraryOption from "../../components/LibraryOption";
import LibraryPod from "../../components/LibraryPod";

const options = ["Playlists", "Favorites", "Downloaded"];

export default function LibraryScreen() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://www.tappods.com/wp-json/wp/v2/posts/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <LibraryOption title={item} />}
      />

      <View style={{ paddingVertical: 10 }} />

      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <LibraryPod item={item} />}
      />

      <View style={{ flex: 1 }} />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 20,
    pading: 10,
  },
});
