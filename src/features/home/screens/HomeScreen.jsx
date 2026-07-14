import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";
import ProjectList from "../components/ProjectList";

const HomeScreen = ({ navigation }) => {
    const projects = [
        { id: 1, name: "Domposer", description: "Music composition app" },
        { id: 2, name: "Cookiemunch", description: "Cookie recipe manager" },
        { id: 3, name: "Screen time converter", description: "Time conversion tool" },
        { id: 4, name: "LED multi", description: "LED controller app" },
        { id: 5, name: "inline.svg", description: "SVG optimization tool" },
    ];

    const handleProjectPress = (project) => {
        navigation.navigate("ProjectDetail", { project });
    };

    const handleSocialPress = (url) => {
        Linking.openURL(url);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.socialIcons}>
                    <TouchableOpacity onPress={() => handleSocialPress("mailto:your@email.com")}>
                        <Text style={styles.socialIcon}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSocialPress("https://github.com/yourusername")}>
                        <Text style={styles.socialIcon}>GH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSocialPress("https://linkedin.com/in/yourusername")}>
                        <Text style={styles.socialIcon}>LI</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeText}>Welcome.</Text>
                    <Text style={styles.description}>
                        Soy un desarrollador apasionado por crear interfaces intuitivas y experiencias de usuario excepcionales. 
                        Ubicado en tu ciudad, con experiencia en desarrollo front-end y un enfoque en el diseño centrado en el usuario.
                    </Text>
                </View>

                <View style={styles.projectsSection}>
                    <Text style={styles.projectsTitle}>Projects</Text>
                    <ProjectList projects={projects} onProjectPress={handleProjectPress} />
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>©2024 tuportafolio.com</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: SPACING.lg,
    },
    socialIcons: {
        flexDirection: "row",
        gap: SPACING.md,
    },
    socialIcon: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
    },
    content: {
        padding: SPACING.xl,
    },
    welcomeSection: {
        marginBottom: SPACING.xxl,
    },
    welcomeText: {
        fontSize: FONT_SIZE.huge,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: SPACING.lg,
    },
    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        lineHeight: 24,
    },
    projectsSection: {
        marginTop: SPACING.xxl,
    },
    projectsTitle: {
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: SPACING.lg,
    },
    footer: {
        padding: SPACING.lg,
        alignItems: "flex-end",
    },
    footerText: {
        color: COLORS.textMuted,
        fontSize: FONT_SIZE.sm,
    },
});

export default HomeScreen;
