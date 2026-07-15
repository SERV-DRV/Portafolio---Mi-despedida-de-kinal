import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SPACING, FONT_SIZE } from "../src/shared/constants/theme";

export default function AboutScreen() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>About Me</Text>
                
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quién Soy</Text>
                    <Text style={styles.text}>
                        Soy un desarrollador de software apasionado por crear experiencias digitales excepcionales. 
                        Me especializo en desarrollo front-end con un enfoque en interfaces intuitivas y diseño centrado en el usuario.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Mi Enfoque</Text>
                    <Text style={styles.text}>
                        Creo que el buen software no solo funciona bien, sino que se siente bien de usar. 
                        Me dedico a escribir código limpio, mantenible y a crear interfaces que deleiten a los usuarios.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experiencia</Text>
                    <View style={styles.experienceItem}>
                        <Text style={styles.experienceTitle}>Desarrollador Front-End</Text>
                        <Text style={styles.experienceDate}>2021 - Presente</Text>
                        <Text style={styles.experienceDesc}>
                            Desarrollo de aplicaciones web y móviles con tecnologías modernas.
                        </Text>
                    </View>
                    <View style={styles.experienceItem}>
                        <Text style={styles.experienceTitle}>Desarrollador Junior</Text>
                        <Text style={styles.experienceDate}>2019 - 2021</Text>
                        <Text style={styles.experienceDesc}>
                            Inicio en desarrollo web, trabajando en diversos proyectos.
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Educación</Text>
                    <View style={styles.educationItem}>
                        <Text style={styles.educationTitle}>Ingeniería de Software</Text>
                        <Text style={styles.educationDate}>2015 - 2019</Text>
                        <Text style={styles.educationDesc}>
                            Universidad de tu ciudad
                        </Text>
                    </View>
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
    text: {
        fontSize: 18,
        color: COLORS.textLight,
        lineHeight: 28,
    },
    experienceItem: {
        marginBottom: SPACING.lg,
        backgroundColor: COLORS.surface,
        padding: SPACING.lg,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    experienceTitle: {
        fontSize: 20,
        fontWeight: "800",
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    experienceDate: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: "600",
        marginBottom: SPACING.sm,
    },
    experienceDesc: {
        fontSize: 16,
        color: COLORS.textLight,
        lineHeight: 24,
    },
    educationItem: {
        marginBottom: SPACING.lg,
        backgroundColor: COLORS.surface,
        padding: SPACING.lg,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    educationTitle: {
        fontSize: 20,
        fontWeight: "800",
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    educationDate: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: "600",
        marginBottom: SPACING.sm,
    },
    educationDesc: {
        fontSize: 16,
        color: COLORS.textLight,
    },
});
