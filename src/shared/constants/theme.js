export const COLORS = {
    primary: "#00D26A",
    primaryDark: "#00A852",
    primaryLight: "#4DFFA0",
    secondary: "#2B69FB",
    background: "#0A0A0A",
    surface: "#FFFFFF",
    surfaceVariant: "#F2F2F7",
    text: "#FFFFFF",
    textLight: "#8E8E93",
    textMuted: "#AEAEB2", 
    error: "#FF3B30", 
    success: "#00D26A", 
    warning: "#FF9500", 
    info: "#2B69FB",
    border: "#000000",
    divider: "#000000", 
    accent: "#2B69FB",
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
};

export const SHADOWS = {
    sm: {
        shadowColor: COLORS.primaryDark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    md: {
        shadowColor: COLORS.primaryDark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    lg: {
        shadowColor: COLORS.primaryDark,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 8,
    },
};
