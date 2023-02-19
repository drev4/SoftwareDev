import {createTheme} from "@mui/material";

export const appTheme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#F04F66',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#CEEEF9',
            main: '#172D3B',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        }
    }
})