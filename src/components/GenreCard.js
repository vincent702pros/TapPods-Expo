import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { GenreListContext } from "../GenreListContext";

export function GenreCard({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export const GCard = (props) => {
  const [isChecked, setCheck] = useState(false);
  const { genreList, setGenreList } = useContext(GenreListContext);

  const toggleCheck = () => {
    if (isChecked == true) {
      //Remove Checked Genre
      setGenreList(genreList.filter((genre) => genre !== props.title));
      setCheck(false);
      return;
    }

    //Add Checked Genere
    setGenreList([...genreList, props.title]);
    setCheck(true);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleCheck}>
      <View style={styles.card}>
        <Ionicons
          style={{
            opacity: isChecked ? 1 : 0,
            position: "absolute",
            top: -6,
            right: -6,
            backgroundColor: "#fff",
            borderRadius: 500,
            padding: 2,
          }}
          name="checkmark-sharp"
          size={25}
          color="#000"
        />

        <Text style={styles.cardTitle}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const RenderGenres = (props) => {
  //API Request
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getGenere = async () => {
    try {
      const response = await fetch(
        "https://www.tappods.com/wp-json/tpapi/v1/podgenere/?key=tpKEY123"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGenere();
  }, []);

  //Display Results
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap",
        paddingTop: 10,
      }}
    >
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        data.map((item) => <GCard title={item} />)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 125,
    width: "100%",
    backgroundColor: "#a733ba",
    borderRadius: 10,
    padding: 10,
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#a733ba",
    borderRadius: 10,
    width: "30.1%",
    height: 120,
    padding: 10,
    margin: 6,
  },
  cardTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
