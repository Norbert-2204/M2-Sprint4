import {
  StyledButton,
  StyledDiv,
  StyledH3,
  StyledImg,
} from "../StyledElements";

const Character = ({ name, imageUrl, onClick }) => {
  return (
    <StyledDiv $charBlock>
      <StyledImg src={imageUrl} />
      <StyledH3>{name}</StyledH3>
      <StyledButton onClick={onClick} $learn>
        LEARN MORE
      </StyledButton>
    </StyledDiv>
  );
};
export default Character;
