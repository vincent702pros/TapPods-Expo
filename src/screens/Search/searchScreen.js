import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

import { GenreCard } from "../../components/GenreCard";

const genres = [
  "Audio Dramas",
  "Business",
  "Comedy Casts",
  "Crime",
  "Culture",
  "Educational",
  "Environment",
  "Feminist",
  "Games and Hobbies",
  "Health",
  "History",
  "Interview Cast",
  "Kids and Families",
  "Law",
  "Mystery",
  "News & Politics",
  "Personal Journal",
  "Philosophy",
  "Pop Culture",
  "Religious",
  "Science",
  "Self Help",
  "Sports",
  "Technology",
];

export default function SearchScreen() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <View
          style={{
            marginTop: 20,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-search-sharp" size={24} color="black" />
          <TextInput
            style={{ fontSize: 18, marginLeft: 10 }}
            placeholder="Search TapPods"
          />
        </View>

        <View style={{ flex: 1, backgroundColor: "black" }}>
          <FlatList
            style={styles.flatList}
            data={genres}
            renderItem={({ item }) => <GenreCard title={item} />}
            numColumns={2}
            keyExtractor={(item) => item}
          />
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    width: "100%",
  },
});
