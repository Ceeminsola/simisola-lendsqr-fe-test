import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders pagination buttons", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={() => {}}
      />
    );

    // check page numbers
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();

    // check nav buttons (symbols, not text)
    expect(screen.getByText("‹")).toBeInTheDocument();
    expect(screen.getByText("›")).toBeInTheDocument();
  });
});