import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback} from "react-native";


export default function App() {
  
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');

  const bill = parseFloat(billAmount);
  const tip = parseFloat(tipPercentage);

  const validBill = isNaN(bill) ? 0 : bill;
  const validTip = isNaN(tip) ? 0 : tip;

  const calculatedTip = (validBill * validTip) / 100;
  const calculatedTotal = validBill + calculatedTip;

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <View style={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>

      <View style={styles.inputContainer}> 
        <Text style={styles.label}>Bill Amount</Text>
        <TextInput
          style = {styles.input}
          placeholder="Enter Bill Amount"
          keyboardType="numeric"
          placeholderTextColor="#888"
          value={billAmount}
          onChangeText={(text) => setBillAmount(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tip Percentage</Text>
        <TextInput
          style = {styles.input}
          placeholder="Enter Tip Percentage"
          keyboardType="numeric"
           placeholderTextColor="#888"
          value={tipPercentage}
          onChangeText={(text) => setTipPercentage(text)}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Tip Amount : {calculatedTip.toFixed(2)}
        </Text>
        <Text style={styles.resultText}>
          Total Amount : {calculatedTotal.toFixed(2)}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  constainer : {
    flex: 1,
    backgroundColor : '#f5f5f5',
    alignItems : 'center',
    justifyContent : 'center',
    padding : 20,
  },
  title : {
    fontSize : 32,
    fontWeight : 'bold',
    marginBottom : 30,
    color : 'white',
  },
  inputContainer : {
    width : '100%',
    marginBottom : 20,
  },
  label : {
    fontSize : 16,
    marginBottom : 5,
    color : 'white',
    fontWeight : '600',
  },
  input : {
    width : '100%',
    height : 50,
    borderColor : '#ccc',
    borderWidth : 1,
    borderRadius : 8,
    paddingHorizontal : 10,
    fontSize : 16,
    backgroundColor : "#fff",
    color: "#000",

  },
  resultContainer : {
    marginTop : 30,
    width : '100%',
    padding : 20,
    backgroundColor : '#fff',
    borderRadius : 10,
    shadowColor : '#000',
    shadowOffset : { width : 0, height : 2 },
    shadowOpacity : 0.1,
    shadowRadius : 4,
    elevation : 3,
    alignItems : 'center',
  },
  resultText : {
    fontSize : 20,
    fontWeight : 'bold',
    color : '#2c3e50',
    marginVertical : 5,
  },
})