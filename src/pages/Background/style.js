import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  display: inline-block;
  width: 100%;
`;

export const Content = styled.div`
  width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5%;
  font-size: 1.8rem;
`;

export const ListFormation = styled.ul`
  list-style: none;
`;

export const Course = styled.li`
  font-size: 2rem;
`;

export const School = styled.li`
  font-size: 1.6rem;
`;

export const Years = styled.li`
  font-size: 1.4rem;
`;
