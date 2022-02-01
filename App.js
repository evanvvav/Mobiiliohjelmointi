import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Button, TextInput, FlatList, Alert, Image} from "react-native";


export default function App() {

  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);

  const getRepositories = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(response => response.json())
    .then(data => setRepositories(data.meals)) 
    .catch(error => {
        Alert.alert('Error', error);

    });
  }

   return (
    <SafeAreaView style={styles.main}>
        <TextInput style={styles.input} onChangeText={ text => setKeyword(text) }/>
        <Button title="Find" onPress = {getRepositories}/>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <View>
            <Text
              style={{fontSize:18, fontWeight: "bold"}}>{item.strMeal}
            </Text>
            <Image source={{uri: item.strMealThumb}}
             style={{width:200, height: 200}} />
            
      
            
          </View>}
          data={repositories}/>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    width: 160,
    height: 30,
    margin: 1,
    backgroundColor: 'white',
    
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
    margin: 4,
  },
  button: {
    width: 57,
  },
});