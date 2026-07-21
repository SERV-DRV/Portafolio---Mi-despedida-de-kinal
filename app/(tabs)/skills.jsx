import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Animated as RNAnimated } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../src/shared/constants/theme";
import { skills, softSkills } from "../../src/data/portfolioData";
import GlowBackground from "../../src/shared/components/GlowBackground";
import AnimatedText from "../../src/shared/components/AnimatedText";
import GlowingCard from "../../src/shared/components/GlowingCard";
import { FontAwesome5 } from "@expo/vector-icons";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from "react-native-reanimated";

const SkillBar = ({ skill, index }) => {
    const widthAnim = useSharedValue(0);

    useEffect(() => {
        widthAnim.value = withDelay(500 + (index * 100), withTiming(skill.percentage, { duration: 1000 }));
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        width: `${widthAnim.value}%`
    }));

    return (
        <GlowingCard style={styles.skillItem} glowColor={skill.color || COLORS.primary}>
            <View style={styles.skillHeader}>
                <View style={styles.skillTitleGroup}>
                    <FontAwesome5 name={skill.icon} size={20} color={skill.color || COLORS.primary} style={styles.skillIcon} />
                    <Text style={styles.skillName}>{skill.name}</Text>
                </View>
                <Text style={[styles.skillLevel, { color: skill.color || COLORS.primary }]}>{skill.percentage}%</Text>
            </View>
            <View style={styles.skillBarBackground}>
                <Animated.View style={[styles.skillBarFill, { backgroundColor: skill.color || COLORS.primary }, animatedStyle]} />
            </View>
        </GlowingCard>
    );
};

export default function SkillsScreen() {
    return (
        <View style={styles.container}>
            <GlowBackground />
            
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <AnimatedText 
                    text="Habilidades"
                    style={styles.title}
                    delay={100}
                />

                <AnimatedText 
                    text="Tecnologías y herramientas que domino"
                    style={styles.sectionTitle}
                    delay={200}
                />

                <View style={styles.grid}>
                    {skills.map((skill, index) => (
                        <View key={index} style={styles.cardWrapper}>
                            <SkillBar skill={skill} index={index} />
                        </View>
                    ))}
                </View>

                <AnimatedText 
                    text="Habilidades Blandas"
                    style={styles.sectionTitle}
                    delay={800}
                />

                <View style={styles.grid}>
                    {softSkills.map((skill, index) => (
                        <View key={index} style={styles.cardWrapper}>
                            <GlowingCard glowColor={COLORS.secondary}>
                                <View style={styles.softSkillHeader}>
                                    <FontAwesome5 name={skill.icon} size={24} color={COLORS.primary} style={styles.skillIcon} />
                                    <Text style={styles.skillName}>{skill.name}</Text>
                                </View>
                                <Text style={styles.softSkillDesc}>{skill.description}</Text>
                            </GlowingCard>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: Platform.OS === 'web' ? '10%' : SPACING.lg,
        paddingTop: Platform.OS === 'web' ? 80 : 60,
        paddingBottom: 120,
    },
    title: {
        fontSize: Platform.OS === 'web' ? 48 : 36,
        fontWeight: "900",
        color: COLORS.text,
        marginBottom: SPACING.xl,
        letterSpacing: -1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: COLORS.primary,
        marginBottom: SPACING.lg,
        marginTop: SPACING.lg,
        fontFamily: 'monospace',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.lg,
        justifyContent: 'space-between',
    },
    cardWrapper: {
        width: Platform.OS === 'web' ? '48%' : '100%',
        marginBottom: SPACING.md,
    },
    skillItem: {
        width: '100%',
    },
    skillHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SPACING.md,
    },
    skillTitleGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    skillIcon: {
        marginRight: SPACING.md,
    },
    skillName: {
        fontSize: 18,
        color: COLORS.text,
        fontWeight: "700",
    },
    skillLevel: {
        fontSize: 18,
        fontWeight: "800",
    },
    skillBarBackground: {
        height: 8,
        backgroundColor: COLORS.surfaceVariant,
        borderRadius: 4,
        overflow: "hidden",
    },
    skillBarFill: {
        height: "100%",
        borderRadius: 4,
    },
    softSkillHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.sm,
    },
    softSkillDesc: {
        color: COLORS.textLight,
        lineHeight: 22,
    }
});
