import styled from "styled-components";

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
