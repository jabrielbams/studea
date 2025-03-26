import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { theme } from "@/constants/theme";

export default function RootLayout() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.keyboardAvoidingView}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<StatusBar style="auto" />
					<Stack
						screenOptions={{
							headerShown: false,
							contentStyle: { backgroundColor: "white" },
							animation: "fade_from_bottom",
							animationDuration: 300,
						}}>
						<Stack.Screen name="index" />
						<Stack.Screen
							name="Auth/Login"
							options={{
								presentation: "card",
							}}
						/>
						<Stack.Screen
							name="Auth/Register"
							options={{
								presentation: "card",
							}}
						/>
						<Stack.Screen name="Quisioner" />
						<Stack.Screen name="Home" />
						<Stack.Screen name="Result" />
					</Stack>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	keyboardAvoidingView: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
});
