import { useState, useEffect, useCallback, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../App";
import { Arrow } from "../../components";
import { webImages } from "../../assets/utils";
import { Slider, Content } from "./style";
import { Background, Contact, Home, Skills, Summary } from "../index";

export const Context = createContext(null);
const { leftArrow, rightArrow } = webImages;

const SliderWrapper = ({ routeIndex }) => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const currentRoute = routes.find(route => route.index === index);
    navigate(`${currentRoute.path}`);
  }, [index]);

  useEffect(() => {
    setIndex(routeIndex);
  }, []);

  const pages = [
    <Home />,
    <Summary />,
    <Background />,
    <Skills />,
    <Contact />,
  ];

  const handleSliderClick = useCallback(
    (event, direction) => {
      event.preventDefault();
      switch (direction) {
        case "left":
          setIndex(index === 0 ? pages.length - 1 : index - 1);
          break;
        case "right":
          setIndex(index === pages.length - 1 ? 0 : index + 1);
          break;
        default:
          break;
      }
    },
    [index, setIndex]
  );

  return (
    <Context.Provider value={{ index, setIndex }}>
      <Slider>
        <Arrow handleClick={handleSliderClick} direction="left">
          <img src={leftArrow} alt="Left arrow" />
        </Arrow>
        <Arrow handleClick={handleSliderClick} direction="right">
          <img src={rightArrow} alt="Right arrow" />
        </Arrow>
        <Content>{pages[index]}</Content>
      </Slider>
    </Context.Provider>
  );
};

export default SliderWrapper;
