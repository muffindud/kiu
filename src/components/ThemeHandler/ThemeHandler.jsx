import { createContext, useLayoutEffect, useState, useContext } from "react";

const ThemeHandler = createContext();

const ThemeHandlerProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(localStorage.getItem("theme"));
    document.body.style.backgroundColor = localStorage.getItem("theme") === "dark" ? "#444" : "#ffffff";
  }

  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
  }, [theme]);

  return (
    <ThemeHandler.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeHandler.Provider>
  );
};

const useThemeHandler = () => {
  const context = useContext(ThemeHandler);

  if (!context) {
    throw new Error("useThemeHandler must be used within a ThemeHandlerProvider");
  }

  return context;
}

export { ThemeHandlerProvider, useThemeHandler };
