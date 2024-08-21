import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Logo from "../images/name_logo.png";
import { Bio } from "../data/constants";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

//  create styled components
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 1000;
  overflow-x: none;
`;

//  nav container
const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  align-items: center;
`;

//  navigation items
const NavItems = styled.ul`
  width: 100%;
  display: ${({ open }) => (open ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 0 4px;
  list-style: none;
  text-decoration: none;
  color: inherit;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//  navigation link
const Navlink = styled.a`
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
  display: ${({ open }) => (open ? "none" : "flex")};
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
  color: rgb(30, 120, 201);
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

export const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpen(!open);
  };
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <Nav>
      <NavContainer>
        {/*  create a nav Logo */}
        <NavLogo to={Bio.linkedin}>
          <ButtonContainer open={open}>
            <LInkedinButton to={Bio.linkedin} target="_blank">
              LinkedIn <FaLinkedin size={24} fill="white" />
            </LInkedinButton>
          </ButtonContainer>
        </NavLogo>

        {/*  set menu icon for mobile view */}
        <MobileIcon onClick={toggleMobileMenu}>
          <MenuRoundedIcon style={{ color: "inherit" }} />
        </MobileIcon>

        {/*  navigation items */}
        <NavItems open={open}>
          <Navlink href="#About">About</Navlink>
          <Navlink href="#Skills">Skills</Navlink>
          <Navlink href="#Experience">Experience</Navlink>
          <Navlink href="#Projects">Projects</Navlink>
          <Navlink href="#Education">Education</Navlink>
        </NavItems>

        {/*  add mobile menu  */}
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
          <LInkedinButton to={Bio.linkedin} target="_blank">
            LinkedIn <FaLinkedin size={24} fill="white" />
          </LInkedinButton>
        </MobileMenu>

        {/*  github profile button  */}
        <ButtonContainer open={open}>
          <GithubButton to={Bio.github} target="_blank">
            Github <VscGithubInverted size={24} fill="white" />
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};
