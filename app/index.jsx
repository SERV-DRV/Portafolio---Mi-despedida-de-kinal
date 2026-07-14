import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, useWindowDimensions, Image } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SPACING, FONT_SIZE } from "../src/shared/constants/theme";
import ProjectCard from "../src/features/home/components/ProjectCard";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, Easing } from "react-native-reanimated";
import { personalInfo, skills, projects } from "../src/data/portfolioData";

const FadeInText = ({ text, delay, style }) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(20);

    useEffect(() => {
        opacity.value = withDelay(delay, withTiming(1, { duration: 800, easing: Easing.out(Easing.exp) }));
        translateY.value = withDelay(delay, withTiming(0, { duration: 800, easing: Easing.out(Easing.exp) }));
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    return <Animated.Text style={[style, animatedStyle]}>{text}</Animated.Text>;
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

    const getCardWrapperStyle = () => {
        if (width > 768) {
            return { width: 400 }; 
        }
        return { width: width * 0.85 }; 
    };

    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                
                <View style={styles.heroBox}>
                    <View style={styles.heroInner}>
                        <View style={styles.header}>
                            <View style={styles.socialIcons}>
                                <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.compuTrabajo)} style={styles.socialButton}>
                                    <FontAwesome5 name="briefcase" size={24} color="#000000" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.email)} style={styles.socialButton}>
                                    <FontAwesome5 name="envelope" size={24} color="#000000" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.github)} style={styles.socialButton}>
                                    <FontAwesome5 name="github" size={24} color="#000000" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.linkedin)} style={styles.socialButton}>
                                    <FontAwesome5 name="linkedin" size={24} color="#000000" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.heroContent}>
                            <View style={styles.profileContainer}>
                                <Image 
                                    source={require('../assets/images/me.jpg')} 
                                    style={styles.profileImage} 
                                />
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
                                <View style={styles.eduItem}>
                                    <View style={styles.eduDot} />
                                    <View>
                                        <Text style={styles.eduTitle}>{personalInfo.education}</Text>
                                        <Text style={styles.eduSub}>{personalInfo.institution}</Text>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={styles.skillsColumn}>
                                <Text style={styles.subTitleWhite}>Tecnologías</Text>
                                <View style={styles.skillsGrid}>
                                    {skills.map(skill => (
                                        <View key={skill.name} style={styles.skillBarContainer}>
                                            <View style={styles.skillLabelRow}>
                                                <Text style={styles.skillName}>{skill.name}</Text>
                                                <Text style={styles.skillPercent}>{skill.percentage}%</Text>
                                            </View>
                                            <View style={styles.skillBarBackground}>
                                                <View style={[styles.skillBarFill, { width: `${skill.percentage}%` }]} />
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.projectsSection}>
                    <View style={styles.projectsContent}>
                        <View style={styles.projectsHeader}>
                            <Text style={styles.sectionTitleBlack}>Mis Proyectos</Text>
                            <Text style={styles.projectsSubtitle}>Una colección del trabajo que he realizado.</Text>
                        </View>
                        
                        <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false} 
                            contentContainerStyle={styles.projectsScrollContainer}
                            snapToInterval={width > 768 ? 400 + SPACING.md : (width * 0.85) + SPACING.md}
                            decelerationRate="fast"
                        >
                            {projects.map((project) => {
                                return (
                                    <View key={project.id} style={[styles.projectCardWrapper, getCardWrapperStyle()]}>
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
                                <FontAwesome5 name="github" size={24} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSocialPress(personalInfo.links.linkedin)} style={styles.footerSocialButton}>
                                <FontAwesome5 name="linkedin" size={24} color="#FFFFFF" />
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
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {},
    
    heroBox: {
        backgroundColor: '#FFFFFF',
        paddingTop: SPACING.xl,
    },
    heroInner: {
        maxWidth: 1200,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.xl,
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
        padding: SPACING.sm,
    },
    heroContent: {
        paddingTop: SPACING.md,
        paddingBottom: SPACING.xl,
    },
    profileContainer: {
        marginBottom: SPACING.lg,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: COLORS.info,
    },
    welcomeText: {
        fontSize: 48,
        fontWeight: "900",
        color: COLORS.info,
        marginBottom: SPACING.xs,
        letterSpacing: -1,
    },
    titleText: {
        fontSize: 32,
        fontWeight: "bold",
        color: '#000000',
        marginBottom: SPACING.md,
        letterSpacing: -0.5,
    },
    generalDataRow: {
        flexDirection: 'row',
        gap: SPACING.sm,
        marginBottom: SPACING.lg,
    },
    badge: {
        backgroundColor: '#F2F2F7',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.xs,
        borderRadius: 20,
    },
    badgeText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: FONT_SIZE.sm,
    },
    description: {
        fontSize: 18,
        color: '#555555',
        lineHeight: 28,
        maxWidth: 700,
        fontWeight: '500',
    },

    skillsSection: {
        backgroundColor: '#0A0A0A',
        paddingVertical: SPACING.xl * 1.5,
    },
    sectionInner: {
        maxWidth: 1280,
        alignSelf: "center",
        width: "100%",
        paddingHorizontal: SPACING.lg,
    },
    sectionTitleWhite: {
        fontSize: 32,
        fontWeight: "900",
        color: '#FFFFFF',
        marginBottom: SPACING.xl,
        letterSpacing: -0.5,
    },
    skillsRow: {
        flexDirection: 'row',
        gap: SPACING.xl,
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
        fontWeight: "bold",
        color: COLORS.info,
        marginBottom: SPACING.lg,
    },
    eduItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: SPACING.md,
    },
    eduDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: COLORS.info,
        marginTop: 6,
        marginRight: SPACING.md,
    },
    eduTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    eduSub: {
        fontSize: 16,
        color: '#AAAAAA',
    },
    skillsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.md,
    },
    skillBarContainer: {
        width: '45%',
        minWidth: 140,
        marginBottom: SPACING.sm,
    },
    skillLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    skillName: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: FONT_SIZE.sm,
    },
    skillPercent: {
        color: '#AAAAAA',
        fontSize: FONT_SIZE.sm,
    },
    skillBarBackground: {
        height: 6,
        backgroundColor: '#333333',
        borderRadius: 3,
        overflow: 'hidden',
    },
    skillBarFill: {
        height: '100%',
        backgroundColor: COLORS.info,
        borderRadius: 3,
    },

    projectsSection: {
        backgroundColor: '#FFFFFF',
        paddingVertical: SPACING.xl * 1.5,
    },
    projectsContent: {
        maxWidth: 1280,
        alignSelf: "center",
        width: "100%",
    },
    projectsHeader: {
        alignItems: "flex-start",
        marginBottom: SPACING.md,
        paddingHorizontal: SPACING.lg,
    },
    sectionTitleBlack: {
        fontSize: 32,
        fontWeight: "900",
        color: '#000000',
        marginBottom: SPACING.xs,
        letterSpacing: -0.5,
    },
    projectsSubtitle: {
        fontSize: 16,
        color: '#555555',
        paddingHorizontal: SPACING.lg, 
    },
    projectsScrollContainer: {
        paddingHorizontal: SPACING.md,
        paddingBottom: SPACING.xl,
    },
    projectCardWrapper: {
        paddingHorizontal: SPACING.sm,
    },

    footerBox: {
        backgroundColor: '#0A0A0A',
        paddingVertical: SPACING.xl * 1.5,
        paddingHorizontal: SPACING.lg,
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
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    footerSocials: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    footerSocialButton: {
        padding: SPACING.xs,
    },
});
