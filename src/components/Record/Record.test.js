import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Record from "./Record";
import { BrowserRouter } from "react-router-dom";

test("Record renders with correct name", () => {
  const testName = "bulbasaur";
  const { getByText } = render(
    <BrowserRouter>
      <Record name={testName} />
    </BrowserRouter>
  );
  const nameElement = getByText(testName);
  expect(nameElement).toBeInTheDocument();
});

test("Record handles click event correctly", () => {
  const testName = "bulbasaur";
  const { getByText } = render(
    <BrowserRouter>
      <Record name={testName} />
    </BrowserRouter>
  );

  const recordContainer = getByText(testName).parentElement;
  fireEvent.click(recordContainer);
  expect(window.location.search).toBe("?name=bulbasaur");
});

test("Record handles double click event correctly", () => {
  const testName = "bulbasaur";
  const { getByText } = render(
    <BrowserRouter>
      <Record name={testName} />
    </BrowserRouter>
  );

  const recordContainer = getByText(testName).parentElement;
  fireEvent.doubleClick(recordContainer);
  expect(window.location.pathname).toBe(`/${testName}`);
});
