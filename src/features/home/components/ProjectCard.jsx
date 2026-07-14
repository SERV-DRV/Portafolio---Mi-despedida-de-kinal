import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

const ProjectCard = ({ project, onPress }) => {
    const scale = useSharedValue(1);

    const handlePressIn = () => {
        scale.value = withSpring(0.97, { damping: 15 });
    };

    const handlePressOut = () => {
        scale.value = withSpring(1, { damping: 15 });
    };

    const animatedImageStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <Pressable 
            style={styles.card}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <View style={[styles.imageContainer, { alignItems: 'center', justifyContent: 'center' }]}>
                <Animated.View style={animatedImageStyle}>
                    <FontAwesome5 name={project.icon || "code"} size={64} color={COLORS.info} />
                </Animated.View>
            </View>
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>{project.name}</Text>
                <Text style={styles.description}>{project.description}</Text>
                
                <View style={styles.footer}>
                    <MaterialIcons name="language" size={24} color={COLORS.info} />
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: SPACING.md, 
        flex: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    imageContainer: {
        width: "100%",
        height: 220,
        backgroundColor: COLORS.surfaceVariant,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    content: {
        padding: SPACING.lg,
    },
    name: {
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold", 
        color: COLORS.text, 
        marginBottom: SPACING.xs,
        letterSpacing: -0.5,
    },
    description: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textLight,
        lineHeight: 22,
        marginBottom: SPACING.md,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SPACING.xs,
    }
});

export default ProjectCard;
