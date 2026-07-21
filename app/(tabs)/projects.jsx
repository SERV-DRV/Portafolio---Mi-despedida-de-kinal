import React from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SPACING, FONT_SIZE } from "../../src/shared/constants/theme";
import { projects } from "../../src/data/portfolioData";
import GlowBackground from "../../src/shared/components/GlowBackground";
import AnimatedText from "../../src/shared/components/AnimatedText";
import ProjectCard from "../../src/features/home/components/ProjectCard";

export default function Projects() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <GlowBackground />
            
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <AnimatedText 
                    text="Mis Proyectos"
                    style={styles.title}
                    delay={100}
                />
                
                <AnimatedText 
                    text="Una colección de aplicaciones y sistemas construidos con pasión."
                    style={styles.subtitle}
                    delay={300}
                />

                <View style={styles.grid}>
                    {projects.map((project, index) => (
                        <View key={project.id} style={styles.cardWrapper}>
                            <ProjectCard 
                                project={project}
                                onPress={() => router.push(`/project/${project.id}`)}
                            />
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
        paddingBottom: 120, // Space for dock
    },
    title: {
        fontSize: Platform.OS === 'web' ? 48 : 36,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.primary,
        fontFamily: 'monospace',
        marginBottom: SPACING.xxl,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.lg,
        justifyContent: 'space-between',
    },
    cardWrapper: {
        width: Platform.OS === 'web' ? '48%' : '100%',
        marginBottom: Platform.OS === 'web' ? SPACING.lg : SPACING.md,
    }
});
