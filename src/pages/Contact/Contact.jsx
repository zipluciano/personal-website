import { Wrapper, ContactWrapper } from "./style";

const Contato = () => (
  <Wrapper>
    <h1>Contato</h1>
    <ContactWrapper>
      <div>
        <a
          href="https://www.linkedin.com/in/luciano-espindula/"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
      <div>
        <a href="mailto:luciano.es.mo@gmail.com" target="_blank">
          E-mail: luciano.es.mo@gmail.com
        </a>
      </div>
      <div>
        <a href="https://github.com/zipluciano" target="_blank">
          Github
        </a>
      </div>
    </ContactWrapper>
  </Wrapper>
);

export default Contato;
