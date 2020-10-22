import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 8px 22px;
  border-left: 5px #d32014 solid;
  margin: -15px 0 30px;
`;

const Message = styled.div`
  color: #d32014;
`;

const Helper = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #888;
  margin-top: 6px;
`;

export interface ValidationFeedbackProps {
  message: string;
  helper?: string;
}

export const ValidationFeedback: React.FC<ValidationFeedbackProps> = ({
  message,
  helper,
}) => (
  <Wrapper>
    <Message>{message}</Message>
    {helper && <Helper>{helper}</Helper>}
  </Wrapper>
);
