import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export default function Button() {
  const { buttonColor, textColor } = useContext(ThemeContext);
  return (
    <button style={{ backgroundColor: buttonColor, color: textColor }}>
      Ich bin ein Button
    </button>
  );
}
