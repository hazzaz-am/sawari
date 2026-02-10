import { useClerk } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity } from "react-native";

export const SignOutButton = () => {
	const { signOut } = useClerk();
	const router = useRouter();

	const handleSignOut = async () => {
		try {
			await signOut();
			router.replace("/(auth)/sign-in");
		} catch (err: any) {
			console.error(JSON.stringify(err, null, 2));
			Alert.alert("Error", err.errors[0].longMessage)
		}
	};

	return (
		<TouchableOpacity onPress={handleSignOut}>
			<Text>Sign out</Text>
		</TouchableOpacity>
	);
};
