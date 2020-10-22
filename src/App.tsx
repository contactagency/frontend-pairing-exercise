import React from "react";
import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

export const App: React.FC = () => (
  <>
    <Header />
    <Container>
      <Aside />
      <Form />
    </Container>
  </>
);
