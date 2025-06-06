import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");
  const [prevInput, setPrevInput] = useState("");

  const handleButtonPress = (value) => {
    if (input === "0" || input === result) {
      setInput(value);
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleOperatorPress = (operator) => {
    if (result) {
      setInput(result + operator);
      setResult("");
    } else {
      setInput((prevInput) => prevInput + operator);
    }
  };

  const handleEqualPress = () => {
    try {
      setPrevInput(input)
      setResult(eval(input).toString());
      setInput(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClearPress = () => {
    setInput("0");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        {result ? (
          <>
            <Text style={[styles.displayText, { fontSize: 50, marginTop: -10, marginBottom: 10 }]}>
            {prevInput} =
            </Text>
            <Text style={[styles.displayText, { fontSize: 77}]}>
            {result}
            </Text>
          </>
        ) : (
          <Text style={[styles.displayText, { fontSize: 77, marginTop: -10 }]}>
            {input}
          </Text>
        )}

      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleClearPress()}
            style={[styles.button, { backgroundColor: "#CCCCCC" }]}
          >
            <Text style={[styles.buttonText, { color: "black" }]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#CCCCCC" }]}
          >
            <Text style={[styles.buttonText, { color: "black" }]}>🙂</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperatorPress("%")}
            style={[styles.button, { backgroundColor: "#CCCCCC" }]}
          >
            <Text style={[styles.buttonText, { color: "black" }]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperatorPress("/")}
            style={[styles.button, , { backgroundColor: "orange" }]}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleButtonPress("7")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("8")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("9")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperatorPress("*")}
            style={[styles.button, , { backgroundColor: "orange" }]}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleButtonPress("4")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("5")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("6")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperatorPress("-")}
            style={[styles.button, , { backgroundColor: "orange" }]}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleButtonPress("1")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("2")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("3")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperatorPress("+")}
            style={[styles.button, { backgroundColor: "orange" }]}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleButtonPress("0")}
            style={styles.buttonZero}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress(".")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleEqualPress()}
            style={styles.buttonEqual}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "black",
  },
  displayContainer: {
    marginTop: 250,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
    marginBottom: 40,
  },
  displayText: {
    fontSize: 65,
    color: "#CCCCCC",
  },
  resultText: {
    fontSize: 40,
    color: "white",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 25,
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#333337",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonZero: {
    width: 175,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#333337",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  buttonEqual: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#CCCCCC",
    fontSize: 35,
    fontWeight: "normal",
  },
});
