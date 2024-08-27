import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import Tilt from "react-parallax-tilt";
import { PiBracketsCurlyBold } from "react-icons/pi";

// create styled components
//  define a container for tech Stacks
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

//  wrap it inside wrapper
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

//  put title
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

//  stack container
const StackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
`;

//  skils wrapper
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.skill};
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 10px 20px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

// tech Stack Heading
const SkillHeading = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

//  Stack List
const StackList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 20px;
`;

//  Stack Items
const Items = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

//  Stack Images
const StackImages = styled.img`
  width: 24px;
  height: 24px;
`;

//  add tilt option in Tech Stacks
// const tiltOptions = {
//   reverse: false, // reverse the tilt direction
//   max: 30, // max tilt rotation (degrees)
//   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 1000, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };

export const SkillsSection = ({ darkMode }) => {
  //  create a state variable for managing the OnMouseMove event

  return (
    <Container id="Skills">
      <Wrapper>
        <Title>
          My Tech Stack{" "}
          <PiBracketsCurlyBold size={70} fill={darkMode ? "orange" : "red"} />
        </Title>

        <StackContainer>
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              // className="background-stripes track-on-window"
              scale={1.03}
              // options={tiltOptions}
              glareEnable={true}
              glarePosition="all"
              glareMaxOpacity={0.5}
              glareBorderRadius="16px"
              glareColor="#05668D"
            >
              <Skill key={`skill-${index}`}>
                <SkillHeading>{skill.title}</SkillHeading>
                <StackList>
                  {skill.skills.map((item, index_x) => (
                    <Items key={`skill-x-${index_x}`}>
                      <StackImages src={item.image} />
                      {item.name}
                    </Items>
                  ))}
                </StackList>
              </Skill>
            </Tilt>
          ))}
        </StackContainer>
      </Wrapper>
    </Container>
  );
};
