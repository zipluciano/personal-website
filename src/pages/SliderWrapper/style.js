import styled from "styled-components";

export const Slider = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

  font-family: "Oswald", sans-serif;
  width: 90vw;
  min-height: 90vh;
  position: relative;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 4.5vh 9.9vw;
  color: #fff;
  background: #1a1a1a;
`;

export const ArrowButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 48.5%;
  bottom: 48.5%;
  width: 8%;
  height: 8%;
  font-size: 1.5rem;
  background: none;
  border: transparent;
  cursor: pointer;
  filter: invert(100%);
  transition: linear 100ms;

  &:hover {
    transform: scale(1.2);
  }

  & > img {
    width: 35%;
  }

  ${({ direction }) => `
    left: ${direction === "left" ? "1%" : ""};
    right: ${direction === "right" ? "1%" : ""};
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 81vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
