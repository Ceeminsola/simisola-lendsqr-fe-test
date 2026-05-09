import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Users from "../pages/Users/User";
import Placeholder from "../pages/Placeholder/Placeholder";
import UserDetails from "../pages/UserDetails/UserDetails";

import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* DASHBOARD */}
        <Route element={<DashboardLayout />}>
          <Route path="/users" element={<Users />} />
          <Route path="/guarantors" element={<Placeholder />} />
          <Route path="/loans" element={<Placeholder />} />
          <Route path="/decision-models" element={<Placeholder />} />
          <Route path="/savings" element={<Placeholder />} />
          <Route path="/loan-requests" element={<Placeholder />} />
          <Route path="/whitelist" element={<Placeholder />} />
          <Route path="/karma" element={<Placeholder />} />
          <Route path="/organization" element={<Placeholder />} />
          <Route path="/loan-products" element={<Placeholder />} />
          <Route path="/savings-products" element={<Placeholder />} />
          <Route path="/fees" element={<Placeholder />} />
          <Route path="/transactions" element={<Placeholder />} />
          <Route path="/services" element={<Placeholder />} />
          <Route path="/service-account" element={<Placeholder />} />
          <Route path="/settlements" element={<Placeholder />} />
          <Route path="/reports" element={<Placeholder />} />
          <Route path="/preferences" element={<Placeholder />} />
          <Route path="/pricing" element={<Placeholder />} />
          <Route path="/audit-logs" element={<Placeholder />} />

          <Route path="/users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;