import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("displays an image of the logo, the name of the app and has a link(s) for navigation", () => {
    // Setup
    render(<Header />);
    // Verify
    expect(screen.getByRole("img", { name: /logo/i })).toBeVisible(); // TODO: set alt text to 'logo'
    expect(screen.getByText(/Todo/i)).toBeVisible();
    expect(screen.getByText(/App/i)).toBeVisible();
    expect(screen.getByRole("link", { name: /about/i })).toBeVisible();
  });
});
