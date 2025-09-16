// src/context/ThemeContext.js

import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContextContext.js";

// Create the Provider component
export const ThemeProvider = ({ children }) => {
  // 1. State to hold the current theme.
  // Defaults to 'light' mode.
  const [theme, setTheme] = useState("light");

  // 2. useEffect to apply the theme to the body and save it.
  // This runs whenever the 'theme' state changes.
  useEffect(() => {
    // Add the current theme as a class to the <html> element for Tailwind dark mode
    document.documentElement.className = theme;
    // Save the user's preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 4. Provide the theme state and the toggle function to children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
