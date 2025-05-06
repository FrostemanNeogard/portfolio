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
