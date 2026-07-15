// Updated theme - Brittany Chiang Style (Navy & Cyan)
export const COLORS = {
    primary: "#64ffda", // Cyan/Mint
    primaryDark: "#00b39e",
    primaryLight: "#affff1",
    secondary: "#8892b0", // Slate
    background: "#0a192f", // Deep Navy
    surface: "#112240", // Light Navy
    surfaceVariant: "#233554", // Lightest Navy
    text: "#ccd6f6", // Lightest Slate
    textLight: "#a8b2d1", // Light Slate
    textMuted: "#8892b0", // Slate
    error: "#EF4444", 
    success: "#64ffda", 
    warning: "#F59E0B", 
    info: "#64ffda",
    border: "#233554",
    divider: "#112240", 
    accent: "#64ffda",
    gradientStart: "#112240",
    gradientEnd: "#233554",
};

export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const FONT_SIZE = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    huge: 32,
    giant: 56,
};

export const SHADOWS = {
    neonBlue: {
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 10,
    },
    neonPink: {
        shadowColor: COLORS.secondary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 10,
    },
    glass: {
        shadowColor: "#020c1b",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    },
};
