import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	return (
		<SafeAreaView>
			<Text className="text-xl font-bold text-center">Welcome to Nativewind!</Text>
			<StatusBar />
		</SafeAreaView>
	);
}
