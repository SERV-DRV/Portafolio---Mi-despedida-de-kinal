import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Alert, Platform } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../src/shared/constants/theme";
import CustomModal from "../../src/shared/components/Modal";
import GlowBackground from "../../src/shared/components/GlowBackground";
import AnimatedText from "../../src/shared/components/AnimatedText";
import GlowingCard from "../../src/shared/components/GlowingCard";

export default function ContactScreen() {
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
        <View style={styles.container}>
            <GlowBackground />
            
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <AnimatedText 
                    text="Contacto"
                    style={styles.title}
                    delay={100}
                />
                
                <AnimatedText 
                    text="¿Tienes un proyecto en mente? ¡Me encantaría escuchar de ti!"
                    style={styles.subtitle}
                    delay={300}
                />

                <View style={styles.contentRow}>
                    <View style={styles.formSection}>
                        <GlowingCard style={styles.formCard} glowColor={COLORS.primary}>
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

                            <GlowingCard 
                                style={styles.submitButton}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
                            </GlowingCard>
                        </GlowingCard>
                    </View>

                    <View style={styles.infoSection}>
                        <AnimatedText 
                            text="Redes Sociales"
                            style={styles.sectionTitle}
                            delay={600}
                        />
                        <GlowingCard glowColor={COLORS.secondary} style={styles.contactItem}>
                            <Text style={styles.contactLabel}>Email:</Text>
                            <Text style={styles.contactValue}>tu@email.com</Text>
                        </GlowingCard>
                        <GlowingCard glowColor={COLORS.secondary} style={styles.contactItem}>
                            <Text style={styles.contactLabel}>LinkedIn:</Text>
                            <Text style={styles.contactValue}>linkedin.com/in/tu-perfil</Text>
                        </GlowingCard>
                        <GlowingCard glowColor={COLORS.secondary} style={styles.contactItem}>
                            <Text style={styles.contactLabel}>GitHub:</Text>
                            <Text style={styles.contactValue}>github.com/tu-perfil</Text>
                        </GlowingCard>
                    </View>
                </View>
            </ScrollView>

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
                    <GlowingCard onPress={handleModalClose}>
                        <Text style={styles.modalButtonText}>Cerrar</Text>
                    </GlowingCard>
                </View>
            </CustomModal>
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
        fontWeight: "900",
        color: COLORS.text,
        marginBottom: SPACING.sm,
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.primary,
        fontFamily: 'monospace',
        marginBottom: SPACING.xxl,
    },
    contentRow: {
        flexDirection: Platform.OS === 'web' ? 'row' : 'column',
        gap: SPACING.xl,
        justifyContent: 'space-between',
    },
    formSection: {
        flex: 1,
        minWidth: Platform.OS === 'web' ? 400 : '100%',
    },
    infoSection: {
        flex: Platform.OS === 'web' ? 0.6 : 1,
        gap: SPACING.md,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: COLORS.primary,
        marginBottom: SPACING.sm,
        fontFamily: 'monospace',
    },
    formCard: {
        padding: SPACING.xl,
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
        backgroundColor: 'rgba(17, 34, 64, 0.5)',
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 12,
        padding: SPACING.lg,
        color: COLORS.text,
        fontSize: 16,
    },
    textArea: {
        height: 140,
        textAlignVertical: "top",
    },
    submitButton: {
        marginTop: SPACING.md,
        alignItems: "center",
    },
    submitButtonText: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: "bold",
    },
    contactItem: {
        marginBottom: SPACING.md,
    },
    contactLabel: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: "700",
        marginBottom: SPACING.xs,
        fontFamily: 'monospace',
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
    modalButtonText: {
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center'
    },
});
