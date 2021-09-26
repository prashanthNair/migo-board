import { ThemeOptions } from '@mui/material/styles';

const defaultTypography: ThemeOptions['typography'] = {
  allVariants: {
    fontFamily: 'Montserrat',
  },
  h1: {
    fontSize: '52px',
  },
  h2: {
    fontSize: '44px',
  },
  h3: {
    fontSize: '32px',
  },
  h4: {
    fontSize: '26px',
  },
  h5: {
    fontSize: '20px',
  },
  h6: {
    fontSize: '18px',
  },
};

export const light: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1B75BB',
      100: '#E5F2FF',
      200: '#CCE5FF',
      300: '#B3D8FF',
      400: '#99CBFF',
      500: '#80BFFF',
      600: '#66B2FF',
      700: '#4DA5FF',
      800: '#3398FF',
      900: '#218DE1',
    },
    secondary: {
      main: '#F82E7D',
      100: '#FFEAF2',
      200: '#FFD0E2',
      400: '#FFB4D1',
      600: '#F98CB7',
      800: '#FF619F',
    },
    success: {
      main: '#2AC769',
      dark: '#1AB759',
      light: '#40DD7F',
    },
    warning: {
      main: '#F6A609',
      dark: '#F6A609',
      light: '#FFBC1F',
    },
    error: {
      main: '#FB4E4E',
      dark: '#E93C3C',
      light: '#FF6262',
    },
  },

  typography: {
    ...defaultTypography,
    /* typography overrides goes here */
  },
};

export const dark: ThemeOptions = {
  palette: {
    ...light.palette,
    /* Dark overrides goes here */
  },
  typography: {
    ...defaultTypography,
    /* typography overrides goes here */
  },
};
