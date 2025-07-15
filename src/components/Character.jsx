import { StyledButton, StyledDiv, StyledImg } from "../StyledElements";

const Character = () => {
  return (
    <StyledDiv $charBlock>
      <StyledImg src="/druid2.jpg" />
      <h3>Tekst</h3>
      <StyledButton>LEARN MORE</StyledButton>
    </StyledDiv>
  );
};
export default Character;
