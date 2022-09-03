import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SkillsContent = styled.div`
  width: 100%;
  height: 85%;
  background: red;
  font-size: 1.5rem;

  & > ul {
    list-style: none;
  }
`;
