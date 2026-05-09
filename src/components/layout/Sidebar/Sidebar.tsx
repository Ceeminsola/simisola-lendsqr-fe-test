import "./sidebar.scss";

import organisationIcon from "../../../assets/icons/organisation.svg";
import dashboardIcon from "../../../assets/icons/dashboard.svg";
import usersIcon from "../../../assets/icons/user.svg";
import guarantorsIcon from "../../../assets/icons/guarantors.svg";
import loansIcon from "../../../assets/icons/loan.svg";
import decisionModelsIcon from "../../../assets/icons/models.svg";
import savingsIcon from "../../../assets/icons/savings.svg";
import loanRequestsIcon from "../../../assets/icons/loanreq.svg";
import whitelistIcon from "../../../assets/icons/whitelist.svg";
import karmaIcon from "../../../assets/icons/karma.svg";
import loanproductsIcon from "../../../assets/icons/loanprod.svg";
import savingsProductsIcon from "../../../assets/icons/savingsprod.svg";
import feesIcon from "../../../assets/icons/fees.svg";
import transactionsIcon from "../../../assets/icons/transaction.svg";
import serviceIcon from "../../../assets/icons/services.svg";
import serviceAccountIcon from "../../../assets/icons/serviceaccount.svg";
import settlementIcon from "../../../assets/icons/settlement.svg";
import reportsIcon from "../../../assets/icons/reports.svg";
import preferencesIcon from "../../../assets/icons/preferences.svg";
import pricingIcon from "../../../assets/icons/pricing.svg";
import auditIcon from "../../../assets/icons/audit.svg";
import arrowdownIcon from "../../../assets/icons/arrowdown.svg";

import type { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {/* ORGANIZATION */}
      <div className="sidebar__organization">
        <img src={organisationIcon} alt="organization" />

        <span>Switch Organization</span>

        <img src={arrowdownIcon} alt="arrow down" />
      </div>

      {/* DASHBOARD */}
      <div className="sidebar__dashboard">
        <img src={dashboardIcon} alt="dashboard" />

        <span>Dashboard</span>
      </div>

      {/* CUSTOMERS */}
      <div className="sidebar__section">
        <p className="sidebar__title">CUSTOMERS</p>

        <ul>
          <li
            className="active"
            onClick={() => setSidebarOpen(false)}
          >
            <img src={usersIcon} alt="users" />
            <span>Users</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img src={guarantorsIcon} alt="guarantors" />
            <span>Guarantors</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img src={loansIcon} alt="loans" />
            <span>Loans</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={decisionModelsIcon}
              alt="decision models"
            />
            <span>Decision Models</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img src={savingsIcon} alt="savings" />
            <span>Savings</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={loanRequestsIcon}
              alt="loan requests"
            />
            <span>Loan Requests</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img src={whitelistIcon} alt="whitelist" />
            <span>Whitelist</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img src={karmaIcon} alt="karma" />
            <span>Karma</span>
          </li>
        </ul>
      </div>

      {/* BUSINESSES */}
      <div className="sidebar__section">
        <p className="sidebar__title">BUSINESSES</p>

        <ul>
          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={organisationIcon}
              alt="organization"
            />
            <span>Organization</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={loanproductsIcon}
              alt="loan products"
            />
            <span>Loan Products</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={savingsProductsIcon}
              alt="savings products"
            />
            <span>Savings Products</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={feesIcon}
              alt="fees and charges"
            />
            <span>Fees and Charges</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={transactionsIcon}
              alt="transactions"
            />
            <span>Transactions</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img src={serviceIcon} alt="services" />
            <span>Services</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={serviceAccountIcon}
              alt="service accounts"
            />
            <span>Service Accounts</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={settlementIcon}
              alt="settlements"
            />
            <span>Settlements</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img src={reportsIcon} alt="reports" />
            <span>Reports</span>
          </li>
        </ul>
      </div>

      {/* SETTINGS */}
      <div className="sidebar__section">
        <p className="sidebar__title">SETTINGS</p>

        <ul>
          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={preferencesIcon}
              alt="preferences"
            />
            <span>Preferences</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img
              src={pricingIcon}
              alt="fees and pricing"
            />
            <span>Fees and Pricing</span>
          </li>

          <li onClick={() => setSidebarOpen(false)}>
            <img src={auditIcon} alt="audit logs" />
            <span>Audit Logs</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;