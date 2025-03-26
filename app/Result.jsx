import { View, Text, Dimensions, StyleSheet } from "react-native";
import ResultSplash from "../components/ResultSplash";
import { theme } from "@/constants/theme";
import { hp, wp } from "../helpers/common";

const { width } = Dimensions.get("window");

export default function Result() {
	return (
		<View style={styles.container}>
			<ResultSplash />

			{/* Card Hasil Tes */}
			<View style={styles.card}>

				<Text style={styles.title}>username, ini hasil tes</Text>
				<Text style={styles.subtitle}>PROFILING DAN KARIR</Text>
				<Text style={styles.desc}>kamu</Text>

				<View style={styles.resultItem}>
					<Text style={styles.label}>nama</Text>
					<View style={styles.valueBox}>
						<Text style={styles.value}>Asep Hilman</Text>
					</View>
				</View>

				<View style={styles.resultItem}>
					<Text style={styles.label}>tipe kepribadian</Text>
					<View style={styles.valueBox}>
						<Text style={styles.value}>Introvert dan Analitis</Text>
					</View>
				</View>

				<View style={styles.resultItem}>
					<Text style={styles.label}>minat utama</Text>
					<View style={styles.valueBox}>
						<Text style={styles.value}>Teknologi Informasi</Text>
					</View>
				</View>

				<View style={styles.resultItem}>
					<Text style={styles.label}>keterampilan unggulan</Text>
					<View style={styles.valueBox}>
						<Text style={styles.value}>Pemrograman, Analisis Data.</Text>
					</View>
				</View>

				<Text style={styles.dateText}>result test date: 12 march 2025</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F8F8F8",
	},
	card: {
		backgroundColor: "#FFD700",
		width: wp(90),
		borderRadius: 20,
		padding: hp(3),
		elevation: 5,
		alignItems: "start",
		position: "relative",
	},
	title: {
		fontSize: wp(5),
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: hp(0.5),
	},
	subtitle: {
		fontSize: wp(9),
		fontWeight: "bold",
		color: "black",
	},
	desc: {
		fontSize: wp(5),
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: hp(2),
	},
	resultItem: {
		width: "100%",
		marginBottom: hp(1.5),
	},
	label: {
		fontSize: wp(3.5),
		fontWeight: "bold",
		backgroundColor: "#FFD700",
		paddingVertical: hp(0.5),
		borderRadius: 5,
	},
	valueBox: {
		backgroundColor: "white",
		padding: hp(1),
		borderRadius: 5,
		marginTop: hp(0.5),
	},
	value: {
		fontSize: wp(4),
		color: "#333",
	},
	dateText: {
		fontSize: wp(3),
		textAlign: "center",
		marginTop: hp(2),
	},
});
