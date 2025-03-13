import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";

const InputField = ({ label, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.hint}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
  input: {
    borderWidth: 2,
    height: hp(6.5),
    borderColor: theme.colors.primary,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: theme.colors.black,
  },
});
