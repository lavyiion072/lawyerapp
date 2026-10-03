import { View, Text, Pressable, useRouter } from 'expo-router';

export default function NotFound() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center p-6">
      <Text className="text-6xl mb-4">🔍</Text>
      <Text className="text-xl font-bold text-gray-900 mb-2">Page Not Found</Text>
      <Pressable onPress={() => router.back()} className="bg-indigo-600 px-6 py-3 rounded-xl mt-4"><Text className="text-white font-semibold">Go Back</Text></Pressable>
    </View>
  );
}