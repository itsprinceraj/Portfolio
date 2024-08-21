import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/section/HeroSection";
import { SkillsSection } from "./components/section/SkillsSection";
import { ExperienceSection } from "./components/section/ExperienceSection";

//  create styled components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
      </Body>
    </ThemeProvider>
  );
}

export default App;
