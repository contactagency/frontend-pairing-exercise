import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { Logo } from "./Logo";

const StyledHeader = styled.header`
  background-color: #000;
  padding: 30px 0;
  margin-bottom: 80px;
`;

export const Header: React.FC = () => (
  <StyledHeader>
    <Container>
      <Logo />
    </Container>
  </StyledHeader>
);
