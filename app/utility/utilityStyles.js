import { Dimensions, StyleSheet } from 'react-native';

// Get screen dimensions for utilities like `h.screen`
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

// ========================================================================
// ✨ COLOR PALETTE
// Centralize your app's colors for consistency.
// ========================================================================
export const colorPalette = {
  primary: '#007AFF',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
};

// ========================================================================
// 🎨 COLOR UTILITIES
// ========================================================================
export const bg = StyleSheet.create({
  primary: { backgroundColor: colorPalette.primary },
  secondary: { backgroundColor: colorPalette.secondary },
  success: { backgroundColor: colorPalette.success },
  danger: { backgroundColor: colorPalette.danger },
  warning: { backgroundColor: colorPalette.warning },
  info: { backgroundColor: colorPalette.info },
  light: { backgroundColor: colorPalette.light },
  dark: { backgroundColor: colorPalette.dark },
  white: { backgroundColor: colorPalette.white },
  black: { backgroundColor: colorPalette.black },
  gray100: { backgroundColor: colorPalette.gray100 },
  gray500: { backgroundColor: colorPalette.gray500 },
  gray900: { backgroundColor: colorPalette.gray900 },
  transparent: { backgroundColor: colorPalette.transparent },
});

export const text = StyleSheet.create({
  primary: { color: colorPalette.primary },
  success: { color: colorPalette.success },
  danger: { color: colorPalette.danger },
  light: { color: colorPalette.light },
  dark: { color: colorPalette.dark },
  white: { color: colorPalette.white },
  gray500: { color: colorPalette.gray500 },
});

export const border = StyleSheet.create({
  primary: { borderColor: colorPalette.primary },
  success: { borderColor: colorPalette.success },
  gray300: { borderColor: colorPalette.gray300 },
  transparent: { borderColor: colorPalette.transparent },
});


// ========================================================================
// 📦 FLEXBOX (fb)
// ========================================================================
export const fb = StyleSheet.create({
  // Display & Direction
  flex: { display: 'flex' },
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flexNone: { flex: 0 },
  row: { flexDirection: 'row' }, // [cite: 5]
  col: { flexDirection: 'column' }, // [cite: 5]
  rowReverse: { flexDirection: 'row-reverse' }, // [cite: 5]

  // Justify Content (ju)
  juCenter: { justifyContent: 'center' }, // [cite: 5]
  juStart: { justifyContent: 'flex-start' }, // [cite: 5]
  juEnd: { justifyContent: 'flex-end' }, // [cite: 5]
  juBetween: { justifyContent: 'space-between' }, // [cite: 5]
  juAround: { justifyContent: 'space-around' }, // [cite: 5]
  juEvenly: { justifyContent: 'space-evenly' }, // [cite: 5]

  // Align Items (ai)
  aiCenter: { alignItems: 'center' }, // [cite: 5]
  aiStart: { alignItems: 'flex-start' }, // [cite: 5]
  aiEnd: { alignItems: 'flex-end' }, // [cite: 5]
  aiStretch: { alignItems: 'stretch' }, // [cite: 5]
  aiBaseline: { alignItems: 'baseline' }, // [cite: 5]

  // Flex Wrap
  wrap: { flexWrap: 'wrap' }, // [cite: 5]
  nowrap: { flexWrap: 'nowrap' }, // [cite: 5]

  // Common Combinations
  center: { justifyContent: 'center', alignItems: 'center' }, // [cite: 5]
  rowCenter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, // [cite: 5]
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, // [cite: 5]
  colCenter: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }, // [cite: 6]
});


// ========================================================================
// 📐 SPACING & SIZING (p, m, w, h)
// We generate these programmatically to keep the code DRY.
// ========================================================================
const spacing = {};
const FONT_SIZES = {};
const BORDER_WIDTHS = {};
const BORDER_RADIUS = {};
const OPACITY = {};
const Z_INDEX = {};
const widths = {
    auto: 'auto',
    full: '100%', // [cite: 9]
    screen: screenWidth, // [cite: 9]
};
const heights = {
    auto: 'auto',
    full: '100%', // [cite: 9]
    screen: screenHeight, // [cite: 9]
};

// Generate values for spacing, fonts, etc.
for (let i = 0; i <= 100; i++) {
  const SIZES_TO_GENERATE = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 96, 100];
  if (SIZES_TO_GENERATE.includes(i)) {
      spacing[i] = i * 4; // Using a 4px scale, so p[4] is 16px
      FONT_SIZES[i] = i;
      BORDER_RADIUS[i] = i;
      widths[`${i}p`] = `${i}%`;
      heights[`${i}p`] = `${i}%`;
      OPACITY[i] = i / 100;
  }
  if (i <= 10) BORDER_WIDTHS[i] = i;
  if (i <= 1000 && i % 10 === 0) Z_INDEX[i] = i; // Z-Index in steps of 10
}

const createDirectionalStyles = (propName, values) => {
  const styles = {};
  for (const key in values) {
      styles[key] = { [propName]: values[key] };
      styles[`t${key}`] = { [`${propName}Top`]: values[key] };
      styles[`b${key}`] = { [`${propName}Bottom`]: values[key] };
      styles[`l${key}`] = { [`${propName}Left`]: values[key] };
      styles[`r${key}`] = { [`${propName}Right`]: values[key] };
      styles[`x${key}`] = { [`${propName}Horizontal`]: values[key] };
      styles[`y${key}`] = { [`${propName}Vertical`]: values[key] };
  }
  return StyleSheet.create(styles);
};

export const p = createDirectionalStyles('padding', spacing);
export const m = createDirectionalStyles('margin', spacing);

export const w = StyleSheet.create(widths);
export const h = StyleSheet.create(heights);


// ========================================================================
// 📝 TYPOGRAPHY (fs, fw, ta)
// ========================================================================
export const fs = StyleSheet.create(FONT_SIZES); // [cite: 26]
export const fw = StyleSheet.create({ // [cite: 26]
  thin: { fontWeight: '100' },
  light: { fontWeight: '300' },
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  black: { fontWeight: '900' },
});
export const ta = StyleSheet.create({ // [cite: 2]
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  justify: { textAlign: 'justify' },
});


// ========================================================================
// 🖼️ BORDERS & SHADOWS (br, bw, shadow)
// ========================================================================
export const br = StyleSheet.create({ ...BORDER_RADIUS, full: { borderRadius: 9999 } }); // [cite: 27]
export const bw = StyleSheet.create(BORDER_WIDTHS); // [cite: 27]
export const shadow = StyleSheet.create({ // [cite: 3]
  sm: { // [cite: 11]
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: { // [cite: 11]
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: { // [cite: 11]
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
});


// ========================================================================
// 📍 POSITIONING (pos, inset, z)
// ========================================================================
export const pos = StyleSheet.create({
  absolute: { position: 'absolute' }, // [cite: 2]
  relative: { position: 'relative' }, // [cite: 2]
});
export const inset = StyleSheet.create(createDirectionalStyles('', spacing)['']);
export const z = StyleSheet.create(Z_INDEX); // [cite: 28]