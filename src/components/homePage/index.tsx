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
          <h2>Software Engineer</h2>
          <p>Currently open to work</p>
          <ul>
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#work-experience">Work Experience</a>
            </li>
            <li>
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
                My résumé
              </a>
            </span>
          </Styled.SocialIcons>
          <Styled.ContactBlock>
            <h2>
              Want to get in touch? Don't hesitate to email me at:{" "}
              <a href="mailto:liamfrostemanneogard@gmail.com">
                liamfrostemanneogard@gmail.com
              </a>
            </h2>
          </Styled.ContactBlock>
        </Styled.LeftContent>
      </Styled.FullHeightContainer>
      <Styled.RightContent>
        <p id="introduction">
          From a young age, I've been drawn to the captivating world of
          technology, and programming quickly became my passion.{" "}
          <strong>At just 13</strong>, I embarked on my first programming
          journey through an introductory Python bootcamp, igniting a lifelong
          curiosity for coding.
          <br />
          <br />
          Over the years, my programming journey evolved organically,
          culminating in 2018 when I delved into the realms of{" "}
          <strong>game graphics</strong> and <strong>development</strong>. My{" "}
          <strong>eagerness to learn</strong>, coupled with prior experience,
          propelled my growth exponentially.
          <br />
          <br />
          During my academic pursuits, I seized every opportunity to expand my{" "}
          <strong>varied skill set</strong>, often venturing beyond the
          curriculum to undertake <strong>personal projects</strong>. What began
          as humble Discord bots and rudimentary games soon blossomed into a
          passion for web development, captivating me with its dynamic and
          interactive nature. This journey eventually led me to create projects
          that are embraced by the vibrant fighting game community, earning{" "}
          <strong>recognition</strong> and <strong>appreciation</strong> on a
          wider scale.
        </p>

        <WorkExperiences />
        <ProjectShowcases />
      </Styled.RightContent>
    </Styled.Main>
  );
};
