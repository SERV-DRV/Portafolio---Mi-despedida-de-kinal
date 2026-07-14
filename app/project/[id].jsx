import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { COLORS, SPACING, FONT_SIZE } from "../../src/shared/constants/theme";
import CustomModal from "../../src/shared/components/Modal";
import { projects } from "../../src/data/portfolioData";

export default function ProjectDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const [modalVisible, setModalVisible] = useState(false);

    // Encuentra el proyecto o crea uno vacío si no se encuentra
    const details = projects.find(p => p.id === parseInt(id)) || { 
        name: "Proyecto", 
        description: "Descripción", 
        fullDescription: "", 
        technologies: [], 
        year: "", 
        link: "#" 
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
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
                        Este proyecto está disponible en la web. Haz clic en el enlace para ver el código fuente o el proyecto.
                    </Text>
                    <TouchableOpacity 
                        style={styles.modalButton}
                        onPress={() => Linking.openURL(details.link).catch(() => {})}
                    >
                        <Text style={styles.modalButtonText}>Abrir Enlace</Text>
                    </TouchableOpacity>
                </View>
            </CustomModal>
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
        color: COLORS.info,
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
        color: COLORS.info,
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
        borderColor: COLORS.info,
    },
    techText: {
        color: COLORS.info,
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
        backgroundColor: COLORS.info,
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
        backgroundColor: COLORS.info,
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
