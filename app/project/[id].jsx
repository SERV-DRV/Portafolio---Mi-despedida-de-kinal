import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, useWindowDimensions, Animated, Image, Modal, TouchableWithoutFeedback } from "react-native";
import { Video } from "expo-av";
import { useRouter, useLocalSearchParams } from "expo-router";
import { COLORS, SPACING, FONT_SIZE } from "../../src/shared/constants/theme";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { projects } from "../../src/data/portfolioData";

// Animated component
const FadeInUp = ({ delay, children, style }) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(30)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.delay(delay),
            Animated.parallel([
                Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
                Animated.timing(translateY, { toValue: 0, duration: 800, useNativeDriver: true })
            ])
        ]).start();
    }, []);

    return <Animated.View style={[style, { opacity, transform: [{ translateY }] }]}>{children}</Animated.View>;
};

export default function ProjectDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { width } = useWindowDimensions();
    const [selectedImage, setSelectedImage] = useState(null);

    const details = projects.find(p => p.id === parseInt(id)) || { 
        name: "Proyecto no encontrado", 
        description: "", 
        fullDescription: "No se pudo cargar la información del proyecto.", 
        technologies: [], 
        year: "", 
        link: "#",
        icon: "file-code"
    };

    const isDesktop = width > 900;

    const openLink = (url) => {
        if (url && url !== "#") {
            Linking.openURL(url).catch(() => {});
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                
                {/* Back Button Area */}
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <MaterialIcons name="arrow-back" size={24} color={COLORS.primary} />
                        <Text style={styles.backButtonText}>Volver al Portafolio</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contentInner}>
                    <FadeInUp delay={100} style={styles.titleSection}>
                        <View style={styles.iconCircle}>
                            <FontAwesome5 name={details.icon || "code"} size={32} color={COLORS.background} />
                        </View>
                        <Text style={styles.title}>{details.name}</Text>
                        <Text style={styles.subtitle}>{details.description}</Text>
                    </FadeInUp>

                    <View style={[styles.mainGrid, { flexDirection: isDesktop ? 'row' : 'column' }]}>
                        
                        {/* Left Column: Description & Buttons */}
                        <View style={styles.leftCol}>
                            <FadeInUp delay={200}>
                                <Text style={styles.sectionTitle}>Sobre este proyecto</Text>
                                <Text style={styles.description}>{details.fullDescription}</Text>
                            </FadeInUp>

                            <FadeInUp delay={300} style={styles.buttonsRow}>
                                {details.link && (
                                    <TouchableOpacity 
                                        style={styles.primaryButton}
                                        onPress={() => openLink(details.link)}
                                    >
                                        <FontAwesome5 name="github" size={18} color={COLORS.background} />
                                        <Text style={styles.primaryButtonText}>Ver en GitHub</Text>
                                    </TouchableOpacity>
                                )}
                                
                                {details.demoLink && (
                                    <TouchableOpacity 
                                        style={styles.secondaryButton}
                                        onPress={() => openLink(details.demoLink)}
                                    >
                                        <MaterialIcons name="open-in-new" size={20} color={COLORS.primary} />
                                        <Text style={styles.secondaryButtonText}>Ver Demo</Text>
                                    </TouchableOpacity>
                                )}
                            </FadeInUp>
                        </View>

                        {/* Right Column: Tech Specs */}
                        <View style={styles.rightCol}>
                            <FadeInUp delay={400} style={styles.specsCard}>
                                <View style={styles.specRow}>
                                    <FontAwesome5 name="calendar-alt" size={16} color={COLORS.primary} style={styles.specIcon} />
                                    <View>
                                        <Text style={styles.specLabel}>Año de desarrollo</Text>
                                        <Text style={styles.specValue}>{details.year}</Text>
                                    </View>
                                </View>

                                <View style={styles.divider} />

                                <View style={styles.specRow}>
                                    <FontAwesome5 name="layer-group" size={16} color={COLORS.primary} style={styles.specIcon} />
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.specLabel}>Tecnologías utilizadas</Text>
                                        <View style={styles.techContainer}>
                                            {details.technologies?.map((tech, index) => (
                                                <View key={index} style={styles.techBadge}>
                                                    <Text style={styles.techText}>{tech}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            </FadeInUp>
                        </View>
                    </View>

                    {/* NEW SECTION: VIDEO */}
                    {details.video && (
                        <FadeInUp delay={400} style={styles.videoSection}>
                            <Text style={styles.sectionTitle}>Demostración en Video</Text>
                            <View style={styles.videoContainer}>
                                <Video
                                    style={styles.videoPlayer}
                                    source={details.video}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                />
                            </View>
                        </FadeInUp>
                    )}

                    {/* NEW SECTION: GALLERY */}
                    {details.images && details.images.length > 0 && (
                        <FadeInUp delay={500} style={styles.gallerySection}>
                            <Text style={styles.sectionTitle}>Galería del Proyecto</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryContainer}>
                                {details.images.map((img, idx) => (
                                    <TouchableOpacity key={idx} activeOpacity={0.8} onPress={() => setSelectedImage(img)}>
                                        <Image source={img} style={styles.galleryImage} resizeMode="cover" />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </FadeInUp>
                    )}
                </View>
            </ScrollView>

            <Modal visible={!!selectedImage} transparent={true} animationType="fade" onRequestClose={() => setSelectedImage(null)}>
                <View style={styles.modalBackground}>
                    <TouchableOpacity style={styles.closeModalButton} onPress={() => setSelectedImage(null)}>
                        <MaterialIcons name="close" size={32} color={COLORS.text} />
                    </TouchableOpacity>
                    {selectedImage && (
                        <Image source={selectedImage} style={styles.fullScreenImage} resizeMode="contain" />
                    )}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        paddingTop: SPACING.xl,
        paddingBottom: SPACING.xxl * 2,
        alignItems: 'center',
    },
    headerRow: {
        width: '100%',
        maxWidth: 1000,
        paddingHorizontal: SPACING.xl,
        marginBottom: SPACING.xl,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingVertical: SPACING.sm,
    },
    backButtonText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.md,
        fontFamily: 'monospace',
        marginLeft: SPACING.sm,
    },
    contentInner: {
        width: '100%',
        maxWidth: 1000,
        paddingHorizontal: SPACING.xl,
    },
    titleSection: {
        marginBottom: SPACING.xxl,
    },
    iconCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.lg,
    },
    title: {
        fontSize: 50,
        fontWeight: "900",
        color: COLORS.text,
        letterSpacing: -1,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.xl,
        color: COLORS.secondary,
        fontWeight: "600",
    },
    mainGrid: {
        gap: SPACING.xxl,
    },
    leftCol: {
        flex: 2,
    },
    rightCol: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: SPACING.lg,
    },
    description: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.textLight,
        lineHeight: 30,
        marginBottom: SPACING.xxl,
    },
    buttonsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.md,
    },
    primaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 4,
        gap: SPACING.sm,
    },
    primaryButtonText: {
        color: COLORS.background,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    secondaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.primary,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 4,
        gap: SPACING.sm,
    },
    secondaryButtonText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    specsCard: {
        backgroundColor: COLORS.surface,
        borderRadius: 8,
        padding: SPACING.xl,
        borderWidth: 1,
        borderColor: COLORS.surfaceVariant,
    },
    specRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    specIcon: {
        marginTop: 4,
        marginRight: SPACING.md,
    },
    specLabel: {
        fontSize: FONT_SIZE.sm,
        fontFamily: 'monospace',
        color: COLORS.textMuted,
        textTransform: 'uppercase',
        marginBottom: SPACING.xs,
    },
    specValue: {
        fontSize: FONT_SIZE.xl,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.surfaceVariant,
        marginVertical: SPACING.lg,
    },
    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm,
        marginTop: SPACING.sm,
    },
    techBadge: {
        backgroundColor: 'rgba(100, 255, 218, 0.1)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
    },
    techText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.sm,
        fontFamily: 'monospace',
    },
    videoSection: {
        marginTop: SPACING.xxl,
    },
    videoContainer: {
        width: '100%',
        height: 400,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.surfaceVariant,
        backgroundColor: COLORS.background,
    },
    videoPlayer: {
        width: '100%',
        height: '100%',
    },
    gallerySection: {
        marginTop: SPACING.xxl,
    },
    galleryContainer: {
        gap: SPACING.lg,
        paddingBottom: SPACING.lg,
    },
    galleryImage: {
        width: 300,
        height: 200,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.surfaceVariant,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(2, 12, 27, 0.95)', // dark transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeModalButton: {
        position: 'absolute',
        top: 40,
        right: 40,
        zIndex: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
    },
    fullScreenImage: {
        width: '90%',
        height: '90%',
    }
});
