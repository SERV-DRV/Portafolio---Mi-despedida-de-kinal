import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";

const ProjectList = ({ projects, onProjectPress }) => {
    return (
        <View style={styles.container}>
            {projects.map((project) => (
                <TouchableOpacity
                    key={project.id}
                    style={styles.projectItem}
                    onPress={() => onProjectPress(project)}
                >
                    <Text style={styles.projectName}>{project.name}</Text>
                    <Text style={styles.projectDescription}>{project.description}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: SPACING.md,
    },
    projectItem: {
        backgroundColor: COLORS.surface,
        padding: SPACING.lg,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    projectName: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: SPACING.xs,
    },
    projectDescription: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textLight,
    },
});

export default ProjectList;
