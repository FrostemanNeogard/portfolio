import * as Styled from "./styled";
import framedataBotImage from "../../assets/images/projects/framedataBot.png";
import notationMakerImage from "../../assets/images/projects/notationMaker.png";
import dynastyLeagueBot from "../../assets/images/projects/dynastyLeagueBot.png";
import klimraImage from "../../assets/images/projects/klimra.png";
import { FaHeart, FaMoneyBill } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

export const ProjectShowcases = () => {
  type ProjectProps = {
    imageSrc: string;
    name: string;
    description: string;
    github?: string;
    live?: string;
    children?: string | JSX.Element | JSX.Element[];
  };
  const Project = (props: ProjectProps) => {
    const { imageSrc, name, description, children, github, live } = props;

    return (
      <Styled.Link href={live ? live : github ? github : ""} target="_blank">
        <Styled.Project>
          <img src={imageSrc} alt={name} />
          <h1>{name}</h1>
          <p>{description}</p>
          {children}

          <div>
            {github && (
              <a href={github} target="_blank">
                <IoLogoGithub />
              </a>
            )}
            {live && (
              <a href={live} target="_blank">
                <FaGlobe />
              </a>
            )}
          </div>
        </Styled.Project>
      </Styled.Link>
    );
  };
  return (
    <Styled.ProjectsSection id="projects">
      <Project
        imageSrc={klimraImage}
        name="Klimra Website"
        description="Frontend used for Klimra's website made in merely a few weeks in collaboration with Klimra's designers and CEOs."
        live="https://klimra.com/"
      ></Project>
      <Project
        imageSrc={framedataBotImage}
        name="Tekken Framedata bot"
        description={`Discord bot used in hundreds of servers which allows users to look up information about any given attack in the Tekken series of games.`}
        github="https://github.com/FrostemanNeogard/TekkenFramedataBot"
        live="https://discord.com/application-directory/1184848382720737310"
      >
        <h2>
          <IoPerson /> 10 000+ users
        </h2>
      </Project>
      <Project
        imageSrc={notationMakerImage}
        name="Notation Maker"
        description={`Content creation tool for generating easy to use images of notation for fighting game attacks and combos.`}
        github="https://github.com/FrostemanNeogard/TekkenNotationMaker"
        live="https://frostemanneogard.github.io/TekkenNotationMaker/"
      >
        <h2>
          <FaHeart /> 4 500+ likes
        </h2>
      </Project>
      <Project
        imageSrc={dynastyLeagueBot}
        name="Dynasty League bot"
        description={`Commissioned Discord bot for a sports company, tasked with managing group chats for their Dynasty League.`}
        github="https://github.com/FrostemanNeogard/Dynasty-League-Bot"
      >
        <h2>
          <FaMoneyBill /> Paid commission
        </h2>
      </Project>
    </Styled.ProjectsSection>
  );
};
