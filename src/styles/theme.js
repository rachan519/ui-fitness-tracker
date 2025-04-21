// const lightTheme = {
//     colors: {
//       primary: '#00A3A3',
//       secondary: '#F8F9FA',
//       accent: '#FF8C66',
//       text: '#333333',
//       success: '#34C759',
//       background: '#F8F9FA',
//       innerBackground: '#F8F9FC',
//       border: '#1A2A4A',
//       card: '#FFFFFF',
//     },
//   };
  
//   const darkTheme = {
//     colors: {
//       primary: '#4DD0E1', // Lighter teal for better contrast on dark background
//       secondary: '#1A2A44', // Dark slate for background
//       accent: '#FF8C66',
//       text: '#E0E0E0', // Light gray for text
//       success: '#34C759',
//       background: '#1A2A44',
//       innerBackground: '#1A2A4A',
//       border: '#1A2A4A',
//       card: '#2A3B5A', // Slightly lighter than background for cards
//     },
//   };
const darkTheme = {
  colors: {
    primary: '#7B61FF',        // Vibrant purple for branding & primary actions
    secondary: '#0D1B2A',      // Deep navy background (sidebar, layout)
    accent: '#00D1FF',         // Cyan for charts, rings, progress visuals
    text: '#F3F4F6',           // Light/off-white text
    muted: '#D1D5DB',          // For secondary UI text
    success: '#34C759',        // Optional: used for goal success
    background: '#0D1B2A',     // App background
    innerBackground: '#1B263B',// Lighter card/bg contrast
    border: '#334155',         // Slate border for sections
    card: '#1B263B',           // Cards and container blocks
    hover: '#2F3B55',          // Subtle hover background
  },
};
const lightTheme = {
  colors: {
    primary: '#7B61FF',        // Same purple for consistency
    secondary: '#F3F4F6',      // Light background (sidebars/cards)
    accent: '#00B4CC',         // Slightly deeper cyan on white bg
    text: '#1F2937',           // Dark gray for primary text
    muted: '#6B7280',          // For helper/secondary text
    success: '#2ECC71',        // Optional green success
    background: '#FFFFFF',     // Clean white layout
    innerBackground: '#F9FAFB',// Card contrast
    border: '#E5E7EB',         // Soft gray for borders
    card: '#FFFFFF',           // Flat card background
    hover: '#EAE4FF',          // Light purple on hover
  },
};

  
  export { lightTheme, darkTheme };