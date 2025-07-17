import { StyledDiv, StyledP, StyledButton } from "../StyledElements";
import Character from "./Character";
import { useFetch } from "../CustomHooks/useFetch";
import { useState } from "react";
import { createPortal } from "react-dom";
import Details from "./Modal";

const totalPages = 147;

const CharactersContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [page, setPage] = useState(1);
  const url = `https://api.disneyapi.dev/character?page=${page}`;
  const { character, isLoading } = useFetch(url);

  const setPagination = () => {
    const buttons = [];

    if (page > 1) {
      buttons.push(
        <StyledButton key="prev" onClick={() => setPage(page - 1)} $pagination>
          &lt;
        </StyledButton>
      );
    }

    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(totalPages, page + 2);

    if (startPage > 1) {
      buttons.push(
        <StyledButton key={1} onClick={() => setPage(1)} $pagination>
          1
        </StyledButton>
      );
      if (startPage > 2) {
        buttons.push(<span key="dots">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <StyledButton
          key={i}
          onClick={() => setPage(i)}
          $pagination
          $three={i >= 100}
          $active={i === page}
        >
          {i}
        </StyledButton>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="dots">...</span>);
      }
      buttons.push(
        <StyledButton
          key={totalPages}
          onClick={() => setPage(totalPages)}
          $pagination
          $three
        >
          {totalPages}
        </StyledButton>
      );
    }

    if (page < totalPages) {
      buttons.push(
        <StyledButton key="next" onClick={() => setPage(page + 1)} $pagination>
          &gt;
        </StyledButton>
      );
    }

    return buttons;
  };

  return (
    <div>
      <StyledDiv $charContainer>
        {isLoading && <StyledP>Loading characters...</StyledP>}
        {character.map((char) => (
          <Character
            key={char._id}
            name={char.name}
            imageUrl={char.imageUrl}
            onClick={() => {
              setSelectedCharacter(char);
              setIsModalOpen(true);
            }}
          />
        ))}
        {isModalOpen &&
          createPortal(
            <Details
              character={selectedCharacter}
              onClick={() => {
                setSelectedCharacter(null);
                setIsModalOpen(false);
              }}
            />,
            document.body
          )}
      </StyledDiv>
      {!isLoading && <StyledDiv $pagi>{setPagination()}</StyledDiv>}
    </div>
  );
};
export default CharactersContainer;
