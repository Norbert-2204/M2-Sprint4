import { useEffect } from "react";
import {
  StyledButton,
  StyledDiv,
  StyledH3,
  StyledImg,
  StyledUl,
} from "../StyledElements";
import List from "./List";

const Details = ({ onClick, character }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <StyledDiv onClick={onClick} $blur>
      <StyledDiv onClick={(e) => e.stopPropagation()} $position>
        <StyledDiv $modalWrapper>
          <StyledImg $modal src={character.imageUrl} />
          <StyledH3>{character.name}</StyledH3>
          <StyledDiv $modal>
            <List character={character} type="films" desc="Films" />
            <List character={character} type="shortFilms" desc="Short Films" />
            <List character={character} type="videoGames" desc="Video Games" />
            <List character={character} type="tvShows" desc="TV Shows" />
          </StyledDiv>
          <StyledButton $close onClick={onClick}>
            Close
          </StyledButton>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};
export default Details;
