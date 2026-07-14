import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";
import CustomModal from "../../../shared/components/Modal";

const ContactScreen = ({ navigation }) => {
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
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
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
    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        lineHeight: 24,
    },
    form: {
        marginBottom: SPACING.xl,
    },
    inputGroup: {
        marginBottom: SPACING.lg,
    },
    label: {
        fontSize: FONT_SIZE.md,
        color: COLORS.text,
        marginBottom: SPACING.sm,
        fontWeight: "500",
    },
    input: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        padding: SPACING.md,
        color: COLORS.text,
        fontSize: FONT_SIZE.md,
    },
    textArea: {
        height: 120,
        textAlignVertical: "top",
    },
    submitButton: {
        backgroundColor: COLORS.primary,
        padding: SPACING.lg,
        borderRadius: 8,
        alignItems: "center",
        marginTop: SPACING.md,
    },
    submitButtonText: {
        color: COLORS.background,
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
    },
    contactInfo: {
        marginBottom: SPACING.xl,
    },
    contactItem: {
        marginBottom: SPACING.md,
    },
    contactLabel: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "bold",
        marginBottom: SPACING.xs,
    },
    contactValue: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
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

export default ContactScreen;
