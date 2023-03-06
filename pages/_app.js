import GlobalStyle from "../styles";
import { ThemeContextProvider } from "../context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
