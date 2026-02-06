/**
 * Centralized Theme Configuration
 * Import and use these constants throughout the project for consistency
 */

export const theme = {
  colors: {
    primary: {
      DEFAULT: "#00f2ff",
      light: "#33f4ff",
      dark: "#00d9e6",
    },
    secondary: {
      DEFAULT: "#7000ff",
      light: "#8c33ff",
      dark: "#5c00d9",
    },
    background: {
      DEFAULT: "#020205",
      card: "#10131a",
      cardDark: "#0a0d14",
    },
    text: {
      primary: "#e0e0ff",
      secondary: "#ffffff",
    },
    border: {
      primary: "#00f2ff",
      secondary: "#7000ff",
    },
  },
  fonts: {
    orbitron: "'Orbitron', sans-serif",
    inter:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    centuryGothic: "'Century Gothic', sans-serif",
  },
  opacity: {
    5: 0.05,
    10: 0.1,
    20: 0.2,
    30: 0.3,
    40: 0.4,
    60: 0.6,
    70: 0.7,
    80: 0.8,
    90: 0.9,
    95: 0.95,
  },
};

/**
 * Helper function to apply opacity to hex colors
 * @param {string} hexColor - Hex color code (e.g., '#00f2ff')
 * @param {number} opacity - Opacity value (0-1)
 * @returns {string} - RGBA color string
 */
export const applyOpacity = (hexColor, opacity) => {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Usage Examples:
 *
 * // In JSX:
 * import { theme } from './theme';
 *
 * <div style={{ color: theme.colors.primary.DEFAULT }}>
 *   Cyan text
 * </div>
 *
 * <div style={{ backgroundColor: applyOpacity(theme.colors.primary.DEFAULT, 0.2) }}>
 *   Cyan background with 20% opacity
 * </div>
 *
 * // In Three.js or other libraries:
 * const material = new THREE.MeshBasicMaterial({
 *   color: theme.colors.primary.DEFAULT
 * });
 */

export default theme;
