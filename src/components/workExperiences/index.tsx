import * as Styled from "./styled";
import { MdOpenInNew } from "react-icons/md";

export const WorkExperiences = () => {
  return (
    <Styled.WorkSection id="work-experience">
      <Styled.WorkArticle>
        <h3>2024 - Present</h3>
        <h2>
          <strong>DevOps Engineer</strong> • Scania
        </h2>
        <p>
          Design and implement CI/CD pipelines on GitLab to automate development
          and deployment processes, improving efficiency and reliability. Build
          and maintain AWS infrastructure, leveraging services like EC2, RDS,
          and Route 53 to support scalable applications. Develop and optimize
          Docker images for containerized deployments, ensuring consistency
          across environments. Work closely with development teams to enhance
          automation, monitoring, and infrastructure as code practices.
        </p>
        <div>
          <span>Docker</span>
          <span>PostgreSQL</span>
          <span>AWS</span>
          <span>RDS</span>
          <span>EC2</span>
          <span>CI/CD</span>
          <span>GitLab</span>
        </div>
      </Styled.WorkArticle>
      <Styled.WorkArticle>
        <h3>2024 - Present</h3>
        <h2>
          <strong>Fullstack Software Engineer</strong> • School of Applied
          Technology
        </h2>
        <p>
          Completed an intensive 13 week bootcamp, after which I got hired as a
          consultant where I've completed one short assignment at a small
          company and am currently on assignment at Scania as a DevOps engineer.
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
