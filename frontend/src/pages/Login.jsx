import { useState } from "react";
import api from "../api/axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await api.post("/auth/login", {
        username,
        password
      });

      localStorage.setItem("token", res.data.token);
      navigate("/", { replace: true });
      alert("Login successful");
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl">
        <h1 className="text-2xl text-white text-center mb-6">Wijesinghe Distributors</h1>

        {error && (
          <div className="bg-red-500/10 text-red-400 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-slate-300">Username</label>
            <input
              className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-slate-300">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
