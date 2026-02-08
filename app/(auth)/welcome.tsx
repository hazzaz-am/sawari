import CustomButton from "@/components/ui/custom-button";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function OnboardingScreen() {
	const swiperRef = useRef<Swiper>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const isLastSlide = activeIndex === onboarding.length - 1;

	return (
		<SafeAreaView className="flex h-full items-center justify-between bg-white">
			<TouchableOpacity
				onPress={() => router.replace("/(auth)/sign-up")}
				className="w-full flex justify-end items-end p-5"
			>
				<Text className="text-black text-lg font-JakartaBold">Skip</Text>
			</TouchableOpacity>
			<Swiper
				ref={swiperRef}
				loop={false}
				dot={<View className="w-[32px] h-[4px] mx-1 bg-[#e2e8f0]" />}
				activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286ff]" />}
				onIndexChanged={(index) => setActiveIndex(index)}
			>
				{onboarding.map((onb) => (
					<View key={onb.id} className="flex items-center justify-center">
						<Image source={onb.image} className="w-full h-[300px]" resizeMode="contain" />
						<View className="flex flex-row items-center justify-center">
							<Text className="text-black text-3xl font-bold mx-10 text-center">{onb.title}</Text>
						</View>
						<Text className="text-base font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
							{onb.description}
						</Text>
					</View>
				))}
			</Swiper>
			<CustomButton
				title={isLastSlide ? "Get Started" : "Next"}
				className={"w-11/12 mt-10"}
				onPress={() => (isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1))}
			/>
		</SafeAreaView>
	);
}
