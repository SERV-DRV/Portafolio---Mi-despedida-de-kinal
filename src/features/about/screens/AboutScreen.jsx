import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";

const AboutScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
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
};

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
        marginBottom: SPACING.md,
    },
    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        lineHeight: 24,
    },
    experienceItem: {
        marginBottom: SPACING.lg,
        paddingLeft: SPACING.md,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.primary,
    },
    experienceTitle: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    experienceDate: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.primary,
        marginBottom: SPACING.sm,
    },
    experienceDesc: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        lineHeight: 22,
    },
    educationItem: {
        marginBottom: SPACING.lg,
    },
    educationTitle: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    educationDate: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.primary,
        marginBottom: SPACING.sm,
    },
    educationDesc: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
    },
});

export default AboutScreen;
