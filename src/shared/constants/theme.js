// Updated theme - new design
export const COLORS = {
    primary: "#00F0FF", // Cyber Blue
    primaryDark: "#00B8C4",
    primaryLight: "#5CFAFF",
    secondary: "#FF007F", // Neon Pink
    background: "#0A0A0A", // Deep black/gray
    surface: "rgba(30, 41, 59, 0.4)", // Glassmorphism base
    surfaceVariant: "rgba(255, 255, 255, 0.05)",
    text: "#FFFFFF",
    textLight: "#A0AEC0",
    textMuted: "#718096", 
    error: "#EF4444", 
    success: "#10B981", 
    warning: "#F59E0B", 
    info: "#00F0FF",
    border: "rgba(255, 255, 255, 0.1)",
    divider: "rgba(255, 255, 255, 0.05)", 
    accent: "#FF007F",
    gradientStart: "#00F0FF",
    gradientEnd: "#FF007F",
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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 24,
        elevation: 8,
    },
};
