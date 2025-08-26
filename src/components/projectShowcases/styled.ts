import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: grid;
  row-gap: 2rem;
  @media not ${({ theme }) => theme.breakpoints.mobile} {
    &:has(article:hover) {
      article {
        opacity: 60%;
        &:hover {
          opacity: 100%;
          background-color: ${({ theme }) => theme.primaryLightened};
        }
      }
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

export const Project = styled.article`
  transition: all 0.2s ease;
  filter: drop-shadow(-1px -1px 1px ${({ theme }) => theme.primaryLightened});
  background-color: ${({ theme }) => theme.primaryDarkened};
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 15px;
  column-gap: 1rem;
  grid-template-rows: repeat(auto-fill, auto);
  padding: 2rem 2rem;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: auto;
  }
  img {
    aspect-ratio: 16 / 9;
    object-fit: cover;
    padding-bottom: 1rem;
    @media not ${({ theme }) => theme.breakpoints.mobile} {
      grid-row: 1 / 9999;
      grid-column: 1;
    }
    width: 150px;
    border-radius: 5px;
  }
  > div {
    grid-column: 1;
    grid-row: 3;
    @media ${({ theme }) => theme.breakpoints.mobile} {
      grid-column: 1;
      grid-row: auto;
      padding: 1rem 0;
    }
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
    color: ${({ theme }) => theme.primaryText};
  }
  p {
    padding: 1rem 0;
    color: ${({ theme }) => theme.secondaryText};
  }
  h2 {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    color: ${({ theme }) => theme.primaryText};
  }
`;
