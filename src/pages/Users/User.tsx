import "./users.scss";

import usersIcon from "../../assets/icons/users-stat.svg";
import activeUsersIcon from "../../assets/icons/active-users.svg";
import loansUsersIcon from "../../assets/icons/users-loan.svg";
import savingsUsersIcon from "../../assets/icons/users-savings.svg";
import StatsCard from "../../components/Dashboard/StatsCard/StatsCard";
import UsersTable from "../../components/Dashboard/UsersTable/UsersTable";

const Users = () => {
  return (
    <div className="users-page">
      <h1 className="users-page__title">
        Users
      </h1>

      {/* STATS */}
      <div className="users-page__stats">
        <StatsCard
          icon={usersIcon}
          title="Users"
          value="2,453"
        />

        <StatsCard
          icon={activeUsersIcon}
          title="Active Users"
          value="2,453"
        />

        <StatsCard
          icon={loansUsersIcon}
          title="Users with Loans"
          value="12,453"
        />

        <StatsCard
          icon={savingsUsersIcon}
          title="Users with Savings"
          value="102,453"
        />
      </div>

      {/* USERS TABLE */}
      <div className="users-page__table">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;