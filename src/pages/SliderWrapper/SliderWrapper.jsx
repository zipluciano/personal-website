import { useState, useCallback, createContext } from "react";
import { webImages } from "../../assets/utils";
import { Slider, ArrowButton, Content } from "./style";
import { Background, Contact, Home, Skills, Summary } from "../index";

export const Context = createContext(null);
const { leftArrow, rightArrow } = webImages;

const SliderWrapper = () => {
  const [index, setIndex] = useState(0);

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
        <ArrowButton
          onClick={e => handleSliderClick(e, "left")}
          direction="left"
        >
          <img src={leftArrow} alt="Left arrow" />
        </ArrowButton>
        <ArrowButton
          onClick={e => handleSliderClick(e, "right")}
          direction="right"
        >
          <img src={rightArrow} alt="Right arrow" />
        </ArrowButton>
        <Content>{pages[index]}</Content>
      </Slider>
    </Context.Provider>
  );
};

export default SliderWrapper;
