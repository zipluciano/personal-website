import React from "react";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Formação</p>
      <div className={styles.content}>
        <ul className={styles["list-formation"]}>
          <li className={styles.course}>Engenharia Civil</li>
          <li className={styles.school}>
            Universidade Federal de Santa Catarina - UFSC
          </li>
          <li className={styles.years}>2017 - Atualmente</li>
        </ul>
        <ul className={styles["list-formation"]}>
          <li className={styles.course}>DEVinHouse - React + Node</li>
          <li className={styles.school}>SENAI-SC | ACATE</li>
          <li className={styles.years}>2021 - 2022</li>
        </ul>
        <ul className={styles["list-formation"]}>
          <li className={styles.course}>Técnico em Edfificações</li>
          <li className={styles.school}>
            Instituto Federal de Santa Catarina - IFSC
          </li>
          <li className={styles.years}>2012 - 2016</li>
        </ul>
      </div>
    </div>
  );
};

export default Background;
