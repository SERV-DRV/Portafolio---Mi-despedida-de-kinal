import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Animated } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const ProjectCard = ({ project, onPress }) => {
    const translateYAnim = useRef(new Animated.Value(0)).current;
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverIn = () => {
        setIsHovered(true);
        Animated.spring(translateYAnim, {
            toValue: -5,
            useNativeDriver: true,
        }).start();
    };

    const handleHoverOut = () => {
        setIsHovered(false);
        Animated.spring(translateYAnim, {
            toValue: 0,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable 
            onHoverIn={handleHoverIn}
            onHoverOut={handleHoverOut}
            onPress={onPress}
        >
            <Animated.View style={[
                styles.card, 
                { transform: [{ translateY: translateYAnim }] },
                isHovered && styles.cardHovered
            ]}>
                <View style={styles.header}>
                    <FontAwesome5 name="folder" size={40} color={COLORS.primary} />
                    <View style={styles.yearBadge}>
                        <Text style={styles.yearText}>{project.year}</Text>
                    </View>
                </View>

                <Text style={styles.name} numberOfLines={1}>{project.name}</Text>
                <Text style={styles.description} numberOfLines={4}>{project.description}</Text>
                
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={styles.techScroll}
                    contentContainerStyle={styles.techContainer}
                >
                    {project.technologies?.slice(0, 4).map((tech, index) => (
                        <Text key={index} style={styles.techText}>{tech}</Text>
                    ))}
                </ScrollView>
                
                <View style={styles.footer}>
                    <MaterialIcons name="arrow-forward" size={16} color={COLORS.primary} />
                    <Text style={styles.footerText}>Ver proyecto</Text>
                </View>
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 8,
        padding: SPACING.xl,
        justifyContent: 'space-between',
        shadowColor: '#020c1b',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    cardHovered: {
        borderColor: COLORS.primary,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SPACING.lg,
    },
    yearBadge: {
        backgroundColor: COLORS.surfaceVariant,
        paddingHorizontal: SPACING.sm,
        paddingVertical: 4,
        borderRadius: 4,
    },
    yearText: {
        fontSize: FONT_SIZE.xs,
        fontFamily: 'monospace',
        color: COLORS.primary,
    },
    name: {
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold", 
        color: COLORS.text, 
        marginBottom: SPACING.sm,
    },
    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        lineHeight: 24,
        marginBottom: SPACING.xl,
    },
    techScroll: {
        marginBottom: SPACING.md,
    },
    techContainer: {
        gap: SPACING.md,
    },
    techText: {
        fontSize: FONT_SIZE.xs,
        fontFamily: 'monospace',
        color: COLORS.textMuted,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.xs,
        marginTop: 'auto',
    },
    footerText: {
        fontSize: FONT_SIZE.sm,
        fontFamily: 'monospace',
        color: COLORS.primary,
    }
});

export default ProjectCard;
