import React, { useEffect } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import ScreenWrapper from "../helpers/ScreenWrapper";
import Button from "../components/Button";
import HeaderSplash from "../components/HeaderSplash";
import { router } from "expo-router"; // Change from useNavigation to router
import { theme } from "@/constants/theme";
import InputField from "@/components/InputField";
import { wp } from "@/helpers/common";

export default function Index() {
  const contentOpacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Delay to match HeaderSplash animation (3s delay + 800ms animation + extra buffer)
    const delay = 3200;

    // Fade in content after HeaderSplash animation
    const fadeInTimer = setTimeout(() => {
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }, delay);

    return () => clearTimeout(fadeInTimer);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <HeaderSplash showSplash={true} />
        <ScreenWrapper>
          <Animated.View style={[styles.content, { opacity: contentOpacity }]}>
            <Text style={styles.welcomeText}>
              <Text style={{ color: theme.colors.primary }}>Temukan </Text>
              <Text style={{ color: theme.colors.secondary }}>Beasiswa,</Text>
              {"\n"}
              <Text style={{ color: theme.colors.primary }}>Rangkai </Text>
              <Text style={{ color: theme.colors.secondary }}>Path </Text>
              <Text style={{ color: theme.colors.primary }}>mu!</Text>
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                title='Login'
                onPress={() => {
                  router.push("Auth/Login");
                }}
                loading={false}
                variant='filled'
              />
              <Button
                title='Register'
                onPress={() => router.push("Auth/Register")}
                variant='stroke'
              />
            </View>
          </Animated.View>
        </ScreenWrapper>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: theme.fonts.extrabold,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: wp(10),
    gap: 10,
  },
});
