import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Loading from "./Loading";
import { theme } from "@/constants/theme";
import { hp, wp } from "../helpers/common";

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = false,
  disabled = false,
  variant = "filled",
  size = "medium",
  leftIcon,
  rightIcon,
  ...accessibilityProps
}) => {
  // Size variations
  const sizeStyles = {
    small: {
      button: { height: hp(5), paddingHorizontal: wp(3) },
      text: { fontSize: hp(1.8) },
    },
    medium: {
      button: { height: hp(7), paddingHorizontal: wp(4) },
      text: { fontSize: hp(2.2) },
    },
    large: {
      button: { height: hp(8), paddingHorizontal: wp(5) },
      text: { fontSize: hp(2.5) },
    },
  };

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "stroke":
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: theme.colors.primary,
          },
          text: { color: theme.colors.primary },
        };
      case "secondary":
        return {
          button: { backgroundColor: theme.colors.secondary },
          text: { color: "white" },
        };
      case "ghost":
        return {
          button: { backgroundColor: "transparent" },
          text: { color: theme.colors.primary },
        };
      case "filled":
      default:
        return {
          button: { backgroundColor: theme.colors.primary },
          text: { color: "white" },
        };
    }
  };

  const variantStyles = getVariantStyles();
  const disabledStyle = disabled ? { opacity: 0.5 } : {};

  if (loading) {
    return (
      <View
        style={[
          styles.button,
          sizeStyles[size].button,
          variantStyles.button,
          disabledStyle,
          buttonStyle,
        ]}
        {...accessibilityProps}>
        <Loading size={size === "small" ? "small" : "medium"} />
      </View>
    );
  }

  return (
    <Pressable
      onPress={disabled ? null : onPress}
      style={({ pressed }) => [
        styles.button,
        sizeStyles[size].button,
        variantStyles.button,
        disabledStyle,
        buttonStyle,
        pressed && { opacity: 0.8 },
      ]}
      disabled={disabled}
      {...accessibilityProps}>
      <View style={styles.contentContainer}>
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        <Text
          style={[
            styles.text,
            sizeStyles[size].text,
            variantStyles.text,
            textStyle,
          ]}>
          {title}
        </Text>
        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.md,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: theme.fonts.bold,
    textAlign: "center",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});
