import { render, screen } from "@testing-library/react";

import StatsCard from "./StatsCard";

describe("StatsCard", () => {
  it("renders title correctly", () => {
    render(
      <StatsCard
        icon="/icon.svg"
        title="Users"
        value={500}
      />,
    );

    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  it("renders value correctly", () => {
    render(
      <StatsCard
        icon="/icon.svg"
        title="Users"
        value={500}
      />,
    );

    expect(screen.getByText("500")).toBeInTheDocument();
  });
});