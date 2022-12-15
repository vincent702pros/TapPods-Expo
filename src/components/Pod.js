import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Pod({ item }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.tappods.com/wp-content/uploads/2022/11/npr-news-now_tile_npr-network-01_sq-d270e3f80c6b5c951c8dc7be402e4438ce8130d0-300x300.jpg",
            }}
          />
          <TouchableOpacity style={styles.plusContainer}>
            <Ionicons name="ios-add-sharp" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>{item.title.rendered}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
  },
  container: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#232323",
    width: 175,
    height: 250,
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  plusContainer: {
    position: "absolute",
    bottom: 8,
    right: 4,
    borderRadius: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    objectFit: "cover",
    marginBottom: 5,
  },
  heading: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "semibold",
  },
  date: {
    fontSize: 14,
    color: "#FFF",
  },
  desc: {
    color: "gray",
  },
});
