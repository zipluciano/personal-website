import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 75px;
`;

export const ContactWrapper = styled.div`
  height: 100%;
  font-size: 2rem;
  text-decoration: none;

  & > div {
    margin-bottom: 20px;
  }
`;
