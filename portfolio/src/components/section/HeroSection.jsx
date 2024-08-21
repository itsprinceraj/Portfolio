import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import TypeWriter from "typewriter-effect";
import { Link as LinkR } from "react-router-dom";
import heroImg from "../../images/hero.jpg";
import HeroAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContentAnimation,
  headContainerAnimation,
  headTextAnimation,
} from "../../utils/motion";
import { StarCanva } from "../canvas/StarCanva";

//  create styled components here
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

//  inner div
const HeroInnerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

//  left section of herro div
const HeroLeft = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

// right section
const HeroRight = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

//  name div
const Name = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

//  typewriter effect
const RunningText = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  margin-top: 15px;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 40px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 15px;
  }
`;

//  span tag for roles
const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

//  My description
const Description = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  margin-top: 15px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

//  add resume button
const ResumeButton = styled(LinkR)`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 200ms ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

//  hero image
const Img = styled.img`
  border-radius: 5%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 450px;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

//  hero section background
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

//  create tilt options
const tiltOptions = {
  reverse: false, // reverse the tilt direction
  max: 25, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        {/*  use starCanvas */}
        <StarCanva />
        <HeroAnimation />
      </HeroBg>

      {/*   create a starting animation using framer motion */}
      <motion.div {...headContainerAnimation}>
        <HeroInnerDiv>
          {/*  left section */}
          <HeroLeft>
            {/*  animation for texts */}
            <motion.div {...headTextAnimation}>
              <Name>
                Hi, I am <br /> {Bio.name}
              </Name>
              <RunningText>
                I am a{" "}
                <Span>
                  <TypeWriter
                    options={{
                      strings: Bio?.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </RunningText>
            </motion.div>

            {/*  add animation for description */}
            <motion.div {...headContentAnimation}>
              <Description>{Bio.description}</Description>
            </motion.div>

            <ResumeButton to={Bio?.resume} target="_blank">
              Check Resume
            </ResumeButton>
          </HeroLeft>

          {/*  right section  */}
          <HeroRight>
            {/*  add page start animation for right section */}
            <motion.div {...headContentAnimation}>
              <Tilt options={tiltOptions} style={{ height: 420, width: 360 }}>
                <Img src={heroImg} alt="Prince Raj" />
              </Tilt>
            </motion.div>
          </HeroRight>
        </HeroInnerDiv>
      </motion.div>
    </HeroContainer>
  );
};
