import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";
import CustomModal from "../../../shared/components/Modal";

const ProjectDetailScreen = ({ route, navigation }) => {
    const { project } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    const projectDetails = {
        1: {
            name: "Domposer",
            description: "Music composition app",
            fullDescription: "Domposer es una aplicación de composición musical que permite a los usuarios crear, editar y compartir composiciones musicales de manera intuitiva.",
            technologies: ["React Native", "Redux", "Audio API"],
            year: "2023",
            link: "https://github.com/yourusername/domposer",
        },
        2: {
            name: "Cookiemunch",
            description: "Cookie recipe manager",
            fullDescription: "Cookiemunch es un gestor de recetas de cookies que permite organizar, compartir y descubrir nuevas recetas de cookies de todo el mundo.",
            technologies: ["React", "Node.js", "MongoDB"],
            year: "2023",
            link: "https://github.com/yourusername/cookiemunch",
        },
        3: {
            name: "Screen time converter",
            description: "Time conversion tool",
            fullDescription: "Herramienta de conversión de tiempo que ayuda a los usuarios a convertir y gestionar su tiempo de pantalla de manera efectiva.",
            technologies: ["JavaScript", "TypeScript"],
            year: "2022",
            link: "https://github.com/yourusername/screen-time-converter",
        },
        4: {
            name: "LED multi",
            description: "LED controller app",
            fullDescription: "Aplicación controladora de LED que permite gestionar múltiples configuraciones de iluminación LED para diferentes ambientes.",
            technologies: ["React Native", "Bluetooth", "Arduino"],
            year: "2022",
            link: "https://github.com/yourusername/led-multi",
        },
        5: {
            name: "inline.svg",
            description: "SVG optimization tool",
            fullDescription: "Herramienta de optimización de SVG que convierte y optimiza archivos SVG para uso en desarrollo web, mejorando el rendimiento.",
            technologies: ["Node.js", "SVGO", "Express"],
            year: "2021",
            link: "https://github.com/yourusername/inline-svg",
        },
    };

    const details = projectDetails[project.id] || project;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{details.name}</Text>
                <Text style={styles.subtitle}>{details.description}</Text>
                
                <View style={styles.infoSection}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Año:</Text>
                        <Text style={styles.infoValue}>{details.year}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Tecnologías:</Text>
                        <View style={styles.techContainer}>
                            {details.technologies?.map((tech, index) => (
                                <View key={index} style={styles.techBadge}>
                                    <Text style={styles.techText}>{tech}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.descriptionSection}>
                    <Text style={styles.sectionTitle}>Descripción</Text>
                    <Text style={styles.description}>{details.fullDescription}</Text>
                </View>

                <TouchableOpacity 
                    style={styles.linkButton}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.linkButtonText}>Ver Proyecto</Text>
                </TouchableOpacity>
            </View>

            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                title="Enlace del Proyecto"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>
                        Este proyecto está disponible en GitHub. Haz clic en el enlace para ver el código fuente.
                    </Text>
                    <TouchableOpacity style={styles.modalButton}>
                        <Text style={styles.modalButtonText}>Abrir en GitHub</Text>
                    </TouchableOpacity>
                </View>
            </CustomModal>
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
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.textLight,
        marginBottom: SPACING.xl,
    },
    infoSection: {
        marginBottom: SPACING.xl,
    },
    infoRow: {
        marginBottom: SPACING.md,
    },
    infoLabel: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "bold",
        marginBottom: SPACING.xs,
    },
    infoValue: {
        fontSize: FONT_SIZE.md,
        color: COLORS.text,
    },
    techContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: SPACING.sm,
    },
    techBadge: {
        backgroundColor: COLORS.surfaceVariant,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    techText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.sm,
    },
    descriptionSection: {
        marginBottom: SPACING.xl,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: SPACING.md,
    },
    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        lineHeight: 24,
    },
    linkButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.lg,
        borderRadius: 8,
        alignItems: "center",
        marginTop: SPACING.lg,
    },
    linkButtonText: {
        color: COLORS.background,
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
    },
    modalContent: {
        gap: SPACING.lg,
    },
    modalText: {
        color: COLORS.textLight,
        fontSize: FONT_SIZE.md,
        lineHeight: 24,
    },
    modalButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.lg,
        borderRadius: 8,
        alignItems: "center",
    },
    modalButtonText: {
        color: COLORS.background,
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
    },
});

export default ProjectDetailScreen;
