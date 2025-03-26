import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";

const VerificationCodeInput = ({ label }) => {
  const [code, setCode] = useState("");
  const codeLength = 6;

  // Create an array of digit slots based on code length
  const digitSlots = Array(codeLength).fill(0);

  // Handle code change with validation
  const handleCodeChange = (text) => {
    // Only allow digits and max length
    const numericText = text.replace(/[^0-9]/g, "");
    if (numericText.length <= codeLength) {
      setCode(numericText);
    }
  };

  // Handle send code button press
  const handleSendCode = () => {
    console.log("Requesting code");
    // Add your code sending logic here
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={code}
          onChangeText={handleCodeChange}
          style={styles.input}
          keyboardType='number-pad'
          maxLength={codeLength}
          autoComplete='one-time-code'
          placeholder='Enter code'
          placeholderTextColor={theme.colors.hint}
        />
        <Pressable
          style={styles.sendButton}
          onPress={handleSendCode}>
          <Text style={styles.sendButtonText}>Kirim Kode</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VerificationCodeInput;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginVertical: 8,
  },
  label: {
    position: "absolute",
    top: -10,
    left: 16,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 4,
    color: theme.colors.primary,
    fontWeight: "bold",
    fontSize: 16,
    zIndex: 1,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 16,
    height: hp(6.5),
    overflow: "hidden",
  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 16,
    fontSize: 16,
    color: theme.colors.black,
  },
  sendButton: {
    backgroundColor: theme.colors.primary,
    height: "100%",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
