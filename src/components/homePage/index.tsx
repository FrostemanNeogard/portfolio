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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id natus
          suscipit soluta vitae ducimus, impedit odio, dignissimos officia
          veniam corporis placeat fugit veritatis facilis accusantium, quas
          nostrum rerum? Placeat quo fugit corporis cum est voluptates voluptas
          non, minus ipsa praesentium, alias exercitationem. Nesciunt
          voluptatibus minima, quo dicta nam perferendis ratione.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nihil quo eius necessitatibus mollitia asperiores magni rem porro
          expedita eligendi. Libero distinctio quas ullam assumenda quibusdam
          nam eos reprehenderit eum dolorem sapiente, sit corrupti commodi, id
          magni iusto odio eius, nulla ipsa nemo saepe consequatur.
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            dolorum corrupti pariatur dignissimos iste accusantium laboriosam
            temporibus, ea maxime labore.
          </p>
        </p>
        <WorkExperiences />
        <ProjectShowcases />
      </Styled.RightContent>
    </Styled.Main>
  );
};
