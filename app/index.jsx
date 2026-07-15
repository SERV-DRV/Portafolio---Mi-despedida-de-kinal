import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, useWindowDimensions, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from "../src/shared/constants/theme";
import ProjectCard from "../src/features/home/components/ProjectCard";
import { personalInfo, skills, projects } from "../src/data/portfolioData";

// Animated entry component
const FadeInView = ({ delay, children, style }) => {
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

const TechWidget = ({ skill }) => {
    return (
        <View style={styles.techWidgetCard}>
            <View style={styles.techImageContainer}>
                <Image source={skill.image} style={styles.techImage} resizeMode="contain" />
            </View>
            <Text style={styles.techName}>{skill.name}</Text>
            <View style={styles.techPercentBadge}>
                <Text style={styles.techPercentText}>{skill.percentage}%</Text>
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
    const isTablet = width > 600 && width <= 900;
    
    // Calculate dynamic widths for Bento Box
    const bentoFull = '100%';
    const bentoHalf = isDesktop ? '49%' : '100%';

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#050505', '#0a0a1a', '#050505']}
                style={StyleSheet.absoluteFill}
            />
            
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                
                <View style={styles.bentoGrid}>
                    
                    {/* 1. HERO WIDGET (Profile, Intro) */}
                    <FadeInView delay={100} style={[styles.widget, { width: bentoHalf }]}>
                        <LinearGradient colors={[COLORS.surface, 'rgba(30, 41, 59, 0.1)']} style={styles.widgetGradient} />
                        
                        <View style={styles.heroTopRow}>
                            <View style={styles.glowRing}>
                                <Image source={require('../assets/images/me.jpg')} style={styles.profileImage} />
                            </View>
                            <View style={styles.heroTextCol}>
                                <Text style={styles.greetingText}>Hola, soy</Text>
                                <Text style={styles.nameText}>{personalInfo.name.split(' ')[0]}</Text>
                                <Text style={styles.titleText}>{personalInfo.title}</Text>
                            </View>
                        </View>
                        
                        <Text style={styles.bioText}>{personalInfo.bio}</Text>
                        
                        <View style={styles.socialRow}>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.github)} style={styles.socialBtn}>
                                <FontAwesome5 name="github" size={20} color={COLORS.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.linkedin)} style={styles.socialBtn}>
                                <FontAwesome5 name="linkedin" size={20} color={COLORS.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.email)} style={styles.socialBtn}>
                                <FontAwesome5 name="envelope" size={20} color={COLORS.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.compuTrabajo)} style={styles.socialBtn}>
                                <FontAwesome5 name="briefcase" size={20} color={COLORS.primary} />
                            </TouchableOpacity>
                        </View>
                    </FadeInView>

                    {/* 2. EDUCATION & DATA WIDGET */}
                    <FadeInView delay={200} style={[styles.widget, { width: bentoHalf }]}>
                        <LinearGradient colors={['rgba(255, 0, 127, 0.1)', 'rgba(0, 0, 0, 0)']} style={styles.widgetGradient} />
                        
                        <Text style={styles.widgetTitle}>Información</Text>
                        
                        <View style={styles.infoGrid}>
                            <View style={styles.infoItem}>
                                <FontAwesome5 name="calendar-alt" size={24} color={COLORS.secondary} />
                                <View style={styles.infoTextContainer}>
                                    <Text style={styles.infoLabel}>Edad</Text>
                                    <Text style={styles.infoValue}>{personalInfo.age} años</Text>
                                </View>
                            </View>
                            
                            <View style={styles.infoItem}>
                                <FontAwesome5 name="user-ninja" size={24} color={COLORS.secondary} />
                                <View style={styles.infoTextContainer}>
                                    <Text style={styles.infoLabel}>Alias</Text>
                                    <Text style={styles.infoValue}>{personalInfo.alias}</Text>
                                </View>
                            </View>
                            
                            <View style={[styles.infoItem, { width: '100%', marginTop: SPACING.md }]}>
                                <FontAwesome5 name="graduation-cap" size={24} color={COLORS.primary} />
                                <View style={styles.infoTextContainer}>
                                    <Text style={styles.infoLabel}>Formación Académica</Text>
                                    <Text style={styles.infoValue}>{personalInfo.education}</Text>
                                    <Text style={styles.infoSubValue}>{personalInfo.institution}</Text>
                                </View>
                            </View>
                        </View>
                    </FadeInView>

                    {/* 3. TECHNOLOGIES CAROUSEL WIDGET */}
                    <FadeInView delay={300} style={[styles.widget, { width: bentoFull, paddingHorizontal: 0, paddingBottom: 0 }]}>
                        <LinearGradient colors={['rgba(0, 240, 255, 0.1)', 'rgba(0, 0, 0, 0)']} style={styles.widgetGradient} />
                        
                        <Text style={[styles.widgetTitle, { paddingHorizontal: SPACING.xl }]}>Tecnologías</Text>
                        
                        <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.techCarouselContent}
                            snapToInterval={140 + SPACING.md} 
                            decelerationRate="fast"
                        >
                            {skills.map((skill) => (
                                <TechWidget key={skill.name} skill={skill} />
                            ))}
                        </ScrollView>
                    </FadeInView>

                    {/* 4. PROJECTS WIDGET */}
                    <FadeInView delay={400} style={[styles.widget, { width: bentoFull, paddingHorizontal: 0, backgroundColor: 'transparent', borderWidth: 0 }]}>
                        <Text style={[styles.widgetTitle, { paddingHorizontal: SPACING.xl, fontSize: FONT_SIZE.huge }]}>Mis Proyectos</Text>
                        
                        <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.projectsCarouselContent}
                            snapToInterval={width > 768 ? 400 + SPACING.md : (width * 0.85) + SPACING.md}
                            decelerationRate="fast"
                        >
                            {projects.map((project) => (
                                <View key={project.id} style={{ width: width > 768 ? 400 : width * 0.85 }}>
                                    <ProjectCard project={project} onPress={() => handleProjectPress(project)} />
                                </View>
                            ))}
                        </ScrollView>
                    </FadeInView>

                </View>

                {/* FOOTER WIDGET */}
                <View style={styles.footerBox}>
                    <Text style={styles.footerTextWhite}>© {new Date().getFullYear()} {personalInfo.name}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingVertical: SPACING.xl,
        alignItems: 'center',
    },
    bentoGrid: {
        width: '100%',
        maxWidth: 1200,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.lg,
        paddingHorizontal: SPACING.lg,
        justifyContent: 'space-between',
    },
    widget: {
        backgroundColor: COLORS.surface,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: SPACING.xl,
        overflow: 'hidden',
        position: 'relative',
        ...SHADOWS.glass,
        marginBottom: SPACING.sm,
    },
    widgetGradient: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.5,
    },
    widgetTitle: {
        fontSize: FONT_SIZE.xxl,
        fontWeight: '900',
        color: COLORS.text,
        marginBottom: SPACING.lg,
        letterSpacing: -1,
    },
    
    // Hero Styles
    heroTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.lg,
        marginBottom: SPACING.lg,
    },
    glowRing: {
        padding: 4,
        borderRadius: 50,
        backgroundColor: COLORS.surfaceVariant,
        borderWidth: 2,
        borderColor: COLORS.primary,
        ...SHADOWS.neonBlue,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    heroTextCol: {
        flex: 1,
    },
    greetingText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    nameText: {
        fontSize: 40,
        fontWeight: '900',
        color: COLORS.text,
        letterSpacing: -1,
        lineHeight: 44,
    },
    titleText: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.secondary,
        fontWeight: '600',
    },
    bioText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
        lineHeight: 26,
        marginBottom: SPACING.xl,
    },
    socialRow: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    socialBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    // Info Styles
    infoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.lg,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        width: '45%',
        minWidth: 150,
    },
    infoTextContainer: {
        flex: 1,
    },
    infoLabel: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textMuted,
        textTransform: 'uppercase',
        fontWeight: '700',
    },
    infoValue: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.text,
        fontWeight: '800',
    },
    infoSubValue: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textLight,
    },

    // Tech Widget Styles
    techCarouselContent: {
        paddingHorizontal: SPACING.xl,
        paddingBottom: SPACING.xl,
        gap: SPACING.md,
    },
    techWidgetCard: {
        width: 140,
        height: 160,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: SPACING.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    techImageContainer: {
        width: 60,
        height: 60,
        marginBottom: SPACING.sm,
        justifyContent: 'center',
        alignItems: 'center',
    },
    techImage: {
        width: '100%',
        height: '100%',
    },
    techName: {
        fontSize: FONT_SIZE.md,
        fontWeight: '700',
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: SPACING.xs,
    },
    techPercentBadge: {
        backgroundColor: 'rgba(0, 240, 255, 0.1)',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0, 240, 255, 0.3)',
    },
    techPercentText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: '800',
    },

    // Projects Styles
    projectsCarouselContent: {
        paddingHorizontal: SPACING.xl,
        gap: SPACING.md,
        paddingBottom: SPACING.xxl,
    },

    // Footer
    footerBox: {
        width: '100%',
        paddingVertical: SPACING.xl,
        alignItems: 'center',
        marginTop: SPACING.xl,
    },
    footerTextWhite: {
        color: COLORS.textMuted,
        fontSize: FONT_SIZE.sm,
        fontWeight: '600',
    },
});
