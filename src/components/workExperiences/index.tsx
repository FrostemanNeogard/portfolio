import * as Styled from "./styled";
import { MdOpenInNew } from "react-icons/md";

export const WorkExperiences = () => {
  return (
    <Styled.WorkSection id="work-experience">
      <Styled.WorkArticle>
        <h3>2023 - Present</h3>
        <h2>
          <strong>Fullstack Software Engineer</strong> • Duelbits
        </h2>
        <p>
          Develop and maintain frontend with React, Typescript, and Redux.
          Optimize backend with NestJS and SQL for scalability. Drive admin
          panel expansion using Angular, deploy efficiently with Docker and
          GitHub Actions. Ensure code quality through extensive reviews and Jest
          tests. Utilize Jira for streamlined project management.
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
        <h2>
          <strong>Web Developer</strong> • CloudBackend
        </h2>
        <p>
          Partake in frontend and backend development with in-house JavaScript
          framework. Practice Agile methodologies for collaboration. Develop and
          maintain RESTful APIs, track bugs with Jira. Employ Git for version
          control, ensuring effective collaboration.
        </p>
        <div>
          <span>JavaScript</span>
          <span>APIs</span>
          <span>XML</span>
        </div>
      </Styled.WorkArticle>
      <Styled.ResumeButton>
        <a href="src/assets/resume.pdf" target="_blank">
          View full résumé <MdOpenInNew />
        </a>
      </Styled.ResumeButton>
    </Styled.WorkSection>
  );
};
