import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NextValBtn } from '../../components/buttons/btns';
import { RenderGenres } from '../../components/GenreCard';
import { GenreListContext } from '../../GenreListContext';
import { useContext } from 'react';
import { UserContext } from '../../utils/user-context';

export const ChoosePods = ( {navigation} ) => {

  const {currentUser, setCurrentUser, setIsLoggedIn} = useContext(UserContext);
  const {genreList, setGenreList} = useContext(GenreListContext); 

  const checkCount = async () => {
      //Check if 3 Generes where chosen
      if(genreList.length < 3) {
        alert("Select 3 Genres");
        return;
      }

      //Connect to WordPress Rest API Save Favorite Genres
      fetch('https://www.tappods.com/wp-json/tpapi/v1/updategenres/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userid: currentUser.id,
            genres: genreList,
            key: 'tpKEY123'
        }),
        })
        .then(res => res.json())
        .then(function(data) {

            console.log("Genres List Saved");
            setIsLoggedIn(true);
            //Navigate to Home Screen
            // navigation.push('Home');
        })
        .catch(error => console.log('error'))
      
  }


  return (
    <View style={styles.container}>

        <View style={{alignSelf: 'stretch', padding: 15, alignItems: 'center',}}>

            <View style={{alignSelf: 'stretch', textAlign: 'left', marginTop: 15, marginBottom: 5}}>
                <Text style={styles.heading}>Choose 3 or more {'\n'}Generes you like.</Text>
            </View>
            
            <ScrollView style={{marginBottom: 175}}>
              <RenderGenres/>
            </ScrollView>  

        </View>

        <View style={{
              width: '100%',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute', 
              bottom: 0,
        }}>

            <NextValBtn 
              action={checkCount}
              title="Done" 
              color="#000" 
              border="#FFF"/>

        </View>
            
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    textAlign: 'left',
    paddingTop: 35,
  },
  heading: {
    fontFamily: 'Cantata One',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'left',
  },
});
