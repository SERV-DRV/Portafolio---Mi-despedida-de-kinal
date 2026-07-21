import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Platform, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../../src/shared/constants/theme';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarBackground: () => (
                    <BlurView 
                        tint="dark" 
                        intensity={Platform.OS === 'web' ? 50 : 80} 
                        style={StyleSheet.absoluteFill} 
                    />
                ),
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.textMuted,
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="projects"
                options={{
                    title: 'Projects',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="code" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="skills"
                options={{
                    title: 'Skills',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="layer-group" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-astronaut" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: 'Contact',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="paper-plane" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: Platform.OS === 'web' ? 30 : 20,
        alignSelf: 'center',
        width: Platform.OS === 'web' ? 400 : '90%',
        marginHorizontal: Platform.OS === 'web' ? 'auto' : '5%',
        height: 65,
        borderRadius: 35,
        backgroundColor: 'rgba(10, 25, 47, 0.4)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(100, 255, 218, 0.2)',
        borderWidth: 1,
        borderColor: 'rgba(100, 255, 218, 0.1)',
        elevation: 10,
        overflow: 'hidden',
    }
});
