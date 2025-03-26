import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import ScreenWrapper from "../../helpers/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "../../helpers/common";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const LoginScreen = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerBackground} />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/studea-no-bg.png")}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>
      </View>
      <ScreenWrapper contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>
          <Text style={{ color: theme.colors.primary }}>Temukan </Text>
          <Text style={{ color: theme.colors.secondary }}>Beasiswa,</Text>
          {"\n"}
          <Text style={{ color: theme.colors.primary }}>Rangkai </Text>
          <Text style={{ color: theme.colors.secondary }}>Path </Text>
          <Text style={{ color: theme.colors.primary }}>mu!</Text>
        </Text>

        <View style={styles.formContainer}>
          <InputField
            label='Email'
            placeholder='Enter your email'
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <InputField
            label='Password'
            placeholder='Enter your password'
            secureTextEntry
          />

          <Text style={styles.forgotPassword}>Forgot Password?</Text>

          <Button
            title='Login'
            onPress={() => router.push("Quesioner")}
            size='medium'
          />

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <Text
              style={styles.registerLink}
              onPress={() => router.push("Auth/Register")}>
              Register
            </Text>
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: hp(25),
    width: "100%",
    alignItems: "center",
    zIndex: 1,
  },
  headerBackground: {
    position: "absolute",
    width: wp(110),
    height: hp(25),
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: wp(50),
    borderBottomRightRadius: wp(50),
    top: 0,
    left: -(wp(110) - width) / 2,
  },
  logoContainer: {
    position: "absolute",
    top: hp(7),
    alignItems: "center",
  },
  logo: {
    width: wp(40),
    height: hp(10),
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    gap: hp(5),
    paddingHorizontal: wp(10),
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: theme.fonts.extrabold,
    textAlign: "center",
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: hp(3),
    textAlign: "center",
  },
  formContainer: {
    gap: hp(2.5),
    width: "100%",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: theme.colors.secondary,
    fontSize: hp(1.8),
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontSize: hp(1.8),
    color: theme.colors.text,
  },
  registerLink: {
    fontSize: hp(1.8),
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});
