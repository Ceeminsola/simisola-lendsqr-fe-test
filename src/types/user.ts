export interface User {
  id: string;

  organization: string;

  username: string;

  email: string;

  phoneNumber: string;

  dateJoined: string;

  status: "Active" | "Inactive" | "Pending" | "Blacklisted";

  accountBalance: string;

  accountNumber: string;

  tier: number;

  profile: {
    fullName: string;
    gender: string;
    bvn: string;
    maritalStatus: string;
    children: string;
    residence: string;
  };

  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}