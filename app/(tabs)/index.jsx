import React from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SPACING, FONT_SIZE } from "../../src/shared/constants/theme";
import { personalInfo } from "../../src/data/portfolioData";
import GlowBackground from "../../src/shared/components/GlowBackground";
import AnimatedText from "../../src/shared/components/AnimatedText";
import GlowingCard from "../../src/shared/components/GlowingCard";

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <GlowBackground />
            
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.heroSection}>
                    <AnimatedText 
                        text="Hola, soy"
                        style={styles.greeting}
                        delay={300}
                    />
                    
                    <AnimatedText 
                        text={personalInfo.name}
                        style={styles.name}
                        delay={500}
                        type="stagger"
                    />

                    <AnimatedText 
                        text={personalInfo.role}
                        style={styles.role}
                        delay={1000}
                        type="stagger"
                    />

                    <AnimatedText 
                        text={personalInfo.bio}
                        style={styles.bio}
                        delay={1500}
                    />

                    <View style={styles.buttonContainer}>
                        <GlowingCard 
                            style={styles.mainButton}
                            onPress={() => router.push('/projects')}
                        >
                            <View style={styles.buttonContent}>
                                <FontAwesome5 name="code" size={20} color={COLORS.primary} style={styles.buttonIcon} />
                                <AnimatedText text="Ver Proyectos" style={styles.buttonText} delay={1800} />
                            </View>
                        </GlowingCard>

                        <GlowingCard 
                            style={styles.secondaryButton}
                            glowColor={COLORS.secondary}
                            onPress={() => router.push('/contact')}
                        >
                            <View style={styles.buttonContent}>
                                <FontAwesome5 name="paper-plane" size={20} color={COLORS.text} style={styles.buttonIcon} />
                                <AnimatedText text="Contactar" style={styles.secondaryButtonText} delay={2000} />
                            </View>
                        </GlowingCard>
                    </View>
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
        justifyContent: 'center',
        paddingHorizontal: Platform.OS === 'web' ? '15%' : SPACING.lg,
        paddingBottom: 100, // Space for the floating dock
    },
    heroSection: {
        maxWidth: 800,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    greeting: {
        color: COLORS.primary,
        fontFamily: 'monospace',
        fontSize: FONT_SIZE.lg,
        marginBottom: SPACING.md,
    },
    name: {
        color: COLORS.text,
        fontSize: Platform.OS === 'web' ? FONT_SIZE.giant : 40,
        fontWeight: 'bold',
        marginBottom: SPACING.sm,
    },
    role: {
        color: COLORS.textMuted,
        fontSize: Platform.OS === 'web' ? FONT_SIZE.huge : 28,
        fontWeight: 'bold',
        marginBottom: SPACING.xl,
    },
    bio: {
        color: COLORS.textMuted,
        fontSize: FONT_SIZE.lg,
        lineHeight: 28,
        maxWidth: 600,
        marginBottom: SPACING.xxl,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.lg,
    },
    mainButton: {
        width: Platform.OS === 'web' ? 220 : '100%',
        marginBottom: Platform.OS === 'web' ? 0 : SPACING.md,
    },
    secondaryButton: {
        width: Platform.OS === 'web' ? 220 : '100%',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        marginRight: SPACING.sm,
    },
    buttonText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: FONT_SIZE.md,
    },
    secondaryButtonText: {
        color: COLORS.text,
        fontWeight: 'bold',
        fontSize: FONT_SIZE.md,
    }
});
