import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Label } from "./Label";
import { RadioInput } from "./RadioInput";
import { TextInput } from "./TextInput";
import { ValidationFeedback } from "./ValidationFeedback";

const Wrapper = styled.main`
  width: 560px;
`;

export const Form: React.FC = () => (
  <Wrapper>
    <form>
      <Label htmlFor="name">What's your full, legal name?</Label>
      <TextInput type="text" placeholder="Homer Simpson" id="name" />
      <ValidationFeedback
        message="This field is required"
        helper="Please provide your full name"
      />

      <Label htmlFor="email">What's your email address?</Label>
      <TextInput type="email" placeholder="homer@example.com" id="email" />
      <ValidationFeedback
        message="This is not a valid email address"
        helper="Enter your email, making it sure has an @ and a dot"
      />

      <Label>What gender do you identify as?</Label>
      <RadioInput
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "non_binary", label: "Non-binary" },
        ]}
        name="gender"
      />

      <Label htmlFor="height" hint="(between 150cm and 200cm)">
        How tall are you?
      </Label>
      <TextInput type="text" placeholder="175" suffix="cm" id="height" />
      <ValidationFeedback message="Please enter a height between 150cm and 200cm" />

      <Button type="submit">Submit Application</Button>
    </form>
  </Wrapper>
);
