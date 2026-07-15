import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SPACING, FONT_SIZE } from "../src/shared/constants/theme";
import CustomModal from "../src/shared/components/Modal";

export default function ContactScreen() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = () => {
        if (!name || !email || !message) {
            Alert.alert("Error", "Por favor completa todos los campos");
            return;
        }
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Contact</Text>
                
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Envíame un mensaje</Text>
                    <Text style={styles.description}>
                        ¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Me encantaría escuchar de ti!
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nombre</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Tu nombre"
                            placeholderTextColor={COLORS.textMuted}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="tu@email.com"
                            placeholderTextColor={COLORS.textMuted}
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Mensaje</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            value={message}
                            onChangeText={setMessage}
                            placeholder="Escribe tu mensaje aquí..."
                            placeholderTextColor={COLORS.textMuted}
                            multiline
                            numberOfLines={5}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contactInfo}>
                    <Text style={styles.sectionTitle}>Otras formas de contacto</Text>
                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>Email:</Text>
                        <Text style={styles.contactValue}>your@email.com</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>LinkedIn:</Text>
                        <Text style={styles.contactValue}>linkedin.com/in/yourusername</Text>
                    </View>
                    <View style={styles.contactItem}>
                        <Text style={styles.contactLabel}>GitHub:</Text>
                        <Text style={styles.contactValue}>github.com/yourusername</Text>
                    </View>
                </View>
            </View>

            <CustomModal
                visible={modalVisible}
                onClose={handleModalClose}
                title="Mensaje Enviado"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>
                        ¡Gracias por contactarme! Tu mensaje ha sido enviado exitosamente. 
                        Te responderé lo antes posible.
                    </Text>
                    <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
                        <Text style={styles.modalButtonText}>Cerrar</Text>
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
    description: {
        fontSize: 18,
        color: COLORS.textLight,
        lineHeight: 28,
    },
    form: {
        marginBottom: SPACING.xl * 1.5,
    },
    inputGroup: {
        marginBottom: SPACING.lg,
    },
    label: {
        fontSize: 16,
        color: COLORS.text,
        marginBottom: SPACING.sm,
        fontWeight: "600",
    },
    input: {
        backgroundColor: COLORS.surface,
        borderWidth: 2,
        borderColor: COLORS.border,
        borderRadius: 16,
        padding: SPACING.lg,
        color: COLORS.text,
        fontSize: 16,
    },
    textArea: {
        height: 140,
        textAlignVertical: "top",
    },
    submitButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.lg,
        borderRadius: 16,
        alignItems: "center",
        marginTop: SPACING.md,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    submitButtonText: {
        color: COLORS.text,
        fontSize: 18,
        fontWeight: "800",
    },
    contactInfo: {
        marginBottom: SPACING.xl,
    },
    contactItem: {
        marginBottom: SPACING.lg,
        backgroundColor: COLORS.surface,
        padding: SPACING.lg,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    contactLabel: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: "700",
        marginBottom: SPACING.xs,
    },
    contactValue: {
        fontSize: 16,
        color: COLORS.textLight,
    },
    modalContent: {
        gap: SPACING.lg,
    },
    modalText: {
        color: COLORS.textLight,
        fontSize: 16,
        lineHeight: 26,
    },
    modalButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.lg,
        borderRadius: 16,
        alignItems: "center",
    },
    modalButtonText: {
        color: COLORS.text,
        fontSize: 18,
        fontWeight: "800",
    },
});
