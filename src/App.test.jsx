import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App, { STAGES } from "./App.jsx";

describe("App", () => {
  it("renders the project title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /DevOps Based Automated Website Deployment/i })
    ).toBeInTheDocument();
  });

  it("shows every pipeline stage", () => {
    render(<App />);
    STAGES.forEach((s) => {
      expect(screen.getByRole("button", { name: new RegExp(s.title, "i") })).toBeInTheDocument();
    });
  });

  it("updates the detail panel when a stage is clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Deploy/i }));
    expect(screen.getByTestId("stage-detail")).toHaveTextContent("Step 5: Deploy");
  });

  it("displays build metadata", () => {
    render(<App />);
    expect(screen.getByTestId("commit")).toHaveTextContent("abc1234");
    expect(screen.getByTestId("build-time")).toHaveTextContent("2026-07-01");
  });
});
