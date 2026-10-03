import { View, Text, Pressable, ScrollView } from 'react-native';
import { Home, ChevronRight, Star } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 pt-12">
        <Text className="text-3xl font-bold text-gray-900 mb-2">LawyerApp</Text>
        <Text className="text-gray-500 mb-6">Welcome! Here is your overview.</Text>
        <Pressable onPress={() => router.push('/features')} className="bg-white rounded-2xl p-5 shadow-sm mb-4 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="bg-indigo-100 rounded-xl p-3"><Home size={24} color="#4F46E5" /></View>
            <View><Text className="font-semibold text-gray-900">Get Started</Text><Text className="text-sm text-gray-500">Explore features</Text></View>
          </View>
          <ChevronRight size={20} color="#9CA3AF" />
        </Pressable>
        <View className="flex-row gap-3">
          <View className="flex-1 bg-white rounded-2xl p-4 shadow-sm"><Text className="text-2xl font-bold text-indigo-600">12</Text><Text className="text-sm text-gray-500">Active</Text></View>
          <View className="flex-1 bg-white rounded-2xl p-4 shadow-sm"><Text className="text-2xl font-bold text-emerald-600">5</Text><Text className="text-sm text-gray-500">Pending</Text></View>
          <View className="flex-1 bg-white rounded-2xl p-4 shadow-sm"><Text className="text-2xl font-bold text-amber-600">3</Text><Text className="text-sm text-gray-500">Alerts</Text></View>
        </View>
      </View>
    </ScrollView>
  );
}