import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        username,
        password,
      });

      const { token } = response.data;

      // save token
      localStorage.setItem("token", token);

      // go to dashboard
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl text-white text-center mb-6">
          Wijesinghe Distributors
        </h1>

        {error && (
          <div className="bg-red-500/10 text-red-400 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-slate-300 text-sm">Username</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-slate-300 text-sm">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded font-medium disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
