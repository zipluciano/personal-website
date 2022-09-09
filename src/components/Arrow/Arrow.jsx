import { ArrowButton } from "./style";

const Arrow = ({ handleClick, direction, children }) => (
  <ArrowButton onClick={e => handleClick(e, direction)} direction={direction}>
    {children}
  </ArrowButton>
);

export default Arrow;
