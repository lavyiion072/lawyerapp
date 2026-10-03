import { View, Text, Pressable } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-gray-50 items-center justify-center p-6">
      <View className="w-20 h-20 bg-indigo-100 rounded-full items-center justify-center mb-4"><Text className="text-3xl">👤</Text></View>
      <Text className="text-xl font-bold text-gray-900 mb-1">User Name</Text>
      <Text className="text-gray-500 mb-8">user@example.com</Text>
      <Pressable className="bg-indigo-600 px-8 py-3 rounded-xl mb-3 w-full"><Text className="text-white text-center font-semibold">Edit Profile</Text></Pressable>
    </View>
  );
}