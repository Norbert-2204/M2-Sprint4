import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.$header &&
    css`
      justify-content: space-between;
      border-bottom: solid 2px ${(props) => props.theme.color};
      width: 100%;
      padding: 0px 20px;
      transition: 0.4s;
    `}
  ${(props) =>
    props.$slider &&
    css`
      gap: 10px;
      ${SliderInput}:checked + ${SliderTrack} {
        background-color: #4f4f4f;
      }

      ${SliderInput}:checked + ${SliderTrack}::before {
        transform: translateX(26px);
      }
    `}
    ${(props) =>
    props.$charContainer &&
    css`
      padding: 20px;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    `}
    ${(props) =>
    props.$charBlock &&
    css`
      flex-direction: column;
      border: 2px solid ${(props) => props.theme.color};
      padding-bottom: 5px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.blockBackground};
      width: 150px;
    `};
  ${(props) =>
    props.$pagi &&
    css`
      padding-bottom: 20px;
      gap: 5px;
    `}
  ${(props) =>
    props.$modal &&
    css`
      gap: 5px;
      width: 100%;
      align-items: flex-start;
    `}
  ${(props) =>
    props.$list &&
    css`
      display: flex;
      flex-direction: column;
      max-width: 250px;
      gap: 8px;

      ul {
        list-style: disc;
        padding-left: 20px;
        margin: 0;
        max-height: 150px;
        overflow-y: auto;
      }

      li {
        // word-break: break-word;
        font-size: 14px;
        line-height: 1.3;
      }
    `}
  ${(props) =>
    props.$modalWrapper &&
    css`
      flex-direction: column;
      border: 2px solid ${(props) => props.theme.color};
      padding: 20px;
      border-radius: 8px;
      background-color: ${(props) => props.theme.blockBackground};

      width: 90vw;
      max-width: 300px;
      max-height: 90vh;

      flex-wrap: wrap;
      gap: 20px;

      overflow-y: auto;
      // word-break: break-word;
    `}
  ${(props) =>
    props.$position &&
    css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
    ${(props) =>
    props.$blur &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(4px);
    `}
`;

export const StyledH1 = styled.h1`
  font-weight: bold;
  font-family: "Dancing Script", cursive;
`;
export const StyledH3 = styled.h3`
  color: ${(props) => props.theme.color};
  transition: 0.4s;
  font-size: 14px;
  white-space: normal;
  word-break: break-word;
  padding: 0px 5px;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* max 2 linie */
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 30px; /* dopasuj do wysokości 2 linii */
  ${(props) =>
    props.$modal &&
    css`
      padding: 0;
      margin: 0;
    `}
`;

export const StyledLabel = styled.label`
  ${(props) =>
    props.$slider &&
    css`
      position: relative;
      display: inline-block;
      width: 50px;
      height: 24px;
    `}
`;
export const SliderInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
export const SliderTrack = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;

  &::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    background-image: url(${(props) =>
      props.$ligth ? "/sun.jpg" : "/moon.png"});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100px;
  ${(props) =>
    props.$modal &&
    css`
      width: 150px;
      height: 150px;
      border-radius: 50%;
    `}
`;

export const StyledButton = styled.button`
  transition: 0.5s;
  font-family: Roboto, sans-serif;
  cursor: pointer;

  ${(props) =>
    props.$learn &&
    css`
      background-color: #4c57fa;
      height: 25px;
      width: 90%;
      border: none;
      border-radius: 5px;
      color: ${(props) => props.theme.color};
      box-shadow: 3px 2px 3px;
    `}

  ${(props) =>
    props.$pagination &&
    css`
      width: 25px;
      height: 25px;
      border: solid 1px ${(props) => props.theme.color};
      border-radius: 50%;
      background-color: ${(props) => props.theme.paginationBackground};
      color: #fff;
    `}
    ${(props) =>
    props.$three &&
    css`
      width: 35px;
    `}
    ${(props) =>
    props.$active &&
    css`
      background-color: ${(props) => props.theme.activeBackground};
    `}
    ${(props) =>
    props.$close &&
    css`
      background-color: #4c57fa;
      width: 75px;
      border: none;
      border-radius: 4px;
    `}
`;

export const StyledP = styled.p`
  font-size: 32px;
  color: ${(props) => props.theme.color};
`;

export const StyledUl = styled.ul`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  list-style: disc;
`;
