import { Text, View, StyleSheet } from "react-native";

export default function LibraryOption({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 500,
    borderWidth: 0.5,
    borderColor: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "300",
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
