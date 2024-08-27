import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education } from "../../data/constants";
import { EducationCard } from "../cards/EducationCard";
import { EarthCanva } from "../canvas/EarthCanva";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

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
const Title = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const EducationSection = ({ darkMode, setDarkMode }) => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>

        <VerticalTimeline lineColor={darkMode ? "#39404C" : "black"}>
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          ))}
        </VerticalTimeline>
        <EarthCanva />
      </Wrapper>
    </Container>
  );
};
