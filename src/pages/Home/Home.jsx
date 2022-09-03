import { Context } from "../SliderWrapper/SliderWrapper";
import { useContext } from "react";
import { summaryNavigation } from "../../utils/constants";
import { Wrapper, Name, Links, Role } from "./style";

const getIndexByLabel = (labelsList, labelItem) =>
  labelsList.find(({ label }) => label === labelItem).index;

const Home = () => {
  const { setIndex } = useContext(Context);

  return (
    <Wrapper>
      <Name
        onClick={() => setIndex(getIndexByLabel(summaryNavigation, "Resumo"))}
      >
        Luciano E. Monteiro
      </Name>
      <Links>
        {summaryNavigation.map(({ label, index }) => (
          <p onClick={() => setIndex(index)} key={label}>
            {label}
          </p>
        ))}
      </Links>
      <Role
        onClick={() => setIndex(getIndexByLabel(summaryNavigation, "Skills"))}
      >
        Desenvolvedor Front-end
      </Role>
    </Wrapper>
  );
};

export default Home;
