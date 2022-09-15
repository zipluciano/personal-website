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
  font-size: 1.5rem;

  & > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 75px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 2rem;
`;

export const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
