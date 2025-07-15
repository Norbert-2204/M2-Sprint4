import {
  StyledH1,
  StyledDiv,
  StyledLabel,
  SliderInput,
  SliderTrack,
} from "../StyledElements";

const Header = ({ toggleTheme, isLigthMode }) => {
  return (
    <StyledDiv $header>
      <StyledH1 $head>Disney APP</StyledH1>
      <StyledDiv $slider>
        <StyledLabel $slider>
          <SliderInput
            type="checkbox"
            checked={isLigthMode}
            onChange={toggleTheme}
          />
          <SliderTrack $ligth={isLigthMode} />
        </StyledLabel>
        <p>Theme</p>
      </StyledDiv>
    </StyledDiv>
  );
};
export default Header;
