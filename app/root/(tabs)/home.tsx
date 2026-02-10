import { SignOutButton } from "@/components/ui/sign-out-button";
import { SignedIn, SignedOut, useSession, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen (){
  const { user } = useUser()
  const { session } = useSession()
  console.log(session?.currentTask)
  return (
    <SafeAreaView>
          <View>
      <Text>Welcome!</Text>
      {/* Show the sign-in and sign-up buttons when the user is signed out */}
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
      {/* Show the sign-out button when the user is signed in */}
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
    </View>
    </SafeAreaView>
  )
}