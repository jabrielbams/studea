import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { theme } from "@/constants/theme";
import { hp, wp } from "../helpers/common";

const { width, height } = Dimensions.get("window");

const HomeSplash = () => {
	const navigation = useNavigation();
	const [animationComplete, setAnimationComplete] = useState(false);
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const textMessages = [
		'"Kami sedang mempersiapkan hasil yang sesuai dengan potensi dan impian Anda"',
		'"Mempersonalisasi pilihan untuk Anda..."',
		'"Rekomendasi sesuai impian Anda sedang kami proses!"',
		'"Kami berusaha menemukan beasiswa terbaik untuk Anda."',
		'"Selesai! membuat laporan hasil"',
	];

	const backgroundHeight = useSharedValue(height);
	const backgroundWidth = useSharedValue(width);
	const borderRadius = useSharedValue(0);
	const logoScale = useSharedValue(1);
	const logoTranslateY = useSharedValue(0);
	const opacity = useSharedValue(1);
	const textOpacity = useSharedValue(0);
	const loadingRotation = useSharedValue(0);

	const onAnimationComplete = () => {
		setAnimationComplete(true);
		textOpacity.value = withTiming(1, { duration: 500 });
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

	useEffect(() => {
		if (animationComplete) {
			let textTimer;
			textTimer = setInterval(() => {
				setCurrentTextIndex((prevIndex) => {
					if (prevIndex < textMessages.length - 1) {
						return prevIndex + 1;
					} else {
						clearInterval(textTimer);
						runOnJS(navigateToProfiling)();
						return prevIndex;
					}
				});
			}, 3000);

			let rotateTimer = setInterval(() => {
				loadingRotation.value = withTiming(loadingRotation.value + 360, {
					duration: 1000,
					easing: Easing.linear,
				});
			}, 1000);

			return () => {
				clearInterval(textTimer);
				clearInterval(rotateTimer);
			};
		}
	}, [animationComplete]);

	const navigateToProfiling = () => {
		navigation.replace("Result"); 
	};

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

	const textStyle = useAnimatedStyle(() => {
		return {
			opacity: textOpacity.value,
		};
	});

	const loadingStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: `${loadingRotation.value}deg` }],
			opacity: textOpacity.value,
		};
	});

	return (
		<View
			style={[
				styles.container,
				animationComplete && { height: hp(25), bottom: "auto" },
			]}>
			<Animated.View style={[styles.background, backgroundStyle]} />
			<Animated.View style={[styles.logoContainer, logoContainerStyle]}>
				<Image
					source={require("../assets/images/studea-no-bg.png")}
					style={styles.logo}
					resizeMode="contain"
				/>
			</Animated.View>
			{animationComplete && (
				<View style={styles.textContainer}>
					<Animated.Text style={[styles.welcomeText, textStyle]}>
						{textMessages[currentTextIndex]}
					</Animated.Text>
					<Animated.Image
						source={require("../assets/images/loading.png")}
						style={[styles.loadingIcon, loadingStyle]}
						resizeMode="contain"
					/>
				</View>
			)}
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
		width: width,
	},
	background: {
		backgroundColor: theme.colors.primary,
		position: "absolute",
		top: 0,
	},
	logoContainer: {
		position: "absolute",
		top: height / 2 - hp(10),
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: wp(50),
		height: hp(20),
	},
	textContainer: {
		position: "absolute",
		top: height / 2 + hp(5),
		alignItems: "center",
	},
	welcomeText: {
		fontSize: wp(4),
		color: "#1E1E1E",
		fontWeight: "bold",
		marginBottom: hp(2),
		textAlign: "center",
	},
	loadingIcon: {
		width: wp(10),
		height: wp(10),
	},
});

export default HomeSplash;
