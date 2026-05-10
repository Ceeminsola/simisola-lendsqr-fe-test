import "./users.scss";

import { useEffect, useState } from "react";

import usersIcon from "../../assets/icons/users-stat.svg";
import activeUsersIcon from "../../assets/icons/active-users.svg";
import loansUsersIcon from "../../assets/icons/users-loan.svg";
import savingsUsersIcon from "../../assets/icons/users-savings.svg";

import StatsCard from "../../components/Dashboard/StatsCard/StatsCard";
import UsersTable from "../../components/Dashboard/UsersTable/UsersTable";

import { fetchUsers } from "../../services/userService";

import type { User } from "../../types/user";

const Users = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);

        const data = await fetchUsers();

        setUsersData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const totalUsers = usersData.length;

  const activeUsers = usersData.filter(
    (user) => user.status === "Active",
  ).length;

  const usersWithLoans = usersData.filter(
    () => Math.random() > 0.5,
  ).length;

  const usersWithSavings = usersData.filter(
    () => Math.random() > 0.3,
  ).length;

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
          value={totalUsers}
        />

        <StatsCard
          icon={activeUsersIcon}
          title="Active Users"
          value={activeUsers}
        />

        <StatsCard
          icon={loansUsersIcon}
          title="Users with Loans"
          value={usersWithLoans}
        />

        <StatsCard
          icon={savingsUsersIcon}
          title="Users with Savings"
          value={usersWithSavings}
        />
      </div>

      {/* USERS TABLE */}
      <div className="users-page__table">
        <UsersTable
          users={usersData}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Users;