/* eslint-disable no-unused-vars */
import { ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Calculator from "./pages/Calculator";
import Gallery from "./pages/Gallery";

// this is the main app component that sets up the theme, routing, and layout for the application.
// It uses Material-UI for styling and theming, and React Router for navigation between different pages.
// The dark mode state is managed here and passed down to the Navbar component to allow toggling between light and dark themes.

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
