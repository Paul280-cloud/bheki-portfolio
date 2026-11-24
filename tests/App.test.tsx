import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("shows the name, both projects, and a way to contact", () => {
    render(<App />);

    expect(screen.getAllByText("Bheki Buthelezi").length).toBeGreaterThan(0);
    expect(screen.getByText("SiteLeads")).toBeInTheDocument();
    expect(screen.getByText("FixMyKasi")).toBeInTheDocument();
    expect(
      screen.getByText(/buthelezipaul9@gmail.com/i),
    ).toBeInTheDocument();
  });

  it("links to both live projects", () => {
    render(<App />);

    const liveLinks = screen.getAllByRole("link", { name: /Live site/i });
    const hrefs = liveLinks.map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("https://siteleads.vercel.app");
    expect(hrefs).toContain("https://fixmykasi.vercel.app");
  });
});
