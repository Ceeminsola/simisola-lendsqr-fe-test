import { render, screen } from "@testing-library/react";
import StatusBadge from "./StatusBadge";

describe("StatusBadge", () => {
  it("renders active status", () => {
    render(<StatusBadge status="Active" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders inactive status", () => {
    render(<StatusBadge status="Inactive" />);
    expect(screen.getByText("Inactive")).toBeInTheDocument();
  });
});