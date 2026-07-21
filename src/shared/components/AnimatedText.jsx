import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withTiming, 
    withDelay, 
    withSpring 
} from 'react-native-reanimated';
import { COLORS, FONT_SIZE } from '../constants/theme';

export default function AnimatedText({ 
    text, 
    style, 
    delay = 0, 
    duration = 500,
    type = 'fade-up' // 'fade-up', 'typewriter', 'stagger'
}) {
    if (type === 'fade-up') {
        const translateY = useSharedValue(20);
        const opacity = useSharedValue(0);

        useEffect(() => {
            translateY.value = withDelay(delay, withSpring(0, { damping: 12, stiffness: 90 }));
            opacity.value = withDelay(delay, withTiming(1, { duration }));
        }, [delay]);

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ translateY: translateY.value }],
            opacity: opacity.value,
        }));

        return (
            <Animated.Text style={[styles.defaultText, style, animatedStyle]}>
                {text}
            </Animated.Text>
        );
    }

    if (type === 'stagger') {
        const words = text.split(' ');
        
        return (
            <View style={[styles.row, style]}>
                {words.map((word, index) => {
                    const wordTranslateY = useSharedValue(20);
                    const wordOpacity = useSharedValue(0);

                    useEffect(() => {
                        const wordDelay = delay + index * 100;
                        wordTranslateY.value = withDelay(wordDelay, withSpring(0, { damping: 12, stiffness: 90 }));
                        wordOpacity.value = withDelay(wordDelay, withTiming(1, { duration: 300 }));
                    }, [delay]);

                    const wordStyle = useAnimatedStyle(() => ({
                        transform: [{ translateY: wordTranslateY.value }],
                        opacity: wordOpacity.value,
                    }));

                    return (
                        <Animated.Text key={index} style={[styles.defaultText, style, wordStyle, { marginRight: 8 }]}>
                            {word}
                        </Animated.Text>
                    );
                })}
            </View>
        );
    }

    return <Text style={[styles.defaultText, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
    defaultText: {
        color: COLORS.text,
        fontSize: FONT_SIZE.md,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
