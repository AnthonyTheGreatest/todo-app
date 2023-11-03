import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// To resolve error 'Error: useLocation() may be used only in the context of a <Router> component':
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("displays an image of the logo, the name of the app and has a link(s) for navigation", () => {
    // Setup
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    // Verify
    expect(screen.getByRole("img", { name: /logo/i })).toBeVisible(); // TODO: set alt text to 'logo'
    expect(screen.getByText(/todo/i)).toBeVisible();
    expect(screen.getByText("App")).toBeVisible(); // exact match
    expect(screen.getByText(/the app/i)).toBeVisible();
    expect(screen.getByText(/about/i)).toBeVisible();
  });
});
