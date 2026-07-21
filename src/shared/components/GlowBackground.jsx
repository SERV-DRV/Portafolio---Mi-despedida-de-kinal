import React, { useEffect } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    withRepeat, 
    withTiming, 
    withSequence,
    Easing
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';

export default function GlowBackground() {
    const { width, height } = useWindowDimensions();
    
    const blob1X = useSharedValue(0);
    const blob1Y = useSharedValue(0);
    
    const blob2X = useSharedValue(0);
    const blob2Y = useSharedValue(0);

    useEffect(() => {
        blob1X.value = withRepeat(
            withSequence(
                withTiming(100, { duration: 10000, easing: Easing.inOut(Easing.ease) }),
                withTiming(-50, { duration: 8000, easing: Easing.inOut(Easing.ease) }),
                withTiming(0, { duration: 10000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            true
        );

        blob1Y.value = withRepeat(
            withSequence(
                withTiming(50, { duration: 12000, easing: Easing.inOut(Easing.ease) }),
                withTiming(-100, { duration: 9000, easing: Easing.inOut(Easing.ease) }),
                withTiming(0, { duration: 11000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            true
        );

        blob2X.value = withRepeat(
            withSequence(
                withTiming(-100, { duration: 11000, easing: Easing.inOut(Easing.ease) }),
                withTiming(80, { duration: 10000, easing: Easing.inOut(Easing.ease) }),
                withTiming(0, { duration: 9000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            true
        );

        blob2Y.value = withRepeat(
            withSequence(
                withTiming(-80, { duration: 9000, easing: Easing.inOut(Easing.ease) }),
                withTiming(100, { duration: 12000, easing: Easing.inOut(Easing.ease) }),
                withTiming(0, { duration: 10000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            true
        );
    }, []);

    const animatedStyle1 = useAnimatedStyle(() => ({
        transform: [{ translateX: blob1X.value }, { translateY: blob1Y.value }],
    }));

    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [{ translateX: blob2X.value }, { translateY: blob2Y.value }],
    }));

    return (
        <View style={styles.container} pointerEvents="none">
            <Animated.View style={[styles.blob, styles.blob1, animatedStyle1]}>
                <LinearGradient
                    colors={[COLORS.primaryDark, 'transparent']}
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                />
            </Animated.View>
            
            <Animated.View style={[styles.blob, styles.blob2, animatedStyle2]}>
                <LinearGradient
                    colors={['#8892b0', 'transparent']}
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                />
            </Animated.View>
            <View style={styles.overlay} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLORS.background,
        overflow: 'hidden',
        zIndex: -1,
    },
    blob: {
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: 300,
        opacity: 0.15,
        filter: 'blur(100px)', // Web only natively, but opacity gives the illusion elsewhere
    },
    blob1: {
        top: '-10%',
        left: '-10%',
    },
    blob2: {
        bottom: '-10%',
        right: '-10%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(10, 25, 47, 0.7)', // Adds a dark tint over the blobs
    }
});
