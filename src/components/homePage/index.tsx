import { ProjectShowcases } from "../projectShowcases";
import { WorkExperiences } from "../workExperiences";
import * as Styled from "./styled";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export const HomePage = () => {
  return (
    <Styled.Main>
      <Styled.FullHeightContainer>
        <Styled.LeftContent>
          <h1>Liam Frosteman Neogard</h1>
          <h2>Fullstack Engineer</h2>
          <ul>
            <li>
              <span></span>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <span></span>
              <a href="#work-experience">Work Experience</a>
            </li>
            <li>
              <span></span>
              <a href="#projects">My Projects</a>
            </li>
          </ul>
          <Styled.SocialIcons>
            <span>
              <a href="https://github.com/FrostemanNeogard" target="_blank">
                <IoLogoGithub />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/liamfrostemanneogard/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="resume.pdf" target="_blank">
                Résumé
              </a>
            </span>
          </Styled.SocialIcons>
          <Styled.ContactBlock>
            <h2>
              <a href="mailto:liamfrostegard@gmail.com">
                liamfrostegard@gmail.com
              </a>
            </h2>
          </Styled.ContactBlock>
        </Styled.LeftContent>
      </Styled.FullHeightContainer>
      <Styled.RightContent>
        <p id="introduction">
          From a young age, I've been drawn to technology, and programming
          quickly became my passion. <strong>At just 13</strong>, I went on my
          first programming bootcamp where I learned to draw shapes with Python.
          <br />
          <br />
          During my academic pursuits, I seized every opportunity to expand my{" "}
          <strong>varied skill set</strong>, often venturing beyond the
          curriculum to undertake <strong>personal projects</strong>. What began
          as humble Discord bots and simple games soon blossomed into a passion
          for <strong>web development</strong>, captivating me with its
          interactive nature. This journey eventually led me to software
          engineering as a proession along with creating projects that are
          hugely embraced by the fighting game community, earning{" "}
          <strong>recognition</strong> and <strong>appreciation</strong> on a
          wider scale. Among my work also includes a{" "}
          <strong>commissioned project</strong> for a sports company.
        </p>
        <WorkExperiences />
        <ProjectShowcases />
      </Styled.RightContent>
    </Styled.Main>
  );
};
