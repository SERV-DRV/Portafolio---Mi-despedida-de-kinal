import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const ProjectCard = ({ project, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.card}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={[styles.imageContainer, { alignItems: 'center', justifyContent: 'center' }]}>
                <FontAwesome5 name={project.icon || "code"} size={64} color={COLORS.info} />
            </View>
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>{project.name}</Text>
                <Text style={styles.description}>{project.description}</Text>
                
                <View style={styles.footer}>
                    <MaterialIcons name="language" size={24} color={COLORS.info} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: SPACING.md, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    imageContainer: {
        width: "100%",
        height: 220,
        backgroundColor: COLORS.surfaceVariant,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    content: {
        padding: SPACING.lg,
    },
    name: {
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold", 
        color: COLORS.text, 
        marginBottom: SPACING.xs,
        letterSpacing: -0.5,
    },
    description: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textLight,
        lineHeight: 22,
        marginBottom: SPACING.md,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SPACING.xs,
    }
});

export default ProjectCard;
