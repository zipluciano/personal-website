import { Wrapper, Title, Content } from "./style";

const msAge = Date.now() - new Date(1997, 4, 8);
const age = Math.trunc(msAge / (1000 * 3600 * 24 * 365.25));

const Summary = () => (
  <Wrapper>
    <Title>Resumo</Title>
    <Content>
      <p>
        {`Me chamo Luciano Espíndula Monteiro, tenho ${age} anos e estou cursando
          engenharia civil na Universidade Federal de Santa Catarina (UFSC).
          Trabalho com desenvolvimento Front-end paralelamente, e tenho interesse em Machine Learning, campo que ainda pretendo estudar melhor no futuro.`}
      </p>
    </Content>
  </Wrapper>
);

export default Summary;
