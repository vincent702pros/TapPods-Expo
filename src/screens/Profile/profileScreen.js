import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../utils/user-context";

export default function ProfileScreen() {
  const { currentUser } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="person-circle-outline" size={175} color="white" />
      </TouchableOpacity>
      <Text style={styles.name}>{currentUser.fullname}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.profileStatsContainer}>
        <View style={styles.followersContainer}>
          <Text style={styles.statText}>245</Text>
          <Text style={styles.statText}>Followers</Text>
        </View>

        <View style={styles.followingContainer}>
          <Text style={styles.statText}>230</Text>
          <Text style={styles.statText}>Following</Text>
        </View>
      </View>

      <View>
        <Text>Playlists</Text>
      </View>

      <View style={{ flex: 1 }} />
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
    paddingTop: 20,
  },
  name: {
    color: "#FFF",
    fontSize: 25,
  },
  editButton: {
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 500,
    borderColor: "gray",
    marginTop: 10,
  },
  editText: {
    color: "#FFF",
    paddingHorizontal: 10,
  },
  profileStatsContainer: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  followersContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  followingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  statText: {
    color: "lightgray",
    textTransform: "uppercase",
    fontSize: 11,
  },
});
