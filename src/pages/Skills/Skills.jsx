import { skills } from "../../utils/constants";
import { Wrapper, SkillsContent, SectionTitle, SkillsWrapper } from "./style";

const Skills = () => (
  <Wrapper>
    <h1>Skills</h1>
    <SkillsContent>
      <ul>
        {skills.map(({ scope, stack }) => (
          <li>
            <SectionTitle>{scope}</SectionTitle>
            <SkillsWrapper>
              {stack.map(item => (
                <div>{item}</div>
              ))}
            </SkillsWrapper>
          </li>
        ))}
      </ul>
    </SkillsContent>
  </Wrapper>
);

export default Skills;
