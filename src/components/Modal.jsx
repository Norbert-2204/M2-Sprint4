import { useEffect } from "react";
import {
  StyledButton,
  StyledDiv,
  StyledH3,
  StyledImg,
  StyledUl,
} from "../StyledElements";

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
            {character.films?.length > 0 && (
              <StyledDiv $list>
                <StyledH3 $modal>Films</StyledH3>
                <StyledUl>
                  {character.films.map((film) => (
                    <li key={film}>{film}</li>
                  ))}
                </StyledUl>
              </StyledDiv>
            )}
            {character.shortFilms?.length > 0 && (
              <StyledDiv $list>
                <StyledH3 $modal>Short Films</StyledH3>
                <StyledUl>
                  {character.shortFilms.map((film) => (
                    <li key={film}>{film}</li>
                  ))}
                </StyledUl>
              </StyledDiv>
            )}
            {character.videoGames?.length > 0 && (
              <StyledDiv $list>
                <StyledH3 $modal>Video Games</StyledH3>
                <StyledUl>
                  {character.videoGames.map((game) => (
                    <li key={game}>{game}</li>
                  ))}
                </StyledUl>
              </StyledDiv>
            )}
            {character.tvShows?.length > 0 && (
              <StyledDiv $list>
                <StyledH3 $modal>TV Shows</StyledH3>
                <StyledUl>
                  {character.tvShows.map((film) => (
                    <li key={film}>{film}</li>
                  ))}
                </StyledUl>
              </StyledDiv>
            )}
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
