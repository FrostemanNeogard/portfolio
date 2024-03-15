import * as Styled from "./styled";
import framedataBotImage from "../../assets/images/projects/framedataBot.png";
import notationMakerImage from "../../assets/images/projects/notationMaker.png";
import tournamentHeader from "../../assets/images/projects/tournamentHeader.png";
import { FaHeart } from "react-icons/fa";
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
    );
  };
  return (
    <Styled.ProjectsSection>
      <Project
        imageSrc={framedataBotImage}
        name="Tekken Framedata bot"
        description={`Discord bot used in hundreds of servers which allows users to look up information about any given attack in the Tekken series of games.`}
        github="https://github.com/FrostemanNeogard/TekkenFramedataBot"
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
          <FaHeart /> 4 000+
        </h2>
      </Project>
      <Project
        imageSrc={tournamentHeader}
        name="Tournament Header"
        description={`Tournament organization tool used to easily update on-stream visuals remotely from any device`}
        github="https://github.com/FrostemanNeogard/TournamentHeader"
        live="https://frostemanneogard.github.io/TournamentHeader/"
      ></Project>
    </Styled.ProjectsSection>
  );
};
