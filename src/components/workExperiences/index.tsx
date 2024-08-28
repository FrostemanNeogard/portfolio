import * as Styled from "./styled";
import { MdOpenInNew } from "react-icons/md";

export const WorkExperiences = () => {
  return (
    <Styled.WorkSection id="work-experience">
      <Styled.WorkArticle>
        <h3>2024 - Present</h3>
        <h2>
          <strong>Fullstack Software Engineer</strong> • School of Applied
          Technology
        </h2>
        <p>
          Completed an intensive 13 week bootcamp, after which I got sent to
          clients to work as a fullstack developer.
        </p>
        <div>
          <span>Java</span>
          <span>Spring Framework</span>
          <span>React</span>
          <span>Docker</span>
          <span>PostgreSQL</span>
          <span>AWS</span>
          <span>CI/CD</span>
        </div>
      </Styled.WorkArticle>
      <Styled.WorkArticle>
        <h3>2023 - 2024</h3>
        <h2>
          <strong>Fullstack Software Engineer</strong> • Duelbits
        </h2>
        <p>
          Developed and maintained frontend with React, Typescript, and Redux.
          Optimized backend with NestJS and SQL for scalability. Drove admin
          panel expansion using Angular, deployed efficiently with Docker and
          GitHub Actions. Ensured code quality through extensive reviews and
          Jest tests. Utilized Jira for streamlined project management.
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
        <a href="resume.pdf" target="_blank">
          View full résumé <MdOpenInNew />
        </a>
      </Styled.ResumeButton>
    </Styled.WorkSection>
  );
};
