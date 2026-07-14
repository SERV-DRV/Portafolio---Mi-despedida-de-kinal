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
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        alignItems: "center",
        padding: SPACING.lg,
    },
    modalContainer: {
        backgroundColor: COLORS.surface,
        borderRadius: 12,
        width: "100%",
        maxHeight: "80%",
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SPACING.lg,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold",
        color: COLORS.text,
    },
    closeButton: {
        padding: SPACING.sm,
    },
    closeButtonText: {
        fontSize: FONT_SIZE.xxl,
        color: COLORS.primary,
        fontWeight: "bold",
    },
    content: {
        padding: SPACING.lg,
    },
});

export default CustomModal;
