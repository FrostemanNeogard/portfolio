import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  column-gap: 5vmin;
  height: fit-content;
  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const FullHeightContainer = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  @media ${(props) => props.theme.breakpoints.mobile} {
    position: initial;
  }
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
  ul {
    padding: 1rem 0;
    a,
    a:visited {
      color: white;
      text-decoration: none;
    }
    span {
      background-color: white;
      border-bottom: 1px solid white;
      width: 4rem;
      height: 1px;
      align-self: center;
    }
    li {
      display: flex;
      gap: 1rem;
      padding: 1rem 0;
      transition: all 200ms ease;
    }
    &:has(li:hover) {
      li {
        filter: brightness(80%);
      }
      li:hover {
        filter: brightness(100%);
        cursor: pointer;
        span {
          width: 6rem;
        }
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    @media ${(props) => props.theme.breakpoints.mobile} {
      word-break: break-all;
      font-size: 80%;
    }
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
  strong {
    font-weight: 700;
  }
`;
