import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Logo from "../images/name_logo.png";
import { Bio } from "../data/constants";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
//  create styled components
//  if the Component is exported from outside or react core library then you have to write like this
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg}; 
  height: 80px;
  margin:  auto;
  padding: 1rem 0;
  dispaly: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10
  overflow-x : none;
`;

//  nav container
const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;
`;

//  nav logo
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 4px;
  font-weight: 500;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  align-items: center;
`;

//  navigation items
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 4px;
  list-style: none;
  text-decoration: none;
  color: inherit;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//  navigation link
const Navlink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  font-size: 1.2rem;
`;

//  github button container
const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//  github link
const GithubButton = styled(LinkR)`
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

//   set css property for mobile devices
const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 200ms ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "1000" : "-1000")};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

//  create a linkedin button
const LInkedinButton = styled(LinkR)`
  border: 2px solid rgb(30, 101, 201);
  color: white;
  justify-content: center;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  &:hover {
    background: rgb(30, 101, 201);
    color: black;
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        {/*  create a nav Logo */}
        <NavLogo to={"/"}>
          <ButtonContainer>
            <LInkedinButton to={Bio.github} target="_blank">
              Linkedin <FaLinkedin size={24} fill="white" />
            </LInkedinButton>
          </ButtonContainer>
        </NavLogo>

        {/*  set menu icon for mobiel view */}
        <MobileIcon onClick={() => setOpen(!open)}>
          <MenuRoundedIcon style={{ color: "inherit" }} />
        </MobileIcon>

        {/*  navigation items */}
        <NavItems>
          <Navlink href="#about">About</Navlink>
          <Navlink thref="#skills">Skills</Navlink>
          <Navlink href="#experience">Experience</Navlink>
          <Navlink href="#projects">Projects</Navlink>
          <Navlink href="#education">Education</Navlink>
        </NavItems>

        {/*  add mobile menu  */}
        {open && (
          <MobileMenu open={open}>
            <Navlink onClick={() => setOpen(!open)} href="#About">
              About
            </Navlink>
            <Navlink onClick={() => setOpen(!open)} href="#Skills">
              Skills
            </Navlink>
            <Navlink onClick={() => setOpen(!open)} href="#Experience">
              Experience
            </Navlink>
            <Navlink onClick={() => setOpen(!open)} href="#Projects">
              Projects
            </Navlink>
            <Navlink onClick={() => setOpen(!open)} href="#Education">
              Education
            </Navlink>
            <GithubButton to={Bio.github} target="_blank">
              Github <VscGithubInverted size={24} fill="white" />
            </GithubButton>
            <LInkedinButton to={Bio.github} target="_blank">
              Linkedin <FaLinkedin size={24} fill="white" />
            </LInkedinButton>
          </MobileMenu>
        )}

        {/*  github porfile button  */}
        <ButtonContainer>
          <GithubButton to={Bio.github} target="_blank">
            Github <VscGithubInverted size={24} fill="white" />
          </GithubButton>
        </ButtonContainer>

        {/* {children} */}
      </NavContainer>
    </Nav>
  );
};
