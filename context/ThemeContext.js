import { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [buttonColor, setButtonColor] = useState("red");

  function handleToggleTheme() {
    setButtonColor(buttonColor === "red" ? "blue" : "red");
  }

  return (
    <ThemeContext.Provider
      value={{
        buttonColor: buttonColor,
        textColor: "white",
        toggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
