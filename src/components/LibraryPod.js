import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function LibraryPod({ item }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.tappods.com/wp-content/uploads/2022/11/npr-news-now_tile_npr-network-01_sq-d270e3f80c6b5c951c8dc7be402e4438ce8130d0-300x300.jpg",
          }}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.heading}>
            {item.title.rendered ? item.title.rendered : "TapPods Podcast"}
          </Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </View>
  );
}

LibraryPod.defaultProps = {
  rendered: "TapPods Podcast",
};
const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  textWrapper: {
    flexDirection: "column",
  },
  container: {
    padding: 10,
    borderRadius: 0,
    width: "100%",
    height: 100,
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 0,
    objectFit: "cover",
    marginRight: 10,
  },
  heading: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "semibold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  desc: {
    color: "gray",
  },
});
