import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
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
      gap: 10px;
    `}
    ${(props) =>
    props.$charBlock &&
    css`
      flex-direction: column;
      border: 2px solid ${(props) => props.theme.color};
      padding-bottom: 5px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.blockBackground};
    `}
`;

export const StyledH1 = styled.h1`
  font-weight: bold;
  font-family: "Dancing Script", cursive;
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
`;

export const StyledButton = styled.button`
  background-color: #4c57fa;
  height: 25px;
  width: 90%;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.color};
  transition: 0.5s;
`;
