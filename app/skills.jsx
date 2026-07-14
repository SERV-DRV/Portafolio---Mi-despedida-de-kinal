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
    },
    backButton: {
        alignSelf: "flex-start",
    },
    backButtonText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
    },
    content: {
        padding: SPACING.xl,
    },
    title: {
        fontSize: FONT_SIZE.huge,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: SPACING.xl,
    },
    section: {
        marginBottom: SPACING.xl,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: SPACING.lg,
    },
    skillItem: {
        marginBottom: SPACING.lg,
    },
    skillHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: SPACING.xs,
    },
    skillName: {
        fontSize: FONT_SIZE.md,
        color: COLORS.text,
        fontWeight: "500",
    },
    skillLevel: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "bold",
    },
    skillBarBackground: {
        height: 8,
        backgroundColor: COLORS.surfaceVariant,
        borderRadius: 4,
        overflow: "hidden",
    },
    skillBarFill: {
        height: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: 4,
    },
});
