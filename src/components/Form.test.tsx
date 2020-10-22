import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

describe("validation", () => {
  const setup = (labelText: string, validationText: string, value: string) => {
    const component = render(<Form />);
    const input = component.getByLabelText(labelText);
    const validationFeedback = component.getByText(validationText);

    userEvent.type(input, value);

    return { input, validationFeedback };
  };

  describe("name", () => {
    describe("with a name entered", () => {
      it("does not show an error", () => {
        const { validationFeedback } = setup(
          "What's your full, legal name?",
          "This field is required",
          "Homer Simpson"
        );

        expect(validationFeedback).not.toBeVisible();
      });
    });

    describe("with a blank name entered", () => {
      it("shows an error", () => {
        const { validationFeedback } = setup(
          "What's your full, legal name?",
          "This field is required",
          " "
        );

        expect(validationFeedback).toBeVisible();
      });
    });
  });

  describe("email", () => {
    describe("with a valid email entered", () => {
      it("does not show an error", () => {
        const { validationFeedback } = setup(
          "What's your email address?",
          "This is not a valid email address",
          "homer@example.com"
        );

        expect(validationFeedback).not.toBeVisible();
      });
    });

    describe("with an invalid email entered", () => {
      it("shows an error", () => {
        const { validationFeedback } = setup(
          "What's your email address?",
          "This is not a valid email address",
          "not an email"
        );

        expect(validationFeedback).toBeVisible();
      });
    });
  });

  describe("height", () => {
    describe("with a height between 150 and 200 entered", () => {
      it("does not show an error", () => {
        const { validationFeedback } = setup(
          "How tall are you?(between 150cm and 200cm)",
          "Please enter a height between 150cm and 200cm",
          "175"
        );

        expect(validationFeedback).not.toBeVisible();
      });
    });

    describe("with a height less than 150 entered", () => {
      it("shows an error", () => {
        const { validationFeedback } = setup(
          "How tall are you?(between 150cm and 200cm)",
          "Please enter a height between 150cm and 200cm",
          "100"
        );

        expect(validationFeedback).toBeVisible();
      });
    });

    describe("with a height over 200 entered", () => {
      it("shows an error", () => {
        const { validationFeedback } = setup(
          "How tall are you?(between 150cm and 200cm)",
          "Please enter a height between 150cm and 200cm",
          "300"
        );

        expect(validationFeedback).toBeVisible();
      });
    });
  });
});
