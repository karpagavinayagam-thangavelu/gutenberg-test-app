import { createTheme } from "@mui/material";
import { url } from "inspector";

export const paletteTheme = createTheme({
  palette: {
    background: {
      paper: "",
      default: "#F8F7FF",
    },
    primary: {
      main: "#5E56E7",
      contrastText: "#F8F7FF",
    },
    grey: {
      "100": "#F0F0F6",
      "200": "#A0A0A0",
      "300": "#333333",
    },
  },
});

export const theme = createTheme({
  ...paletteTheme,
  typography: (theme: any) => ({
    allVariants: {
      fontFamily: `'Montserrat', sans-serif`,
    },
    h1: {
      fontSize: "48px",
      fontWeight: "bold",
      color: theme.primary.main,
      textTransform: "capitalize",
    },
    h2: {
      fontSize: "30px",
      fontWeight: "bold",
      color: theme.primary.main,
      textTransform: "capitalize",
    },

    body1: {
      fontSize: "16px",
      fontWeight: "normal",

      color: theme.grey["300"],
    },
    body2: {
      fontSize: "12px",
     // fontWeight: "normal",
      color: theme.grey["300"],
      fontWeight: "600",
      "&.book-title": {
        textTransform: "uppercase",
        fontWeight: "bolder"
      }
    },
  }),
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.subTitle": {
            backgroundImage: `url("/images/Pattern.svg")`,
            padding: "20px",
          },
          "&.pageTitle": {
            backgroundColor: "#fff",
            padding: "20px",
          },
          "&.book-list": {
            paddingTop: "30px"
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "0 10px",
          height: "50px",
          marginBottom: "20px",
          boxShadow: "0 2px 5px 0 rgba(211, 209, 238, 0.5)",
          "&.book": {
            maxWidth: "140px",
            minWidth: "140px",
            boxShadow: "none",
            cursor: "pointer"
          }
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&.catalog": {
            padding: "20px",
            "& .avatar": {
              borderRadius: 0,
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "0 10px",
          height: "40px",
          fontWeight: "bolder",
          "&::placeholder": {
            fontWeight: "normal",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          textTransform: "capitalize"
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: "114px",
          margin: "auto",
          height: "162px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px 0 rgba(211, 209, 238, 0.5)",
        },
      },
    },
  },
});
