import * as Styled from "./styled";
import { MdOpenInNew } from "react-icons/md";

export const WorkExperiences = () => {
  return (
    <Styled.WorkSection>
      <Styled.WorkArticle>
        <h3>2023 - Present</h3>
        <h2>Fullstack Software Engineer • Duelbits</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          doloremque veritatis omnis fuga nihil qui perspiciatis nemo maxime
          consequatur vel! Praesentium reiciendis illo provident perspiciatis?
        </p>
        <div>
          <span>TypeScript</span>
          <span>NestJS</span>
          <span>React</span>
          <span>Angular</span>
        </div>
      </Styled.WorkArticle>
      <Styled.WorkArticle>
        <h3>2022 - 2023</h3>
        <h2>Web Developer • CloudBackend</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          doloremque veritatis omnis fuga nihil qui perspiciatis nemo maxime
          consequatur vel! Praesentium reiciendis illo provident perspiciatis?
        </p>
        <div>
          <span>JavaScript</span>
          <span>APIs</span>
          <span>XML</span>
        </div>
      </Styled.WorkArticle>
      <Styled.ResumeButton>
        <a href="resume.pdf" target="_blank">
          View full résumé <MdOpenInNew />
        </a>
      </Styled.ResumeButton>
    </Styled.WorkSection>
  );
};
