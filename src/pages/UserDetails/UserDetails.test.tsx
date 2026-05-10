import { render, screen, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import UserDetails from "./UserDetails";

// mock navigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<any>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockUser = {
  id: "1",
  organization: "Lendsqr",
  username: "johndoe",
  email: "john@test.com",
  phoneNumber: "+234123456789",
  dateJoined: "Jan 1, 2024",
  status: "Active",
  accountBalance: "₦200000",
  accountNumber: "1234567890",
  tier: 2,
  profile: {
    fullName: "John Doe",
    gender: "Male",
    bvn: "12345678901",
    maritalStatus: "Single",
    children: "None",
    residence: "Apartment",
  },
  education: {
    level: "B.Sc",
    employmentStatus: "Employed",
    sector: "Tech",
    duration: "2 years",
    officeEmail: "john@test.com",
    monthlyIncome: "₦200k",
    loanRepayment: "₦40k",
  },
  socials: {
    twitter: "@john",
    facebook: "John Doe",
    instagram: "@john",
  },
  guarantor: {
    fullName: "Jane Doe",
    phoneNumber: "+234987654321",
    email: "jane@test.com",
    relationship: "Sister",
  },
};

const renderPage = (userData = mockUser) => {
  localStorage.setItem("selectedUser", JSON.stringify(userData));

  return render(
    <MemoryRouter>
      <UserDetails />
    </MemoryRouter>
  );
};

describe("UserDetails", () => {
  beforeEach(() => {
    localStorage.clear();
    mockNavigate.mockClear();
  });

  it("renders user details from localStorage", () => {
    renderPage();

    // 👇 unique heading
    expect(
      screen.getByRole("heading", { name: /john doe/i })
    ).toBeInTheDocument();

    // 👇 unique values
    expect(screen.getByText("1234567890")).toBeInTheDocument();
    expect(screen.getByText("+234123456789")).toBeInTheDocument();
    expect(screen.getByText("₦200000")).toBeInTheDocument();

    // 👇 FIXED: scoped query (avoids duplicate EMAIL ADDRESS issue)
    const personalSection = screen
      .getByText("Personal Information")
      .closest("section");

    expect(personalSection).toBeInTheDocument();

    expect(
      within(personalSection!).getByText("john@test.com")
    ).toBeInTheDocument();
  });

  it("navigates back to users page when back button is clicked", () => {
    renderPage();

    fireEvent.click(screen.getByText(/back to users/i));

    expect(mockNavigate).toHaveBeenCalledWith("/users");
  });

  it("does not crash when no user exists in localStorage", () => {
    render(
      <MemoryRouter>
        <UserDetails />
      </MemoryRouter>
    );

    expect(screen.getByText(/user details/i)).toBeInTheDocument();
  });
});