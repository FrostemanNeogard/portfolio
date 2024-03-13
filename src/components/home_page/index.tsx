import * as Styled from "./styled";
import ProfilePicture from "src/assets/images/profile_picture.png";
import VerticalDivider from "../vertical_divider";
import AlternatingColorSection from "../alternating_color_section";

export const HomePage = () => {
  return (
    <main>
      <AlternatingColorSection>
        <Profile />
        <AboutMe />
      </AlternatingColorSection>
    </main>
  )
}

const Profile = () => {

  const ProfileLinks = () => {
    return (
      <Styled.LinksSection>
        <Styled.LinksSectionLink
          href="https://github.com/FrostemanNeogard"
        />
      </Styled.LinksSection>
    )
  }

  const ProfileHeaders = () => {
    return (
      <>
        <Styled.IntroductionSectionHeader>
          ~ Liam Frosteman Neogard ~
        </Styled.IntroductionSectionHeader>
        <Styled.IntroductionSectionSubHeader>
          Fullstack Software Engineer
        </Styled.IntroductionSectionSubHeader>
      </>
    )
  }

  return (
    <Styled.IntroductionSection>
      <img src={ProfilePicture} alt="Profile Picture" />
      <ProfileHeaders />
      <ProfileLinks />
    </Styled.IntroductionSection>
  )
}

const AboutMe = () => {
  return (
    <Styled.AboutMeSection>
      <Styled.AboutMeHeader>
        About Me
      </Styled.AboutMeHeader>
      <Styled.PersonalInfoSection>
        <p><strong>Full name:</strong></p>
        <p>Liam Frosteman Neogard</p>

        <p><strong>Phone:</strong></p>
        <p>+46 12 123 12 12</p>

        <p><strong>Email:</strong></p>
        <p>garfieldshithead@gmail.com</p>
      </Styled.PersonalInfoSection>

      <VerticalDivider />

      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis facilis odit dolorum quibusdam, perferendis perspiciatis rem soluta rerum.
          Velit esse beatae maiores aliquam, assumenda nulla vero atque nemo explicabo eaque sint deserunt consequuntur facere dolorum deleniti error eius accusantium enim voluptate!
          Animi, in accusamus. Ad obcaecati molestiae rem excepturi necessitatibus.
        </p>
      </section>
    </Styled.AboutMeSection>
  )
}