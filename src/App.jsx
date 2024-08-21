import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/section/HeroSection";
import { SkillsSection } from "./components/section/SkillsSection";
import { ExperienceSection } from "./components/section/ExperienceSection";
import { EducationSection } from "./components/section/EducationSection";
import { StarCanva } from "./components/canvas/StarCanva";
import { Projects } from "./components/section/Projects";
import { Contact } from "./components/section/Contact";
import { Footer } from "./components/section/Footer";
import { useState } from "react";

//  create styled components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

//  Wrapper
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Body>
        <div>
          <HeroSection isMobileMenuOpen={isMobileMenuOpen} />
          <Wrapper>
            <SkillsSection />

            {/* <ExperienceSection /> */}
          </Wrapper>

          {/*  projects */}
          <Projects />

          <Wrapper>
            <EducationSection />
            <Contact />
          </Wrapper>
          <Footer />
        </div>
      </Body>
    </ThemeProvider>
  );
}

export default App;
