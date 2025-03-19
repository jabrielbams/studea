import { View, Dimensions, StyleSheet } from "react-native";
import HomeSplash from "../components/HomeSplash";

// const { width } = Dimensions.get("window");

export default function Home() {
	return (
		<>
			<View style={styles.container}>
				<HomeSplash showSplash={true} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
