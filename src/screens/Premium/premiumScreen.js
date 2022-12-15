import { Text, View, Image } from "react-native";

export default function PremiumScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 100, height: 100, marginBottom: 25 }}
        source={{
          uri: "https://www.tappods.com/wp-content/uploads/2022/11/image-1.png",
        }}
      />

      <Text style={{ color: "white", fontSize: 20, fontWeight: "semibold" }}>
        Upgrade to Premium to surf ad free!
      </Text>
    </View>
  );
}
