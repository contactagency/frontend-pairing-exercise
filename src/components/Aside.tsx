import React from "react";
import styled from "styled-components";
import modelImage from "../assets/model.jpg";

const Wrapper = styled.aside`
  width: 306px;
`;

const Heading = styled.h1`
  font-family: "Shapiro Wide", sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 52px;
  margin: 0 0 20px;
  text-transform: uppercase;
`;

const LeadIn = styled.p`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 40px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Aside: React.FC = () => (
  <Wrapper>
    <Heading>Apply</Heading>
    <LeadIn>
      Want to work with Contact?
      <br />
      Apply to be a model today.
    </LeadIn>
    <Image src={modelImage} alt="A picture of a model" />
  </Wrapper>
);
