import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 11px 0 30px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledRadio = styled.input.attrs({ type: "radio" })`
  appearance: none;
  margin-right: 13px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px #000 solid;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked::before {
    content: " ";
    width: 16px;
    height: 16px;
    background-color: #000;
    border-radius: 50%;
  }
`;

export interface RadioInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "type"> {
  options: { value: string; label: string }[];
}

export const RadioInput: React.FC<RadioInputProps> = ({
  options,
  ...radioProps
}) => (
  <Wrapper>
    {options.map(({ value, label }, index) => (
      <StyledLabel key={index}>
        <StyledRadio
          value={value}
          defaultChecked={index === 0}
          {...radioProps}
        />
        {label}
      </StyledLabel>
    ))}
  </Wrapper>
);
