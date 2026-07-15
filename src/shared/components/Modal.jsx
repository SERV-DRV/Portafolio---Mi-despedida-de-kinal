import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../constants/theme";

const CustomModal = ({ visible, onClose, title, children }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.content}>{children}</ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        justifyContent: "center",
        alignItems: "center",
        padding: SPACING.lg,
    },
    modalContainer: {
        backgroundColor: COLORS.surface,
        borderRadius: 24,
        width: "100%",
        maxHeight: "85%",
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.4,
        shadowRadius: 40,
        elevation: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SPACING.xl,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        backgroundColor: COLORS.surfaceVariant,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    title: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: "800",
        color: COLORS.text,
        letterSpacing: -0.5,
    },
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
    },
    closeButtonText: {
        fontSize: FONT_SIZE.xl,
        color: COLORS.textLight,
        fontWeight: "bold",
    },
    content: {
        padding: SPACING.xl,
    },
});

export default CustomModal;
