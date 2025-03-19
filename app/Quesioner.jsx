import { View, Dimensions, StyleSheet, Text } from "react-native";
import QuisionerSplash from "../components/QuesionerSplash";
import { router } from "expo-router";

// const { width } = Dimensions.get("window");

export default function Quesioner() {
	return (
		<>
			<View style={styles.container}>
				{/* <QuisionerSplash showSplash={true} /> */}
				<Text onPress={() => router.push("Home")}>Home</Text>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
