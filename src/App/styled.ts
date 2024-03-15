import { styled } from "styled-components";

export const AppContainer = styled.div`
  font-family: ${({ theme }) => theme.primaryFontFamily};
  min-height: 100vh;
  height: fit-content;
  padding: 0 11vw;
  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0 3rem;
  }

  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryText};
`;
