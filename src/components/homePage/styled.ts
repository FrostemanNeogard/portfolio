import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  column-gap: 5vmin;
  height: fit-content;
  > div {
    flex: 1;
  }
`;

export const FullHeightContainer = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 0;
  height: 80vh;
  row-gap: 1rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.secondary};
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  p {
    font-weight: 400;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  column-gap: 2rem;
  margin-top: auto;
  position: relative;
  font-size: 3rem;
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

export const ContactBlock = styled.div`
  a,
  a:visited {
    color: cyan;
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

export const RightContent = styled.div`
  display: grid;
  row-gap: 7rem;
  padding: 10vh 0;
  line-height: 150%;
`;
