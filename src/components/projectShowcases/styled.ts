import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: grid;
  row-gap: 2rem;
  &:has(article:hover) {
    article {
      opacity: 60%;
      &:hover {
        opacity: 100%;
        background-color: ${(props) => props.theme.primaryLightened};
      }
    }
  }
`;

export const Project = styled.article`
  transition: all 0.2s ease;
  filter: drop-shadow(-1px -1px 1px ${(props) => props.theme.primaryLightened});
  background-color: ${(props) => props.theme.primaryDarkened};
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
  border-radius: 15px;
  grid-template-rows: repeat(auto-fill, auto);
  padding: 2rem 2rem;
  img {
    aspect-ratio: 16 / 9;
    object-fit: cover;
    grid-row: 1 / 9999;
    grid-column: 1;
    width: 150px;
    border-radius: 5px;
  }
  > div {
    grid-column: 1;
    grid-row: 3;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    a,
    a:visited {
      color: white;
      text-decoration: none;
    }
    svg {
      &:hover {
        filter: brightness(70%);
        cursor: pointer;
      }
    }
  }
  h1 {
    color: ${(props) => props.theme.primaryText};
  }
  p {
    padding: 1rem 0;
    color: ${(props) => props.theme.secondaryText};
  }
  h2 {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    color: ${(props) => props.theme.primaryText};
  }
`;
