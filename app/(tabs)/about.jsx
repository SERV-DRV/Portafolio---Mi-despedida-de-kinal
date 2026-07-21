import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../src/shared/constants/theme";
import { personalInfo } from "../../src/data/portfolioData";
import GlowBackground from "../../src/shared/components/GlowBackground";
import AnimatedText from "../../src/shared/components/AnimatedText";
import GlowingCard from "../../src/shared/components/GlowingCard";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <GlowBackground />
            
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <AnimatedText 
                    text="Sobre Mí"
                    style={styles.title}
                    delay={100}
                />
                
                <View style={styles.section}>
                    <AnimatedText 
                        text="Quién Soy"
                        style={styles.sectionTitle}
                        delay={300}
                    />
                    <GlowingCard glowColor={COLORS.primary}>
                        <Text style={styles.text}>
                            {personalInfo.bio || "Soy un desarrollador apasionado por crear experiencias digitales excepcionales. Me especializo en construir interfaces modernas y robustas."}
                        </Text>
                    </GlowingCard>
                </View>

                <View style={styles.section}>
                    <AnimatedText 
                        text="Mi Enfoque"
                        style={styles.sectionTitle}
                        delay={500}
                    />
                    <GlowingCard glowColor={COLORS.secondary}>
                        <Text style={styles.text}>
                            Creo que el buen software no solo debe funcionar bien, sino también ser increíblemente estético. 
                            Me dedico a escribir código limpio y a diseñar interfaces que cautiven al usuario desde el primer segundo.
                        </Text>
                    </GlowingCard>
                </View>

                <View style={styles.section}>
                    <AnimatedText 
                        text="Educación & Experiencia"
                        style={styles.sectionTitle}
                        delay={700}
                    />
                    <GlowingCard glowColor={COLORS.primary}>
                        <View style={styles.timelineItem}>
                            <Text style={styles.timelineTitle}>{personalInfo.education || "Ingeniería de Software"}</Text>
                            <Text style={styles.timelineDate}>Presente</Text>
                            <Text style={styles.text}>
                                Formación continua en las mejores tecnologías del mercado, siempre buscando llevar la innovación al código.
                            </Text>
                        </View>
                    </GlowingCard>
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
        paddingBottom: 120, // Space for dock
    },
    title: {
        fontSize: Platform.OS === 'web' ? 48 : 36,
        fontWeight: "900",
        color: COLORS.text,
        marginBottom: SPACING.xl,
        letterSpacing: -1,
    },
    section: {
        marginBottom: SPACING.xl,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: COLORS.primary,
        marginBottom: SPACING.md,
        fontFamily: 'monospace',
    },
    text: {
        fontSize: 18,
        color: COLORS.textLight,
        lineHeight: 28,
    },
    timelineItem: {
        flexDirection: 'column',
    },
    timelineTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    timelineDate: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: "bold",
        marginBottom: SPACING.sm,
        fontFamily: 'monospace',
    },
});
