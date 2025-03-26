import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { theme } from "@/constants/theme";
import { hp, wp } from "../helpers/common";

const { width } = Dimensions.get("window");

const ResultSplash = () => {
	return (
		<View style={styles.header}>
			<Image
				source={require("../assets/images/studea-no-bg.png")}
				style={styles.logo}
				resizeMode="contain"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: theme.colors.primary,
		width: width,
		height: hp(10),
		justifyContent: "center",
		alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
	},
	logo: {
		width: wp(30),
		height: hp(5),
	},
});

export default ResultSplash;
