import styled from "styled-components";

export const Slider = styled.div`
  width: 90vw;
  min-height: 90vh;
  position: relative;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 4.5vh 9.9vw;
  color: #fff;
  background: #1a1a1a;
  transition: linear 100ms;
`;

export const Content = styled.div`
  width: 100%;
  height: 81vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
