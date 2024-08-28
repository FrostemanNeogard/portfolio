import styled from "styled-components";

export const AlternatingColorSection = styled.section`
  display: grid;

  & > section {
    padding: 10em 20vmax;

    @media ${(props) => props.theme.breakpoints.mobile} {
      padding: 10em 2em;
    }

    display: inherit;
    justify-items: center;

    &:nth-child(odd) {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primaryText};
    }

    &:nth-child(even) {
      background-color: ${(props) => props.theme.secondary};
      color: ${(props) => props.theme.secondaryText};
    }
  }
`;
