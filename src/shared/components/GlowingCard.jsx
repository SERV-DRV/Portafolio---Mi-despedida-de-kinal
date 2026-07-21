import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withSpring, 
    withTiming, 
    interpolateColor
} from 'react-native-reanimated';
import { COLORS } from '../constants/theme';

export default function GlowingCard({ children, style, onPress, glowColor = COLORS.primary }) {
    const isHovered = useSharedValue(0);
    const scale = useSharedValue(1);

    const handleHoverIn = () => {
        if (Platform.OS === 'web') {
            isHovered.value = withTiming(1, { duration: 300 });
            scale.value = withSpring(1.02, { damping: 15, stiffness: 200 });
        }
    };

    const handleHoverOut = () => {
        if (Platform.OS === 'web') {
            isHovered.value = withTiming(0, { duration: 300 });
            scale.value = withSpring(1, { damping: 15, stiffness: 200 });
        }
    };

    const handlePressIn = () => {
        scale.value = withSpring(0.98, { damping: 15, stiffness: 300 });
        isHovered.value = withTiming(1, { duration: 150 });
    };

    const handlePressOut = () => {
        scale.value = withSpring(1, { damping: 15, stiffness: 200 });
        isHovered.value = withTiming(0, { duration: 300 });
    };

    const animatedStyle = useAnimatedStyle(() => {
        const borderColor = interpolateColor(
            isHovered.value,
            [0, 1],
            ['rgba(100, 255, 218, 0.1)', glowColor]
        );

        const shadowOpacity = isHovered.value * 0.4;

        return {
            transform: [{ scale: scale.value }],
            borderColor: borderColor,
            shadowColor: glowColor,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: shadowOpacity,
            shadowRadius: 15,
            elevation: isHovered.value * 10, // For Android
        };
    });

    return (
        <Pressable 
            onPress={onPress}
            onHoverIn={handleHoverIn}
            onHoverOut={handleHoverOut}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[styles.container, style, Platform.OS === 'web' && { cursor: onPress ? 'pointer' : 'default' }]}
        >
            <Animated.View style={[styles.card, animatedStyle]}>
                {children}
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 16,
        padding: 24,
        borderWidth: 1,
        overflow: 'hidden',
    }
});
