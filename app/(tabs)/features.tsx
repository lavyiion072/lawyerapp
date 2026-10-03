import { View, Text, Pressable, ScrollView } from 'react-native';

export default function FeaturesScreen() {
  const features = [
          <Pressable key={0} className="bg-white rounded-2xl p-4 shadow-sm mb-3 flex-row items-center gap-4">
            <View className="rounded-xl p-3" style={{ backgroundColor: '#F5F3FF' }}><Text className="text-2xl">⚖️</Text></View>
            <View className="flex-1"><Text className="font-semibold text-gray-900">Legal Advice</Text><Text className="text-sm text-gray-500">Consult expert lawyers</Text></View>
          </Pressable>
          <Pressable key={1} className="bg-white rounded-2xl p-4 shadow-sm mb-3 flex-row items-center gap-4">
            <View className="rounded-xl p-3" style={{ backgroundColor: '#EEF2FF' }}><Text className="text-2xl">📋</Text></View>
            <View className="flex-1"><Text className="font-semibold text-gray-900">Case Tracking</Text><Text className="text-sm text-gray-500">Track your cases</Text></View>
          </Pressable>
          <Pressable key={2} className="bg-white rounded-2xl p-4 shadow-sm mb-3 flex-row items-center gap-4">
            <View className="rounded-xl p-3" style={{ backgroundColor: '#ECFDF5' }}><Text className="text-2xl">📄</Text></View>
            <View className="flex-1"><Text className="font-semibold text-gray-900">Documents</Text><Text className="text-sm text-gray-500">Upload legal documents</Text></View>
          </Pressable>
          <Pressable key={3} className="bg-white rounded-2xl p-4 shadow-sm mb-3 flex-row items-center gap-4">
            <View className="rounded-xl p-3" style={{ backgroundColor: '#FFFBEB' }}><Text className="text-2xl">💬</Text></View>
            <View className="flex-1"><Text className="font-semibold text-gray-900">Chat</Text><Text className="text-sm text-gray-500">Message your lawyer</Text></View>
          </Pressable>
  ];
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 pt-12">
        <Text className="text-2xl font-bold text-gray-900 mb-4">Legal Advice &amp; More</Text>
        <Text className="text-gray-500 mb-6">Everything you need in your LawyerApp experience.</Text>
        {features.map(function(f, i) {
          return (
            <Pressable key={i} className="bg-white rounded-2xl p-4 shadow-sm mb-3 flex-row items-center gap-4">
              <View className="rounded-xl p-3" style={{ backgroundColor: f.color }}><Text className="text-2xl">{f.icon}</Text></View>
              <View className="flex-1"><Text className="font-semibold text-gray-900">{f.title}</Text><Text className="text-sm text-gray-500">{f.desc}</Text></View>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}