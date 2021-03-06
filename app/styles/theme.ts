import { theme as chakraTheme, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    yellow: '#FBD802',
    light: '#FFFFFF',
    dark: '#181718',
    red: '#FF4848',
  },
  fonts: {
    ...chakraTheme.fonts,
    heading: 'Montserrat',
    body: 'Raleway',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
});

export default theme;
