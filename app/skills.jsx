import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SPACING, FONT_SIZE } from "../src/shared/constants/theme";

export default function SkillsScreen() {
    const router = useRouter();

    const frontendSkills = [
        { name: "React Native", level: 90 },
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "HTML/CSS", level: 95 },
    ];

    const backendSkills = [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "MongoDB", level: 60 },
        { name: "PostgreSQL", level: 55 },
    ];

    const toolsSkills = [
        { name: "Git", level: 85 },
        { name: "Docker", level: 50 },
        { name: "Figma", level: 70 },
        { name: "VS Code", level: 90 },
    ];

    const SkillBar = ({ name, level }) => (
        <View style={styles.skillItem}>
            <View style={styles.skillHeader}>
                <Text style={styles.skillName}>{name}</Text>
                <Text style={styles.skillLevel}>{level}%</Text>
            </View>
            <View style={styles.skillBarBackground}>
                <View style={[styles.skillBarFill, { width: `${level}%` }]} />
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Skills</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Frontend</Text>
                    {frontendSkills.map((skill, index) => (
                        <SkillBar key={index} name={skill.name} level={skill.level} />
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Backend</Text>
                    {backendSkills.map((skill, index) => (
                        <SkillBar key={index} name={skill.name} level={skill.level} />
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Herramientas</Text>
                    {toolsSkills.map((skill, index) => (
                        <SkillBar key={index} name={skill.name} level={skill.level} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        padding: SPACING.lg,
        paddingTop: SPACING.xl * 2,
    },
    backButton: {
        alignSelf: "flex-start",
        backgroundColor: COLORS.surface,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    backButtonText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.md,
        fontWeight: "700",
    },
    content: {
        padding: SPACING.xl,
    },
    title: {
        fontSize: 48,
        fontWeight: "900",
        color: COLORS.text,
        marginBottom: SPACING.xl,
        letterSpacing: -1,
    },
    section: {
        marginBottom: SPACING.xl * 1.5,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: "800",
        color: COLORS.primary,
        marginBottom: SPACING.lg,
        letterSpacing: -0.5,
    },
    skillItem: {
        marginBottom: SPACING.lg,
        backgroundColor: COLORS.surface,
        padding: SPACING.lg,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    skillHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: SPACING.md,
    },
    skillName: {
        fontSize: 18,
        color: COLORS.text,
        fontWeight: "700",
    },
    skillLevel: {
        fontSize: 18,
        color: COLORS.primary,
        fontWeight: "800",
    },
    skillBarBackground: {
        height: 12,
        backgroundColor: COLORS.background,
        borderRadius: 6,
        overflow: "hidden",
    },
    skillBarFill: {
        height: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: 6,
    },
});
