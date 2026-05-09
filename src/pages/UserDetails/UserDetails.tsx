import "./user-details.scss";

import { useNavigate } from "react-router-dom";

import type { User } from "../../types/user";

const UserDetails = () => {
  const navigate = useNavigate();

  const user: User = JSON.parse(
    localStorage.getItem("selectedUser") || "{}"
  );

  return (
    <div className="user-details">
      {/* BACK */}
      <button
        className="user-details__back"
        onClick={() => navigate("/users")}
      >
        ← Back to Users
      </button>

      {/* TOP */}
      <div className="user-details__top">
        <h1>User Details</h1>

        <div className="user-details__actions">
          <button className="blacklist">
            BLACKLIST USER
          </button>

          <button className="activate">
            ACTIVATE USER
          </button>
        </div>
      </div>

      {/* USER CARD */}
      <div className="user-details__card">
        <div className="user-details__profile">
          <div className="avatar">
            {user.profile?.fullName?.charAt(0)}
          </div>

          <div>
            <h2>{user.profile?.fullName}</h2>

            <p>{user.accountNumber}</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="user-tier">
          <p>User’s Tier</p>

          <div className="stars">
            ★ ★ ☆
          </div>
        </div>

        <div className="divider"></div>

        <div className="balance">
          <h3>{user.accountBalance}</h3>

          <p>9912345678/Providus Bank</p>
        </div>
      </div>

      {/* TABS */}
      <div className="user-details__tabs">
        <button className="active">
          General Details
        </button>

        <button>Documents</button>

        <button>Bank Details</button>

        <button>Loans</button>

        <button>Savings</button>

        <button>App and System</button>
      </div>

      {/* SECTION */}
      <div className="user-details__section">
        <h3>Personal Information</h3>

        <div className="details-grid">
          <div>
            <span>FULL NAME</span>
            <p>{user.profile?.fullName}</p>
          </div>

          <div>
            <span>PHONE NUMBER</span>
            <p>{user.phoneNumber}</p>
          </div>

          <div>
            <span>EMAIL ADDRESS</span>
            <p>{user.email}</p>
          </div>

          <div>
            <span>BVN</span>
            <p>{user.profile?.bvn}</p>
          </div>

          <div>
            <span>GENDER</span>
            <p>{user.profile?.gender}</p>
          </div>

          <div>
            <span>MARITAL STATUS</span>
            <p>{user.profile?.maritalStatus}</p>
          </div>

          <div>
            <span>CHILDREN</span>
            <p>{user.profile?.children}</p>
          </div>

          <div>
            <span>TYPE OF RESIDENCE</span>
            <p>{user.profile?.residence}</p>
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="user-details__section">
        <h3>Education and Employment</h3>

        <div className="details-grid">
          <div>
            <span>LEVEL OF EDUCATION</span>
            <p>{user.education?.level}</p>
          </div>

          <div>
            <span>EMPLOYMENT STATUS</span>
            <p>{user.education?.employmentStatus}</p>
          </div>

          <div>
            <span>SECTOR OF EMPLOYMENT</span>
            <p>{user.education?.sector}</p>
          </div>

          <div>
            <span>DURATION OF EMPLOYMENT</span>
            <p>{user.education?.duration}</p>
          </div>

          <div>
            <span>OFFICE EMAIL</span>
            <p>{user.education?.officeEmail}</p>
          </div>

          <div>
            <span>MONTHLY INCOME</span>
            <p>{user.education?.monthlyIncome}</p>
          </div>

          <div>
            <span>LOAN REPAYMENT</span>
            <p>{user.education?.loanRepayment}</p>
          </div>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="user-details__section">
        <h3>Socials</h3>

        <div className="details-grid">
          <div>
            <span>TWITTER</span>
            <p>{user.socials?.twitter}</p>
          </div>

          <div>
            <span>FACEBOOK</span>
            <p>{user.socials?.facebook}</p>
          </div>

          <div>
            <span>INSTAGRAM</span>
            <p>{user.socials?.instagram}</p>
          </div>
        </div>
      </div>

      {/* GUARANTOR */}
      <div className="user-details__section">
        <h3>Guarantor</h3>

        <div className="details-grid">
          <div>
            <span>FULL NAME</span>
            <p>{user.guarantor?.fullName}</p>
          </div>

          <div>
            <span>PHONE NUMBER</span>
            <p>{user.guarantor?.phoneNumber}</p>
          </div>

          <div>
            <span>EMAIL ADDRESS</span>
            <p>{user.guarantor?.email}</p>
          </div>

          <div>
            <span>RELATIONSHIP</span>
            <p>{user.guarantor?.relationship}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;