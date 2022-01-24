import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button, View, Alert } from "react-native";

const App = () => {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);

  return (
    <SafeAreaView>

      <Text style={styles.Text}>
        Result: </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="number 1"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="number 2"
        keyboardType="numeric"
      />
  
      <View style={styles.fixToText}>
        <Button
          title="+ Function"
          onPress={() => Alert.alert("Answer is " + (number1 + number2))}
        />
        <Button
          title="- Function"
          onPress={() => Alert.alert("Answer is " + (number1 - number2))}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
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

  },
});

export default App;