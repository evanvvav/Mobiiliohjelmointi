import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button, View, Alert } from "react-native";

const App = () => {

  const [answer, setAnswer] = useState(null);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const plus = () => {
    setAnswer(parseInt(number1) + parseInt(number2));
  };

  const minus = () => {
    setAnswer(parseInt(number1) - parseInt(number2));
  };



  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.Text}>
        Result: {answer} </Text>

      <TextInput
        value={number1}
        style={styles.input}
        onChangeText={(value) => setNumber1(value)}
        keyboardType="numeric"
        placeholder="number 1"
      />
      <TextInput
        value={number2}
        style={styles.input}
        onChangeText={(value) => setNumber2(value)}
        keyboardType="numeric"
        placeholder="number 2"
      />
  
      <View style={styles.fixToText}>
        <Button
          title="+"
          onPress={plus}
        />
        <Button
          title="-"
          onPress={minus}
        />
      </View>
    </SafeAreaView>
  );
};




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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
    ,
  },
  Text: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',

  },
});

export default App;