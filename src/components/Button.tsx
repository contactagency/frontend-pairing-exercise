import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  background-color: #000;
  color: #fff;
  font-family: "Shapiro Wide", sans-serif;
  font-weight: normal;
  font-size: 12px;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover,
  &:active {
    background-color: #888;
  }

  &:active {
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`;
