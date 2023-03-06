import Button from "../components/Button";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function HomePage() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Button></Button>
      <Button></Button>
      <div>
        <Link href="/products">To Products</Link>
      </div>
    </div>
  );
}
