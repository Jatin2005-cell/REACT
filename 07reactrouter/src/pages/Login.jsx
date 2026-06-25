import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();               // login state true
    navigate("/dashboard/profile"); // redirect
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="shadow-lg p-10 rounded-lg">

        <h1 className="text-4xl font-bold mb-5">
          Login Page
        </h1>

        <button
          onClick={handleLogin}
          className="bg-orange-600 text-white px-5 py-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;