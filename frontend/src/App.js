import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPages from "./pages/landingPages";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/Account";
import NotFoundPage from "./pages/NotFoundPage";
import ThemeContext from "./context/ThemeContent";

function App() {
  const [isDarkMode, isSetDarkMode] = useState(false);

  useEffect(() => {
    const staredTheme = localStorage.getItem("isDarkMode");
    if (staredTheme === "true") {
      isSetDarkMode(true);
    }
  }, []);

  function toggleTheme() {
    isSetDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode.toString());
      return newMode;
    });
  }
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}> {/* Corregido a toggleTheme */}
      <div className={`${isDarkMode ? "dark" : "light"} min-h-screen flex flex-col`}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPages />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
