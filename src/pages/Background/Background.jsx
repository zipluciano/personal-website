import React from "react";
import { background } from "../../utils/constants";
import {
  Wrapper,
  Title,
  Content,
  ListFormation,
  Course,
  School,
  Years,
} from "./style";

const Background = () => (
  <Wrapper>
    <Title>Formação</Title>
    <Content>
      {background.map(({ course, school, years }) => (
        <ListFormation key={course}>
          <Course>{course}</Course>
          <School>{school}</School>
          <Years>{years}</Years>
        </ListFormation>
      ))}
    </Content>
  </Wrapper>
);
export default Background;
