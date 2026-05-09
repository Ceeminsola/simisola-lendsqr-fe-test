import "./dashboard-layout.scss";

import { Outlet } from "react-router-dom";
import { useState, type SetStateAction } from "react";

import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Header setSidebarOpen={function (_value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
      } } />

      <div className="dashboard-layout__body">
        {/* MOBILE MENU BUTTON */}
        <button
          className="dashboard-layout__menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {sidebarOpen && (
          <div
            className="dashboard-layout__overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;