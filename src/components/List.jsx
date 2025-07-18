import { StyledDiv, StyledH3, StyledUl } from "../StyledElements";
const List = ({ character, type, desc }) => {
  const items = character?.[type];
  return (
    Array.isArray(items) &&
    items.length > 0 && (
      <StyledDiv $list>
        <StyledH3 $modal>{desc}</StyledH3>
        <StyledUl>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </StyledUl>
      </StyledDiv>
    )
  );
};
export default List;
