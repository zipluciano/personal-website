import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Name = styled.p`
  font-size: 3rem;
  cursor: pointer;
  transition: linear 200ms;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  font-size: 1.5rem;

  & > p {
    padding: 0.5rem;
    transition: linear 100ms;
    cursor: pointer;
  }

  & > p:hover {
    border-bottom: 2px solid #fff;
    transform: scale(1.08);
  }
`;

export const Role = styled.p`
  font-size: 2rem;
  align-self: flex-end;
  cursor: pointer;
  transition: linear 200ms;

  &:hover {
    transform: scale(1.02);
  }
`;
