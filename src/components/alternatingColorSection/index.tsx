import * as Styled from "./styled";

export const AlternatingColorSection = (props: {
  children: React.ReactElement[];
}) => {
  return (
    <Styled.AlternatingColorSection>
      {props.children}
    </Styled.AlternatingColorSection>
  );
};

export default AlternatingColorSection;
