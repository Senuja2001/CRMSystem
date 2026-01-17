export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Wijesinghe Distributors
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-slate-300 mb-1">Username</label>
            <input
              className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 text-white"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 text-white"
              placeholder="Enter password"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
