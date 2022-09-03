import React from "react";
import styles from "./Summary.module.css";

const msAge = Date.now() - new Date(1997, 4, 8);
const age = Math.trunc(msAge / (1000 * 3600 * 24 * 365.25));

const Summary = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Resumo</p>
      <div className={styles.content}>
        <p>
          Me chamo Luciano Espíndula Monteiro, possuo{" "}
          <span className={styles.age}>{age}</span> anos e estou cursando
          engenharia civil na Universidade Federal de Santa Catarina (UFSC).
          Estudo desenvolvimento web paralelamente, mais precisamente Full
          Stack, tenho interesse em Machine Learning, campo que ainda pretendo
          estudar melhor no futuro.
        </p>
      </div>
    </div>
  );
};

export default Summary;
