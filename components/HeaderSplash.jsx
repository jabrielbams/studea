import React, { useEffect } from "react";
import { View, Image, StyleSheet, Dimensions, StatusBar } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import { theme } from "@/constants/theme";
import { hp, wp } from "../helpers/common";

const { width, height } = Dimensions.get("window");

const HeaderSplash = () => {
  // Add state to control container height after animation
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const backgroundHeight = useSharedValue(height);
  const backgroundWidth = useSharedValue(width);
  const borderRadius = useSharedValue(0);
  const logoScale = useSharedValue(1);
  const logoTranslateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  // Function to mark animation as complete
  const onAnimationComplete = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    StatusBar.setHidden(true);

    const timer = setTimeout(() => {
      StatusBar.setHidden(false);

      backgroundHeight.value = withTiming(
        hp(25),
        {
          duration: 800,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        },
        () => {
          // Use runOnJS to call function in JS thread after animation completes
          runOnJS(onAnimationComplete)();
        }
      );

      backgroundWidth.value = withTiming(wp(110), {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });

      borderRadius.value = withTiming(wp(50), {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });

      logoScale.value = withTiming(1, {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });

      logoTranslateY.value = withTiming(-hp(37), {
        duration: 800,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
      StatusBar.setHidden(false);
    };
  }, []);

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      height: backgroundHeight.value,
      width: backgroundWidth.value,
      borderBottomLeftRadius: borderRadius.value,
      borderBottomRightRadius: borderRadius.value,
      left: -(backgroundWidth.value - width) / 2,
      opacity: opacity.value,
    };
  });

  const logoContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: logoScale.value },
        { translateY: logoTranslateY.value },
      ],
      opacity: opacity.value,
    };
  });

  return (
    <View
      style={[
        styles.container,
        // Only cover the necessary part of screen after animation
        animationComplete && { height: hp(25), bottom: "auto" },
      ]}>
      <Animated.View style={[styles.background, backgroundStyle]} />
      <Animated.View style={[styles.logoContainer, logoContainerStyle]}>
        <Image
          source={require("../assets/images/studea-no-bg.png")}
          style={styles.logo}
          resizeMode='contain'
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, // This will be removed after animation
    zIndex: 100,
    alignItems: "center",
    width: width,
    // No explicit height here - will be controlled by state
  },
  background: {
    backgroundColor: theme.colors.primary,
    position: "absolute",
    top: 0,
  },
  logoContainer: {
    position: "absolute",
    top: height / 2 - hp(10), // Initial centered position
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: wp(50),
    height: hp(20),
  },
});

export default HeaderSplash;
