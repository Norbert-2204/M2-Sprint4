import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import CharactersContainer from "./components/DisneyCharacters";

const light = {
  background: "#fff",
  color: "#000",
  blockBackground: "#a7a7a7",
};
const dark = {
  background: "#000",
  color: "#fff",
  blockBackground: "#000",
};

const GlobalStyle = createGlobalStyle`
body {
background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme.color}
}
`;

function App() {
  const [isLigthMode, setIsLigthMode] = useState(false);

  const toggleTheme = () => setIsLigthMode((prev) => !prev);

  return (
    <>
      <ThemeProvider theme={isLigthMode ? dark : light}>
        <GlobalStyle />
        <Header isLigthMode={isLigthMode} toggleTheme={toggleTheme} />
        <CharactersContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
