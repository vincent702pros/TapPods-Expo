import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

export default function Pod({ item }) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: item.img_url,
            }}
          />

          <View>
            <Text style={styles.heading}>{item.pod_title}</Text>
            <Text style={styles.date}>{item.post_date}</Text>
            <Image
              style={styles.image}
              source={{
                uri: item.img_url,
              }}
            />
            <TouchableOpacity style={styles.plusContainer}>
              <Ionicons name="ios-add-sharp" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: "transparent",
    width: "100%",
    height: "auto",
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
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
    width: 275,
    height: 275,
    borderRadius: 10,
    objectFit: "cover",
    marginBottom: 5,
  },
  heading: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "semibold",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 10,
  },
  desc: {
    color: "gray",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 500,
  },
  profileImageContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
