import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontSize: 24
        },
        h5: {
          fontSize: 20,
          fontWeight: 600
        },
        h6: {
          fontSize: 16,
          fontWeight: 600,
        },
        body1: {
          fontSize: 16
        },
        body2: {
          fontSize: 14
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#FF8225",
    },
    secondary: {
      main: "#85301E",
    },
    warning: {
      main: "#85301E",
      light: "#C94A4A"
    },
    info: {
      main: "#F7E5D1",
      light: "#F8F5EE",
      dark: "#E9CAA8",
    }
  },
  typography: {
    fontFamily: [
      // '"Times New Roman"',
      '"Source Sans 3"',
      "Roboto",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
