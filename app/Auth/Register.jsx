import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import ScreenWrapper from "../../helpers/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "../../helpers/common";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { router } from "expo-router";
import VerificationCodeInput from "../../components/VerificationCodeInput";

const { width } = Dimensions.get("window");

const RegisterScreen = () => {
  return (
    <>
      {/* Header with semi-circle background */}
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

      <ScreenWrapper scrollable={true}>
        <View style={styles.content}>
          {/* Welcome text */}
          <Text style={styles.welcomeText}>
            <Text style={{ color: theme.colors.primary }}>Mulai </Text>
            <Text style={{ color: theme.colors.secondary }}>Perjalanan,</Text>
            {"\n"}
            <Text style={{ color: theme.colors.primary }}>Buat </Text>
            <Text style={{ color: theme.colors.secondary }}>Akun </Text>
            <Text style={{ color: theme.colors.primary }}>Baru!</Text>
          </Text>

          {/* Registration form */}
          <View style={styles.formContainer}>
            <InputField
              label='Email'
              placeholder='Enter your email'
              keyboardType='email-address'
              autoCapitalize='none'
            />

            <InputField
              label='Username'
              placeholder='Choose a username'
              autoCapitalize='none'
            />

            <InputField
              label='Password'
              placeholder='Create a password'
              secureTextEntry
            />

            <VerificationCodeInput label='Verification Code' />

            <Button
              title='Register'
              onPress={() => router.push("Home")}
              size='medium'
            />

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <Text
                style={styles.loginLink}
                onPress={() => router.push("Auth/Login")}>
                Login
              </Text>
            </View>
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: hp(22),
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
    gap: hp(4),
    paddingHorizontal: wp(10),
  },
  welcomeText: {
    fontSize: 30, // Slightly smaller to fit better
    fontWeight: theme.fonts.extrabold,
    textAlign: "center",
  },
  formContainer: {
    gap: hp(2.5),
    width: "100%",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    fontSize: hp(1.8),
    color: theme.colors.text,
  },
  loginLink: {
    fontSize: hp(1.8),
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});
