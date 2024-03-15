import styled from "styled-components";

export const WorkSection = styled.section`
  display: grid;
  row-gap: 3rem;
`;

export const ResumeButton = styled.div`
  display: flex;
  a {
    color: ${(props) => props.theme.primaryText};
    font-size: 1.5rem;
    text-align: left;
    width: 100%;
    text-decoration: none;
    &:visited {
      color: ${(props) => props.theme.primaryText};
    }
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

export const WorkArticle = styled.article`
  border-radius: 10px;
  gap: 1rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: auto auto auto;
  h3 {
    grid-row: 1 / -1;
    text-align: left;
    text-transform: uppercase;
  }
  div {
    display: flex;
    column-gap: 0.5rem;
    font-size: 0.9rem;
    span {
      padding: 5px 15px;
      border-radius: 9999px;
      color: lighblue;
      background-color: ${(props) => props.theme.secondaryDarkened};
      color: ${(props) => props.theme.secondary};
    }
  }
`;
