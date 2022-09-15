export const summaryNavigation = [
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
    label: "Contato",
  },
];

export const background = [
  {
    course: "Engenharia Civil",
    school: "Universidade Federal de Santa Catarina - UFSC",
    years: "2017 - Atualmente",
  },
  {
    course: "DEVinHouse - React + Node",
    school: "SENAI-SC | ACATE",
    years: "2021 - 2022",
  },
  {
    course: "Técnico em Edfificações",
    school: "Instituto Federal de Santa Catarina - IFSC",
    years: "2012 - 2016",
  },
];

export const routes = [
  { path: "/", index: 0 },
  { path: "/home", index: 0 },
  { path: "/summary", index: 1 },
  { path: "/background", index: 2 },
  { path: "/skills", index: 3 },
  { path: "/contact", index: 4 },
];

export const skills = [
  {
    scope: "Front-end",
    stack: [
      "React",
      "Redux",
      "React Testing Library | Jest",
      "Styled Components",
      "Next.js",
    ],
  },
  {
    scope: "Back-end",
    stack: ["Node", "Express", "Sequelize", "Postgres", "JWT"],
  },
  {
    scope: "DevOps",
    stack: ["Docker", "Kubernetes", "AWS", "Github Actions", "CI/CD"],
  },
];
