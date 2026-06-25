import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-10 flex gap-8">

      {/* Sidebar */}

      <div className="w-64 bg-gray-200 p-5 rounded-lg">

        <h2 className="text-2xl font-bold mb-5">
          Dashboard
        </h2>

        <div className="flex flex-col gap-3">

          <NavLink to="profile">
            Profile
          </NavLink>

          <NavLink to="settings">
            Settings
          </NavLink>

          <NavLink to="analytics">
            Analytics
          </NavLink>

        </div>

      </div>

      {/* Content */}

      <div className="flex-1 bg-gray-100 rounded-lg p-8">

        <Outlet />

      </div>

    </div>
  );
}

export default Dashboard;