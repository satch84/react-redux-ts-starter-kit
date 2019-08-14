import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    breakpoints: {
        keys: [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
        ],
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
    },
    palette: {
        primary: {
            light: '#BCD7EC',
            main: '#7AAFD9',
            dark: '#4991CB',
            contrastText: '#366A94',
        },
        secondary: {
            light: '#C94147',
            main: '#DB8084',
            dark: '#E7AAAD',
            contrastText: '#BE171F',
        },
        common: {
            white: '#FFFFFF',
            black: '#000000',
        },
        background: {
            default: '#FFFFFF',
            paper: '#EEEEEE',
        }
    },
    typography: {
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.6rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.3rem',
            fontWeight: 400,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 200,
        },
        body2: {
            fontSize: '0.8rem',
            fontWeight: 200,
        },
        subtitle1: {
            fontSize: '1.2rem',
            color: '#eee',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 4,
                fontSize: '1rem',
                height: 36,
                '& span': {
                    color: "black",
                },
            },
        },
    },
});
