import { useState } from "react";
import LandingPages from "./pages/landingPages";

function App() {
  const [darkMode, setDarkMode] = useState("dark");

  function toggleDarkMode() {
    if (darkMode === "dark") {
      setDarkMode("light");
    } else {
      setDarkMode("dark");
    }
  }
  return (
    <div className={`${darkMode === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
      <LandingPages />
    </div> 
  );
}
export default App;
