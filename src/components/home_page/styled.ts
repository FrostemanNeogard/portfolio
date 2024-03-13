import styled from 'styled-components';

export const IntroductionSection = styled.section`
  padding: 10em 2em !important;

  img {
    border-radius: 50%;
  }
`;

export const IntroductionSectionHeader = styled.h1`
  font-size: 3em;
  transform: rotate(-5deg);
  font-family: Agbalumo, sans-serif;
  padding: 1em;
`;

export const IntroductionSectionSubHeader = styled.h2`
  font-size: 1.5em;
`;

export const LinksSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 1em;
`;

export const LinksSectionLink = styled.a`
  font-size: 2em;
  padding: 0 1em;
`;

export const AboutMeSection = styled.section`
  grid-template-columns: repeat(3, auto);
  gap: 1em;
`;

export const AboutMeHeader = styled.h1`
  font-size: 2em;
  grid-column: 1 / -1;
`;

export const PersonalInfoSection = styled.section`
  display: grid;
  gap: 0 1em;
  grid-template-columns: 1fr auto;
  grid-auto-rows: repeat(5, min-content);
  width: fit-content;
  height: fit-content;

  & > article {
    display: flex;
  }

  strong {
    font-weight: 600;
  }
`;