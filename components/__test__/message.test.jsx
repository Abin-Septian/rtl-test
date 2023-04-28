import React from "react";
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import Message from "../Message";

test("renders the message text", () => {
    const { getByText } = render(<Message text="Hello, World!" />);
    const textElement = getByText("Hello, World!");
    expect(textElement).toBeInTheDocument();
});
