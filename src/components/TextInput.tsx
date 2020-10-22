import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 2px #000 solid;
  padding: 13px 16px;
  line-height: 1;
  margin-bottom: 30px;

  &:focus {
    border-width: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    outline: none;
    padding: 11px 14px;
  }

  &::placeholder {
    color: #888;
  }
`;

const Suffix = styled.div.attrs({ "aria-hidden": "true" })`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translate(0, -50%);
`;

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  suffix,
  children,
  ...inputProps
}) => (
  <Wrapper>
    <StyledInput {...inputProps} />
    {suffix && <Suffix>{suffix}</Suffix>}
  </Wrapper>
);
