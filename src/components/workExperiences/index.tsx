import { WorkArticle } from "../workArticle";
import * as Styled from "./styled";
import { MdOpenInNew } from "react-icons/md";

export const WorkExperiences = () => {
  return (
    <Styled.WorkSection id="work-experience">
      <WorkArticle
        startDate="2025"
        endDate="present"
        roleName="Backend Developer"
        companyName="Google (via MultiMind)"
        jobDescription="Working on migrating the public Fitbit API using in-house tools and frameworks. Writing tests focusing on 100% code coverage."
        tags={["Java", "Spring Boot", "JUnit"]}
      />
      <WorkArticle
        startDate="2025"
        endDate="present"
        roleName="Software Engineer Consultant"
        companyName="MultiMind"
        jobDescription="Currently on assignment for Google as a backend developer."
        tags={["Java", "Spring Boot", "JUnit"]}
      />
      <WorkArticle
        startDate="2024"
        endDate="2025"
        roleName="DevOps Engineer"
        companyName="Scania (via SALT)"
        jobDescription="Designed and implemented CI/CD pipelines on GitLab to automate development
          and deployment processes, improving efficiency and reliability. Built
          and maintained AWS infrastructure, leveraging services like EC2, RDS,
          and Route 53 to support scalable applications. Developed and optimized
          Docker images for containerized deployments, ensuring consistency
          across environments. Worked closely with development teams to enhance
          automation, monitoring, and infrastructure as code practices."
        tags={[
          "AWS",
          "RDS",
          "CDK",
          "Docker",
          "PostgreSQL",
          "Python",
          "CI/CD",
          "GitLab",
          "CloudFormation",
        ]}
      />
      <WorkArticle
        startDate="2024"
        endDate="2024"
        roleName="Lead Fullstack Engineer"
        companyName="Klimra (via SALT)"
        jobDescription="Led the end-to-end development of Klimra's public-facing website and
          initial backend infrastructure during a one-month contract via SALT. Built a modern,
          responsive frontend using React and Tailwind, ensuring a performant and accessible
          user experience. Designed and implemented backend systems with Java, Spring Boot,
          and PostgreSQL, deploying to AWS with CI/CD pipelines for smooth delivery.
          Collaborated directly with stakeholders to define and deliver key technical features
          under tight deadlines."
        tags={[
          "Java",
          "Spring Boot",
          "React",
          "Tailwind",
          "PostgreSQL",
          "AWS",
          "CI/CD",
        ]}
      />
      <WorkArticle
        startDate="2024"
        endDate="2025"
        roleName="Fullstack Software Engineer Consultant"
        companyName="SALT - School of Applied Technology"
        jobDescription="Completed an intensive 13 week bootcamp, after which I got hired as a
          consultant where I've completed one short assignment at a small
          company and am currently on assignment at Scania as a DevOps engineer."
        tags={[
          "Java",
          "Spring Framework",
          "React",
          "Docker",
          "PostgreSQL",
          "AWS",
          "CI/CD",
        ]}
      />
      <WorkArticle
        startDate="2023"
        endDate="2024"
        roleName="Fullstack Software Engineer"
        companyName="Duelbits"
        jobDescription="Developed and maintained frontend with React, Typescript, and Redux.
          Optimized backend with NestJS and SQL for scalability. Drove admin
          panel expansion using Angular, deployed efficiently with Docker and
          GitHub Actions. Ensured code quality through extensive reviews and
          Jest tests. Utilized Jira for streamlined project management."
        tags={["TypeScript", "NestJS", "React", "Angular"]}
      />
      <WorkArticle
        startDate="2022"
        endDate="2023"
        roleName="Web Developer"
        companyName="CloudBackend"
        jobDescription="Contributed to both frontend and backend development using an in-house
          JavaScript framework. Followed Agile methodologies for cross-functional collaboration.
          Developed and maintained RESTful APIs, tracked bugs with Jira, and used Git for effective
          version control and team coordination."
        tags={["JavaScript", "APIs", "XML"]}
      />
      <Styled.ResumeButton>
        <a href="resume.pdf" target="_blank">
          View full résumé <MdOpenInNew />
        </a>
      </Styled.ResumeButton>
    </Styled.WorkSection>
  );
};
