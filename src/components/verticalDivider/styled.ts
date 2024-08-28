import { styled } from "styled-components";

export const VerticalDivider = styled.div`
  border-left: 1px solid ${(props) => props.theme.dividerColor};
  height: 100%;
  margin: 0 1em;
`;
