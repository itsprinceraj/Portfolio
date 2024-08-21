import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 30px;
  color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1.4rem;
`;
const GithubIcon = styled(LinkR)`
  display: inline-block;
  margin: 0 1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: purple;
  }
`;

const LinkedinIcon = styled(LinkR)`
  display: inline-block;
  margin: 0 1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: rgb(30, 101, 201);
  }
`;

const InstaIcon = styled(LinkR)`
  display: inline-block;
  margin: 0 1rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: red;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Prince Raj</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <GithubIcon to={Bio.github} target="display">
            <FaGithub size={35} fill="white" />
          </GithubIcon>

          <LinkedinIcon to={Bio.linkedin} target="display">
            <FaLinkedin size={35} fill="rgb(30, 101, 201)" />
          </LinkedinIcon>
          <InstaIcon to={Bio.insta} target="display">
            <FaInstagram size={35} fill="red" />
          </InstaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Prince Raj All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};
