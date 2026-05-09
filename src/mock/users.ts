import type { User } from "../types/user";

const statuses = ["Active", "Inactive", "Pending", "Blacklisted"] as const;

const firstNames = [
  "Chukwu",
  "Amara",
  "Obi",
  "Zainab",
  "Ibrahim",
  "Chioma",
  "Hassan",
  "Tunde",
  "Fatima",
  "Blessing",
  "Kayode",
  "Nkechi",
  "Adeline",
  "Marcus",
  "Sophia",
  "James",
  "Ngozi",
  "Emeka",
  "Elena",
  "Daniel",
  "Grace",
  "Samuel",
  "Priya",
  "Ahmed",
  "Victoria",
];

const lastNames = [
  "Okafor",
  "Adeyemi",
  "Nwosu",
  "Bello",
  "Eze",
  "Oluwaseun",
  "Karim",
  "Johnson",
  "Williams",
  "Ahmed",
  "Ibrahim",
  "Hassan",
  "Adeleke",
  "Oshodi",
  "Kalu",
  "Ejiro",
  "Mensah",
  "Salihu",
  "Okoro",
  "Gbadegesin",
];

// Helper function to generate random date with time
const generateDateWithTime = () => {
  const startDate = new Date("2023-01-01");
  const endDate = new Date("2024-12-31");
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime()),
  );

  const hours24 = Math.floor(Math.random() * 24);
  const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[randomDate.getMonth()];
  const day = randomDate.getDate();
  const year = randomDate.getFullYear();

  return `${month} ${day}, ${year} ${hours12}:${minutes} ${ampm}`;
};

// Helper function to generate random full name
const generateFullName = (index: number) => {
  const firstName = firstNames[index % firstNames.length];
  const lastName = lastNames[index % lastNames.length];
  return `${firstName} ${lastName}`;
};

// Helper function to generate username from full name
const generateUsername = (fullName: string) => {
  const nameParts = fullName.toLowerCase().split(" ");
  return `${nameParts[0]}.${nameParts[1]}`;
};

// Helper function to generate email from full name and organization
const generateEmailFromName = (fullName: string, organization: string) => {
  const firstName = fullName.toLowerCase().split(" ")[0];
  const organizationName = organization.toLowerCase();
  const email = `${firstName}@${organizationName}.com`;
  return email;
};

export const users: User[] = Array.from({ length: 500 }, (_, index) => {
  const fullName = generateFullName(index);
  const organization = ["Lendsqr", "Irorun", "Lendstar", "Lendster"][
    Math.floor(Math.random() * 4)
  ];
  const username = generateUsername(fullName);
  const email = generateEmailFromName(fullName, organization);
  return {
    id: String(index + 1),

    organization: organization,

    username: username,

    email: email,

    phoneNumber: `+234${Math.floor(7000000000 + Math.random() * 2000000000)}`,

    dateJoined: generateDateWithTime(),

    status: statuses[Math.floor(Math.random() * statuses.length)],

    accountBalance: `₦${Math.floor(
      100000 + Math.random() * 900000,
    ).toLocaleString()}.00`,

    accountNumber: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,

    tier: Math.floor(Math.random() * 3) + 1,

    profile: {
      fullName: fullName,

      gender: ["Male", "Female"][Math.floor(Math.random() * 2)],

      bvn: `${Math.floor(10000000000 + Math.random() * 90000000000)}`,

      maritalStatus: "Single",

      children: "None",

      residence: "Parent’s Apartment",
    },

    education: {
      level: "B.Sc",

      employmentStatus: ["Employed", "Unemployed"][
        Math.floor(Math.random() * 2)
      ],

      sector: ["FinTech", "Tech", "Business"][Math.floor(Math.random() * 3)],

      duration: ["2 years", "4 years", "6 years"][
        Math.floor(Math.random() * 3)
      ],

      officeEmail: email,

      monthlyIncome: "₦200,000 - ₦400,000",

      loanRepayment: "40,000",
    },

    socials: {
      twitter: `@user${index + 1}`,

      facebook: fullName,

      instagram: `@insta${index + 1}`,
    },

    guarantor: (() => {
      const guarantorName = generateFullName(index * 2 + 1);
      return {
        fullName: guarantorName,

        phoneNumber: `+234${Math.floor(7000000000 + Math.random() * 2000000000)}`,

        email: generateEmailFromName(guarantorName, organization),

        relationship: ["Sister", "Brother", "Friend"][
          Math.floor(Math.random() * 3)
        ],
      };
    })(),
  };
});
