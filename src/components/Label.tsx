import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
`;

const LabelText = styled.span`
  font-weight: bold;
`;

const Hint = styled.span`
  color: #888;
`;

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  hint?: string;
}

export const Label: React.FC<LabelProps> = ({
  hint,
  children,
  ...labelProps
}) => (
  <StyledLabel {...labelProps}>
    <LabelText>{children}</LabelText>
    {hint && <Hint>{hint}</Hint>}
  </StyledLabel>
);
