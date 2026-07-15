import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, useWindowDimensions, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { COLORS, SPACING, FONT_SIZE } from "../src/shared/constants/theme";
import ProjectCard from "../src/features/home/components/ProjectCard";
import { personalInfo, skills, projects } from "../src/data/portfolioData";

// Animated entry component
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

// Minimalist & Elegant Progress Bar
const CustomProgressBar = ({ skill, index }) => {
    const widthAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.delay(800 + (index * 100)),
            Animated.timing(widthAnim, {
                toValue: skill.percentage,
                duration: 1000,
                useNativeDriver: false 
            })
        ]).start();
    }, []);

    return (
        <View style={styles.skillRow}>
            {/* Minimalist icon instead of image */}
            <View style={styles.skillIconImageMinimal}>
                <FontAwesome5 name={skill.icon} size={24} color={COLORS.primary} />
            </View>
            
            <View style={styles.skillContent}>
                {/* Text row */}
                <View style={styles.skillTextRow}>
                    <Text style={styles.skillNameMinimal}>{skill.name}</Text>
                    <Text style={styles.skillPercentageMinimal}>{skill.percentage}%</Text>
                </View>
                
                {/* Thin track */}
                <View style={styles.skillPillTrackMinimal}>
                    <Animated.View style={[
                        styles.skillPillFillMinimal, 
                        { 
                            width: widthAnim.interpolate({
                                inputRange: [0, 100],
                                outputRange: ['0%', '100%']
                            }) 
                        }
                    ]} />
                </View>
            </View>
        </View>
    );
};

export default function HomeScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();

    const handleProjectPress = (project) => {
        router.push(`/project/${project.id}`);
    };

    const handleSocialPress = (url) => {
        if (url && url !== "#") {
            Linking.openURL(url).catch(() => {});
        }
    };

    const isDesktop = width > 900;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                
                {/* HERO SECTION */}
                <View style={styles.heroSection}>
                    <View style={[styles.heroInner, { flexDirection: isDesktop ? 'row' : 'column', alignItems: isDesktop ? 'center' : 'flex-start' }]}>
                        
                        <View style={styles.heroTextContainer}>
                            <FadeInUp delay={100}>
                                <Text style={styles.heroGreeting}>Hola, mi nombre es</Text>
                            </FadeInUp>
                            <FadeInUp delay={200}>
                                <Text style={styles.heroName}>{personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}.</Text>
                            </FadeInUp>
                            <FadeInUp delay={300}>
                                <Text style={styles.heroTitle}>{personalInfo.title}.</Text>
                            </FadeInUp>
                            <FadeInUp delay={400}>
                                <Text style={styles.heroBio}>{personalInfo.bio}</Text>
                            </FadeInUp>
                            <FadeInUp delay={500}>
                                <TouchableOpacity 
                                    style={styles.heroButton}
                                    onPress={() => handleSocialPress(personalInfo.links.github)}
                                >
                                    <Text style={styles.heroButtonText}>Ver mi Github</Text>
                                </TouchableOpacity>
                            </FadeInUp>
                        </View>

                        <FadeInUp delay={600} style={[styles.heroImageContainer, { marginTop: isDesktop ? 0 : SPACING.xxl }]}>
                            <View style={styles.imageWrapper}>
                                <Image source={require('../assets/me/me.png')} style={styles.heroImage} resizeMode="cover" />
                                <View style={styles.imageBorder} />
                            </View>
                        </FadeInUp>
                        
                    </View>
                </View>

                {/* SKILLS SECTION */}
                <View style={styles.section}>
                    <View style={styles.sectionInner}>
                        <FadeInUp delay={200}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionNumber}>01.</Text>
                                <Text style={styles.sectionTitle}>Habilidades</Text>
                                <View style={styles.sectionLine} />
                            </View>
                            
                            <Text style={styles.sectionSubtitle}>
                                He trabajado con diferentes tecnologías web y móviles. Aquí hay algunas de mis principales habilidades:
                            </Text>

                            <View style={styles.skillsContainer}>
                                {skills.map((skill, index) => (
                                    <CustomProgressBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </View>
                        </FadeInUp>
                    </View>
                </View>

                {/* PROJECTS SECTION */}
                <View style={styles.section}>
                    <View style={styles.sectionInner}>
                        <FadeInUp delay={200}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionNumber}>02.</Text>
                                <Text style={styles.sectionTitle}>Mis Proyectos</Text>
                                <View style={styles.sectionLine} />
                            </View>

                            <View style={styles.projectsGrid}>
                                {projects.map((project) => (
                                    <View key={project.id} style={{ width: isDesktop ? '48%' : '100%', marginBottom: SPACING.xl }}>
                                        <ProjectCard project={project} onPress={() => handleProjectPress(project)} />
                                    </View>
                                ))}
                            </View>
                        </FadeInUp>
                    </View>
                </View>

                {/* FOOTER */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Diseñado y construido por {personalInfo.name}</Text>
                </View>
            </ScrollView>

            {/* FIXED SIDEBARS (Desktop only) */}
            {isDesktop && (
                <>
                    {/* Left Sidebar - Socials */}
                    <View style={styles.leftSidebar}>
                        <View style={styles.sidebarIconList}>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.github)} style={styles.sidebarIcon}>
                                <FontAwesome5 name="github" size={20} color={COLORS.textLight} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.linkedin)} style={styles.sidebarIcon}>
                                <FontAwesome5 name="linkedin" size={20} color={COLORS.textLight} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.compuTrabajo)} style={styles.sidebarIcon}>
                                <FontAwesome5 name="briefcase" size={20} color={COLORS.textLight} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sidebarLine} />
                    </View>

                    {/* Right Sidebar - Email */}
                    <View style={styles.rightSidebar}>
                        <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.email)} style={styles.emailContainer}>
                            <Text style={styles.emailText}>{personalInfo.links.email.replace('mailto:', '')}</Text>
                        </TouchableOpacity>
                        <View style={styles.sidebarLine} />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        paddingTop: SPACING.xxl,
        paddingBottom: SPACING.xxl,
        alignItems: 'center',
    },
    heroSection: {
        minHeight: '80vh',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: SPACING.xl,
        marginBottom: SPACING.xxl * 2,
    },
    heroInner: {
        maxWidth: 1000,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    heroTextContainer: {
        flex: 1,
        maxWidth: 600,
    },
    heroGreeting: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.md,
        fontFamily: 'monospace',
        marginBottom: SPACING.md,
        letterSpacing: 1,
    },
    heroName: {
        color: COLORS.text,
        fontSize: 60,
        fontWeight: '900',
        letterSpacing: -1,
        lineHeight: 70,
        marginBottom: 10,
    },
    heroTitle: {
        color: COLORS.secondary,
        fontSize: 50,
        fontWeight: '800',
        letterSpacing: -1,
        lineHeight: 60,
        marginBottom: SPACING.xl,
    },
    heroBio: {
        color: COLORS.textLight,
        fontSize: FONT_SIZE.lg,
        lineHeight: 30,
        maxWidth: 540,
        marginBottom: SPACING.xxl,
    },
    heroButton: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        paddingVertical: 18,
        paddingHorizontal: 28,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    heroButtonText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.sm,
        fontFamily: 'monospace',
    },
    heroImageContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: SPACING.xl,
    },
    imageWrapper: {
        position: 'relative',
        width: 250,
        height: 250,
        zIndex: 1,
    },
    heroImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        zIndex: 2,
    },
    imageBorder: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 8,
        zIndex: 0,
        transition: 'all 0.3s ease',
    },

    section: {
        width: '100%',
        paddingHorizontal: SPACING.xl,
        marginBottom: 100,
    },
    sectionInner: {
        maxWidth: 1000,
        width: '100%',
        alignSelf: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xl,
    },
    sectionNumber: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xl,
        fontFamily: 'monospace',
        marginRight: 10,
    },
    sectionTitle: {
        color: COLORS.text,
        fontSize: 32,
        fontWeight: 'bold',
        marginRight: 20,
    },
    sectionLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.surfaceVariant,
        maxWidth: 300,
    },
    sectionSubtitle: {
        color: COLORS.textLight,
        fontSize: FONT_SIZE.lg,
        marginBottom: SPACING.xl * 1.5,
        maxWidth: 600,
        lineHeight: 28,
    },

    // Minimalist Custom Progress Bar Styles
    skillsContainer: {
        maxWidth: 800,
        gap: SPACING.md,
    },
    skillRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.md,
    },
    skillIconImageMinimal: {
        width: 32,
        height: 32,
        marginRight: SPACING.lg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skillContent: {
        flex: 1,
    },
    skillTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    skillNameMinimal: {
        color: COLORS.text,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    skillPercentageMinimal: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.sm,
        fontFamily: 'monospace',
    },
    skillPillTrackMinimal: {
        width: '100%',
        height: 4,
        backgroundColor: COLORS.surfaceVariant,
        borderRadius: 2,
    },
    skillPillFillMinimal: {
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 2,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
    },

    projectsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    // Footer
    footer: {
        paddingVertical: SPACING.xl,
        alignItems: 'center',
    },
    footerText: {
        color: COLORS.textLight,
        fontSize: FONT_SIZE.sm,
        fontFamily: 'monospace',
    },

    // Fixed Sidebars
    leftSidebar: {
        position: 'absolute',
        bottom: 0,
        left: 40,
        alignItems: 'center',
    },
    sidebarIconList: {
        gap: SPACING.lg,
        marginBottom: SPACING.lg,
    },
    sidebarIcon: {
        padding: 5,
    },
    sidebarLine: {
        width: 1,
        height: 90,
        backgroundColor: COLORS.textLight,
    },
    rightSidebar: {
        position: 'absolute',
        bottom: 0,
        right: 40,
        alignItems: 'center',
    },
    emailContainer: {
        marginBottom: SPACING.lg,
        transform: [{ rotate: '90deg' }, { translateY: -15 }, { translateX: -60 }],
    },
    emailText: {
        color: COLORS.textLight,
        fontFamily: 'monospace',
        fontSize: FONT_SIZE.xs,
        letterSpacing: 2,
    },
});
