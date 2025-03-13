import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Loading from "./Loading";
import { theme } from "@/constants/theme";
import { hp } from "../helpers/common";

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = false,
  variant = "filled",
}) => {
  const buttonVariantStyle =
    variant === "stroke"
      ? {
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: theme.colors.primary,
        }
      : {};

  const textVariantStyle =
    variant === "stroke"
      ? { color: theme.colors.primary, fontWeight: theme.fonts.bold }
      : {};

  if (loading) {
    return (
      <View
        style={[
          styles.button,
          buttonVariantStyle,
          buttonStyle,
          { backgroundColor: "white" },
        ]}>
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonVariantStyle, buttonStyle]}>
      <Text style={[styles.text, textVariantStyle, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.md,
  },
  text: {
    color: "white",
    fontSize: hp(2.5),
    fontWeight: theme.fonts.bold,
  },
});
