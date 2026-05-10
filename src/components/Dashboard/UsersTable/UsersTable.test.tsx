/// <reference types="vitest" />

import { render, screen, } from "@testing-library/react";
import { vi } from "vitest";
import UsersTable from "./UsersTable.tsx";
import type { User } from "../../../types/user";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

const mockUsers: User[] = [
  {
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
  },
];

describe("UsersTable", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    localStorage.clear();
  });

  it("renders user data correctly", () => {
    render(<UsersTable users={mockUsers} loading={false} />);

    expect(screen.getByText("johndoe")).toBeInTheDocument();
    expect(screen.getByText("Lendsqr")).toBeInTheDocument();
  });

  it("shows loader when loading", () => {
    render(<UsersTable users={[]} loading={true} />);

    expect(document.querySelector(".skeleton-table")).toBeInTheDocument();
  });


  it("shows empty state", () => {
  render(<UsersTable users={[]} loading={false} />);

  expect(screen.getByText(/no users found/i)).toBeInTheDocument();

 });
});

