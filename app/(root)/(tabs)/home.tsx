import { SignOutButton } from "@/components/ui/sign-out-button";
import { SignedIn, SignedOut, useSession, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	const { user } = useUser();
	const { session } = useSession();
	console.log(session?.currentTask);
	return (
		<SafeAreaView>
			<View>
				<SignedIn>
					<Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
					<SignOutButton />
				</SignedIn>
			</View>
		</SafeAreaView>
	);
}
