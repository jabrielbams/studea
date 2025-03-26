import React, { useEffect } from "react";
import {
	View,
	Image,
	Text,
	StyleSheet,
	Dimensions,
	StatusBar,
} from "react-native";
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

const QuisionerSplash = () => {
	const backgroundHeight = useSharedValue(hp(25));
	const backgroundWidth = useSharedValue(wp(110));
	const logoScale = useSharedValue(1);
	const logoTranslateY = useSharedValue(-hp(37));
	const logoOpacity = useSharedValue(1);
	const textOpacity = useSharedValue(0);

	const onAnimationComplete = () => {
		setTimeout(() => {
			logoOpacity.value = withTiming(
				0,
				{ duration: 500, easing: Easing.ease },
				() => {
					textOpacity.value = withTiming(1, { duration: 500, easing: Easing.ease });
				}
			);
		}, 1000);
	};

	useEffect(() => {
		StatusBar.setHidden(true);

		const timer = setTimeout(() => {
			StatusBar.setHidden(false);

			backgroundHeight.value = withTiming(
				height,
				{ duration: 500, easing: Easing.ease },
				() => {
					runOnJS(onAnimationComplete)();
				}
			);

			backgroundWidth.value = withTiming(width, {
				duration: 500,
				easing: Easing.ease,
			});

			logoScale.value = withTiming(1, { duration: 500, easing: Easing.ease });

			logoTranslateY.value = withTiming(0, { duration: 500, easing: Easing.ease });
		}, 10);

		return () => {
			clearTimeout(timer);
			StatusBar.setHidden(false);
		};
	}, []);

	const backgroundStyle = useAnimatedStyle(() => {
		return {
			height: backgroundHeight.value,
			width: backgroundWidth.value,
			left: -(backgroundWidth.value - width) / 2,
		};
	});

	const logoContainerStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ scale: logoScale.value },
				{ translateY: logoTranslateY.value },
			],
			opacity: logoOpacity.value,
		};
	});

	const textStyle = useAnimatedStyle(() => {
		return {
			opacity: textOpacity.value,
		};
	});

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.background, backgroundStyle]} />
			<Animated.View style={[styles.logoContainer, logoContainerStyle]}>
				<Image
					source={require("../assets/images/studea-no-bg.png")}
					style={styles.logo}
					resizeMode="contain"
				/>
			</Animated.View>
			<Animated.Text style={[styles.text, textStyle]}>helo!</Animated.Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 100,
		alignItems: "center",
		justifyContent: "center",
		width: width,
	},
	background: {
		backgroundColor: theme.colors.primary,
		position: "absolute",
		top: 0,
	},
	logoContainer: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: wp(50),
		height: hp(20),
	},
	text: {
		position: "absolute",
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
});

export default QuisionerSplash;
