import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Github",
      path: "/github",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <h1 className="text-3xl font-bold">
          your<span className="text-orange-600">logo</span>
        </h1>

        {/* Navigation */}

        <nav>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700 hover:text-orange-600"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Authentication Buttons */}

        <div className="flex gap-4">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/dashboard/profile")}
                className="font-medium hover:text-orange-600"
              >
                Dashboard
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="font-medium hover:text-orange-600"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/login")}
                className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-700"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;