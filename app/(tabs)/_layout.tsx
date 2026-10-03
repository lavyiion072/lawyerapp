import { Tabs } from 'expo-router';
import { Home, Star, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#7C3AED', headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'LawyerApp', tabBarIcon: ({ color, size }) => <Home size={size} color={color} /> }} />
      <Tabs.Screen name="features" options={{ title: 'Features', tabBarIcon: ({ color, size }) => <Star size={size} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color, size }) => <User size={size} color={color} /> }} />
    </Tabs>
  );
}