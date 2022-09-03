import React, { useContext } from "react";
import styles from "./Home.module.css";
import { Context } from "../SliderWrapper/SliderWrapper";

const labelMapper = [
  {
    index: 1,
    label: "Resumo",
  },
  {
    index: 2,
    label: "Formação",
  },
  {
    index: 3,
    label: "Skills",
  },
  {
    index: 4,
    label: "Projetos",
  },
  {
    index: 5,
    label: "Contato",
  },
];

const Home = () => {
  const { setIndex } = useContext(Context);

  return (
    <div className={styles.wrapper}>
      <p className={styles.name} onClick={() => setIndex(1)}>
        Luciano E. Monteiro
      </p>
      <div className={styles.links}>
        {labelMapper.map(({ label, index }) => (
          <p onClick={() => setIndex(index)}>{label}</p>
        ))}
      </div>
      <p className={styles.role} onClick={() => setIndex(3)}>
        Desenvolvedor Front-end
      </p>
    </div>
  );
};

export default Home;
