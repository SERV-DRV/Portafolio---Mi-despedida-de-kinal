import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from "../../../shared/constants/theme";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const ProjectCard = ({ project, onPress }) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableWithoutFeedback 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={onPress}
        >
            <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
                <View style={styles.imageContainer}>
                    <LinearGradient
                        colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                        style={styles.gradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <FontAwesome5 name={project.icon || "code"} size={72} color={COLORS.text} />
                        
                        {/* Overlay to give a bit of depth */}
                        <LinearGradient
                            colors={['transparent', COLORS.surface]}
                            style={StyleSheet.absoluteFill}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 0, y: 1 }}
                        />
                    </LinearGradient>
                </View>
                <View style={styles.content}>
                    <View style={styles.headerRow}>
                        <Text style={styles.name} numberOfLines={1}>{project.name}</Text>
                        <View style={styles.yearBadge}>
                            <Text style={styles.yearText}>{project.year}</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{project.description}</Text>
                    
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        style={styles.techScroll}
                        contentContainerStyle={styles.techContainer}
                    >
                        {project.technologies?.slice(0, 4).map((tech, index) => (
                            <View key={index} style={styles.techBadge}>
                                <Text style={styles.techText}>{tech}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    
                    <View style={styles.footer}>
                        <MaterialIcons name="arrow-forward" size={20} color={COLORS.primary} />
                        <Text style={styles.footerText}>Ver proyecto</Text>
                    </View>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 24,
        overflow: "hidden",
        marginBottom: SPACING.md, 
        borderWidth: 1,
        borderColor: COLORS.border,
        ...SHADOWS.glass,
    },
    imageContainer: {
        width: "100%",
        height: 180,
    },
    gradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        padding: SPACING.lg,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SPACING.sm,
    },
    name: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: "800", 
        color: COLORS.text, 
        letterSpacing: -0.5,
        flex: 1,
    },
    yearBadge: {
        backgroundColor: 'rgba(255, 0, 127, 0.15)', // Neon pink translucent
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        borderRadius: 8,
        marginLeft: SPACING.sm,
        borderWidth: 1,
        borderColor: 'rgba(255, 0, 127, 0.3)',
    },
    yearText: {
        fontSize: FONT_SIZE.sm,
        fontWeight: "800",
        color: COLORS.secondary,
    },
    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        lineHeight: 24,
        marginBottom: SPACING.md,
    },
    techScroll: {
        marginBottom: SPACING.md,
    },
    techContainer: {
        gap: SPACING.sm,
    },
    techBadge: {
        backgroundColor: COLORS.surfaceVariant,
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    techText: {
        fontSize: FONT_SIZE.sm,
        fontWeight: "600",
        color: COLORS.primaryLight,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.xs,
        marginTop: SPACING.xs,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        fontWeight: "700",
        color: COLORS.primary,
        textTransform: 'uppercase',
        letterSpacing: 1,
    }
});

export default ProjectCard;
