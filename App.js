import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  Alert,
  View,
  TextInput,
} from "react-native";


export default function App() {
  const [display, setDisplay] = useState('Guess a number between 1-100!');
  const [answer, setAnswer] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    createAnswer();
  }, []);

  const createAnswer = () => {
    setAnswer(Math.floor(Math.random() * 100) + 1);
  };

  const handlePress = () => {
    if (parseInt(number) > answer) {
      setDisplay('Your guess ' + number + ' is too high');
    } else if (parseInt(number) < answer) {
      setDisplay('Your guess ' + number + ' is too low');
    } else {
      Alert.alert("Correct! Number is " + answer);
      createAnswer();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{display}</Text>
      <TextInput 
      style={styles.input} 
      onChangeText={(value) => setNumber(value)}
      keyboardType="numeric"
      placeholder="number"
      />
      <View>
        <Button title="MAKE GUESS" onPress={() => handlePress()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 36,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },

});