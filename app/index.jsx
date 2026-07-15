import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, useWindowDimensions, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from "../src/shared/constants/theme";
import ProjectCard from "../src/features/home/components/ProjectCard";
import { personalInfo, skills, projects } from "../src/data/portfolioData";

const FadeInText = ({ text, delay, style }) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(20)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.delay(delay),
            Animated.parallel([
                Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
                Animated.timing(translateY, { toValue: 0, duration: 800, useNativeDriver: true })
            ])
        ]).start();
    }, []);

    return <Animated.Text style={[style, { opacity, transform: [{ translateY }] }]}>{text}</Animated.Text>;
};

const SkillBar = ({ skill, index }) => {
    const widthAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.delay(500 + (index * 100)),
            Animated.timing(widthAnim, {
                toValue: skill.percentage,
                duration: 1000,
                useNativeDriver: false 
            })
        ]).start();
    }, []);

    return (
        <View style={styles.skillBarContainer}>
            <View style={styles.skillLabelRow}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                    <FontAwesome5 name={skill.icon} size={14} color={COLORS.primary} />
                    <Text style={styles.skillName}>{skill.name}</Text>
                </View>
                <Text style={styles.skillPercent}>{skill.percentage}%</Text>
            </View>
            <View style={styles.skillBarBackground}>
                <LinearGradient
                    colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={StyleSheet.absoluteFill}
                />
                <Animated.View style={[
                    styles.skillBarCover, 
                    { 
                        left: widthAnim.interpolate({
                            inputRange: [0, 100],
                            outputRange: ['0%', '100%']
                        }) 
                    }
                ]} />
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

    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#050505', '#0a0a1a', '#050505']}
                style={StyleSheet.absoluteFill}
            />
            
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                
                <View style={styles.heroBox}>
                    <View style={styles.heroInner}>
                        <View style={styles.header}>
                            <View style={styles.socialIcons}>
                                <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.compuTrabajo)} style={styles.socialButton}>
                                    <FontAwesome5 name="briefcase" size={20} color={COLORS.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.email)} style={styles.socialButton}>
                                    <FontAwesome5 name="envelope" size={20} color={COLORS.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.github)} style={styles.socialButton}>
                                    <FontAwesome5 name="github" size={20} color={COLORS.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.linkedin)} style={styles.socialButton}>
                                    <FontAwesome5 name="linkedin" size={20} color={COLORS.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.heroContent}>
                            <View style={styles.profileContainer}>
                                <View style={styles.glowRing}>
                                    <Image 
                                        source={require('../assets/images/me.jpg')} 
                                        style={styles.profileImage} 
                                    />
                                </View>
                            </View>
                            <FadeInText text={`Hola, soy ${personalInfo.name.split(' ')[0]}.`} delay={100} style={styles.welcomeText} />
                            
                            <FadeInText text={personalInfo.title} delay={200} style={styles.titleText} />
                            
                            <View style={styles.generalDataRow}>
                                <View style={styles.badge}><Text style={styles.badgeText}>{personalInfo.age} años</Text></View>
                                <View style={styles.badge}><Text style={styles.badgeText}>{personalInfo.alias}</Text></View>
                            </View>

                            <FadeInText 
                                text={personalInfo.bio} 
                                delay={300} 
                                style={styles.description} 
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.skillsSection}>
                    <View style={styles.sectionInner}>
                        <Text style={styles.sectionTitleWhite}>Habilidades y Educación</Text>
                        
                        <View style={[styles.skillsRow, isMobile && styles.skillsRowMobile]}>
                            <View style={styles.educationColumn}>
                                <Text style={styles.subTitleWhite}>Formación Académica</Text>
                                <View style={styles.glassCard}>
                                    <View style={styles.eduItem}>
                                        <View style={styles.eduDot} />
                                        <View>
                                            <Text style={styles.eduTitle}>{personalInfo.education}</Text>
                                            <Text style={styles.eduSub}>{personalInfo.institution}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={styles.skillsColumn}>
                                <Text style={styles.subTitleWhite}>Tecnologías</Text>
                                <View style={[styles.glassCard, styles.skillsGrid]}>
                                    {skills.map((skill, index) => (
                                        <SkillBar key={skill.name} skill={skill} index={index} />
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.projectsSection}>
                    <View style={styles.projectsContent}>
                        <View style={styles.projectsHeader}>
                            <Text style={styles.sectionTitleWhite}>Mis Proyectos</Text>
                            <Text style={styles.projectsSubtitle}>Una colección del trabajo que he realizado.</Text>
                        </View>
                        
                        <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false} 
                            style={{ minHeight: 380 }}
                            contentContainerStyle={styles.projectsScrollContainer}
                            snapToInterval={width > 768 ? 400 + SPACING.md : (width * 0.85) + SPACING.md}
                            decelerationRate="fast"
                        >
                            {projects.map((project) => {
                                return (
                                    <View key={project.id} style={[styles.projectCardWrapper, { width: 400, maxWidth: '85vw' }]}>
                                        <ProjectCard 
                                            project={project} 
                                            onPress={() => handleProjectPress(project)} 
                                        />
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.footerBox}>
                    <View style={styles.footerInner}>
                        <Text style={styles.footerTextWhite}>© {new Date().getFullYear()} {personalInfo.name}</Text>
                        <View style={styles.footerSocials}>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.github)} style={styles.footerSocialButton}>
                                <FontAwesome5 name="github" size={24} color={COLORS.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.linkedin)} style={styles.footerSocialButton}>
                                <FontAwesome5 name="linkedin" size={24} color={COLORS.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {},
    
    heroBox: {
        paddingTop: SPACING.xl * 2,
    },
    heroInner: {
        maxWidth: 1200,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.xl * 2,
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingVertical: SPACING.lg,
    },
    socialIcons: {
        flexDirection: "row",
        gap: SPACING.md,
    },
    socialButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: COLORS.surfaceVariant,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
        ...SHADOWS.glass,
    },
    heroContent: {
        paddingTop: SPACING.md,
        paddingBottom: SPACING.xl,
    },
    profileContainer: {
        marginBottom: SPACING.xl,
        alignItems: 'flex-start',
    },
    glowRing: {
        padding: 4,
        borderRadius: 80,
        backgroundColor: COLORS.surface,
        borderWidth: 2,
        borderColor: COLORS.primary,
        ...SHADOWS.neonBlue,
    },
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 2,
        borderColor: COLORS.border,
    },
    welcomeText: {
        fontSize: FONT_SIZE.giant,
        fontWeight: "900",
        color: COLORS.text,
        marginBottom: SPACING.xs,
        letterSpacing: -2,
    },
    titleText: {
        fontSize: FONT_SIZE.huge,
        fontWeight: "800",
        color: COLORS.primary,
        marginBottom: SPACING.lg,
        letterSpacing: -1,
        textShadowColor: COLORS.primary,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    generalDataRow: {
        flexDirection: 'row',
        gap: SPACING.sm,
        marginBottom: SPACING.xl,
    },
    badge: {
        backgroundColor: 'rgba(0, 240, 255, 0.1)',
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(0, 240, 255, 0.3)',
    },
    badgeText: {
        color: COLORS.primary,
        fontWeight: '700',
        fontSize: FONT_SIZE.sm,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    description: {
        fontSize: 18,
        color: COLORS.textLight,
        lineHeight: 32,
        maxWidth: 700,
        fontWeight: '400',
    },

    skillsSection: {
        paddingVertical: SPACING.xl * 2,
    },
    sectionInner: {
        maxWidth: 1280,
        alignSelf: "center",
        width: "100%",
        paddingHorizontal: SPACING.lg,
    },
    sectionTitleWhite: {
        fontSize: FONT_SIZE.huge,
        fontWeight: "900",
        color: COLORS.text,
        marginBottom: SPACING.xl,
        letterSpacing: -1,
    },
    skillsRow: {
        flexDirection: 'row',
        gap: SPACING.xl * 2,
    },
    skillsRowMobile: {
        flexDirection: 'column',
    },
    educationColumn: {
        flex: 1,
    },
    skillsColumn: {
        flex: 2,
    },
    subTitleWhite: {
        fontSize: 24,
        fontWeight: "800",
        color: COLORS.secondary,
        marginBottom: SPACING.lg,
        letterSpacing: -0.5,
    },
    glassCard: {
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: SPACING.lg,
        ...SHADOWS.glass,
    },
    eduItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    eduDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: COLORS.secondary,
        marginTop: 6,
        marginRight: SPACING.lg,
        ...SHADOWS.neonPink,
    },
    eduTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.text,
        marginBottom: 6,
    },
    eduSub: {
        fontSize: 16,
        color: COLORS.textLight,
    },
    skillsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.lg,
        justifyContent: 'space-between',
    },
    skillBarContainer: {
        width: '45%',
        minWidth: 140,
        marginBottom: SPACING.sm,
    },
    skillLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    skillName: {
        color: COLORS.text,
        fontWeight: '600',
        fontSize: FONT_SIZE.sm,
    },
    skillPercent: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.sm,
        fontWeight: '800',
    },
    skillBarBackground: {
        height: 8,
        backgroundColor: COLORS.background,
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
    },
    skillBarCover: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.surfaceVariant,
    },

    projectsSection: {
        paddingVertical: SPACING.xl * 2,
    },
    projectsContent: {
        maxWidth: 1280,
        alignSelf: "center",
        width: "100%",
    },
    projectsHeader: {
        alignItems: "flex-start",
        marginBottom: SPACING.xl,
        paddingHorizontal: SPACING.lg,
    },
    projectsSubtitle: {
        fontSize: 18,
        color: COLORS.textLight,
        marginTop: SPACING.sm, 
    },
    projectsScrollContainer: {
        paddingHorizontal: SPACING.md,
        paddingBottom: SPACING.xl,
    },
    projectCardWrapper: {
        paddingHorizontal: SPACING.sm,
    },

    footerBox: {
        paddingVertical: SPACING.xl * 2,
        paddingHorizontal: SPACING.lg,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    footerInner: {
        maxWidth: 1200,
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerTextWhite: {
        color: COLORS.textLight,
        fontSize: 14,
        fontWeight: '600',
    },
    footerSocials: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    footerSocialButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
});
