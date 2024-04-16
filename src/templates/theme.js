import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    typography: {
      fontFamily: "Poppins, Caveat, Protest ,Arial ", 
        button: {
            fontPalette: "light",
            
          },
    },
    palette: {
        mode: "light",
        common: {
            black: "#15222a",
            white: "#f4f1ea"
        },
        primary: {
            main: "#03a9f4",
        },
        secondary: {
            main: "#1de9b6"
        },
        error: {
            main: "#c42700"
        },
        warning: {
            main: "#ffb74d"
        },
        info: {
            main: "#29b6f6"
        },
        success: {
            main: "#48b4a5"
        }
    }
  });

  
  export const darkTheme = createTheme({
    typography: {
      fontFamily: "Poppins, Caveat, Protest Riot ,Arial ", 
      button: {
        fontPalette: "dark"
      },
    },
    palette: {
        mode: "dark",
        common: {
            black: "#15222a",
            white: "#f4f1ea"
        },
        primary: {
            main: "#03a9f4",
        },
        secondary: {
            main: "#1de9b6"
        },
        error: {
            main: "#c42700"
        },
        warning: {
            main: "#ffb74d"
        },
        info: {
            main: "#29b6f6"
        },
        success: {
            main: "#48b4a5"
        }
    }
  });