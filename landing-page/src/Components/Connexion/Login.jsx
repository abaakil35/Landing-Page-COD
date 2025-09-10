import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [mode, setMode] = useState("login");
  const location = useLocation();
  // ...existing code...
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    if (location && location.pathname === "/signup") setMode("signup");
    else setMode("login");
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (mode === "login") {
        const resp = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await resp.json().catch(() => ({}));
        if (!resp.ok)
          throw new Error(data.message || resp.statusText || "Login failed");
        if (data.token) localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        const resp = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await resp.json().catch(() => ({}));
        if (!resp.ok)
          throw new Error(data.message || resp.statusText || "Signup failed");
        if (data.token) localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbf9fd] via-[#f7f2fb] to-[#f3f7ff] flex items-center justify-center py-3 px-4 overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Top-left home button outside the card */}
        <div className="absolute left-4 top-4 z-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white shadow text-sm text-gray-700 ring-1 ring-gray-100"
          >
            <svg
              className="w-4 h-4 transform -rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10.5L12 4l9 6.5M12 4v16"
              />
            </svg>
            Home
          </Link>
        </div>
        {/* Decorative subtle circles (non-overflowing) */}
        <div className="pointer-events-none absolute -top-10 -left-16 w-40 h-40 bg-[#efe0f6] rounded-full filter blur-2xl opacity-60" />
        <div className="pointer-events-none absolute -bottom-10 -right-16 w-48 h-48 bg-[#f6e7f3] rounded-full filter blur-2xl opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left - Branding */}
          <div className="hidden md:flex flex-col items-start justify-center px-10 py-12 bg-gradient-to-b from-[#5e255dff] to-[#a855f7] text-white">
            <div className="mb-6">
              <img
                src="/src/assets/logo_white.png"
                alt="COD Rocket"
                className="w-32"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <h3 className="text-2xl font-extrabold leading-tight mb-3">
              Welcome to COD Rocket
            </h3>
            <p className="text-sm text-white/90 mb-6 max-w-xs">
              Manage your Cash-on-Delivery orders, recover lost revenue and
              boost conversions with simple tools built for Shopify merchants.
            </p>
            <ul className="text-sm space-y-2 opacity-95">
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-md">
                  ✓
                </span>
                <span>Fast setup</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-md">
                  ✓
                </span>
                <span>No credit card</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                to="/doc"
                className="inline-block px-4 py-2 bg-white/20 rounded-md text-white text-sm font-semibold border border-white/20"
                aria-label="Learn more about COD Rocket"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right - Form */}
          <div className="px-8 py-10 md:py-12 flex items-center justify-center">
            <div className="w-full max-w-lg">
              <div className="text-center mb-6 md:mb-8">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#5e255dff] to-[#a855f7] mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#2d123a]">
                  Sign in to your account
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Enter your credentials to continue
                </p>
              </div>

              <div className="relative h-auto">
                {/* Sliding panel container */}
                <div className="relative" style={{ minHeight: 420 }}>
                  {/* Login form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4 absolute inset-0 w-full"
                    initial={false}
                    animate={
                      mode === "login"
                        ? { x: 0, opacity: 1 }
                        : { x: -320, opacity: 0 }
                    }
                    transition={{ type: "spring", stiffness: 220, damping: 25 }}
                    aria-hidden={mode !== "login"}
                  >
                    {error && (
                      <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-2 rounded mb-2">
                        {error}
                      </div>
                    )}
                    <label className="block text-sm text-gray-700">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d9b3ff] focus:border-transparent outline-none"
                      required
                    />

                    <label className="block text-sm text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d9b3ff] focus:border-transparent outline-none"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6.22 6.22A9.959 9.959 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.968 9.968 0 01-4.587 5.544"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3l18 18"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S3.732 16.057 2.458 12z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#5e255dff] rounded"
                        />
                        <span className="text-gray-600">Remember me</span>
                      </label>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-[#5e255dff] font-medium"
                      >
                        Forgot?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5e255dff] to-[#a855f7] text-white px-4 py-3 rounded-lg font-semibold shadow hover:scale-[1.01] transition-transform disabled:opacity-60"
                    >
                      {isLoading ? "Signing in..." : "Sign in"}
                    </button>

                    <div className="text-center text-sm text-gray-500 mt-3">
                      Don’t have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setMode("signup")}
                        className="text-[#5e255dff] font-medium"
                      >
                        Sign up
                      </button>
                    </div>
                  </motion.form>

                  {/* Signup form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4 absolute inset-0 w-full"
                    initial={false}
                    animate={
                      mode === "signup"
                        ? { x: 0, opacity: 1 }
                        : { x: 320, opacity: 0 }
                    }
                    transition={{ type: "spring", stiffness: 220, damping: 25 }}
                    aria-hidden={mode !== "signup"}
                  >
                    {error && (
                      <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-2 rounded mb-2">
                        {error}
                      </div>
                    )}
                    <label className="block text-sm text-gray-700">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d9b3ff] focus:border-transparent outline-none"
                      required
                    />

                    <label className="block text-sm text-gray-700">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d9b3ff] focus:border-transparent outline-none"
                      required
                    />

                    <label className="block text-sm text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d9b3ff] focus:border-transparent outline-none"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6.22 6.22A9.959 9.959 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.968 9.968 0 01-4.587 5.544"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3l18 18"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S3.732 16.057 2.458 12z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5e255dff] to-[#a855f7] text-white px-4 py-3 rounded-lg font-semibold shadow hover:scale-[1.01] transition-transform disabled:opacity-60"
                    >
                      {isLoading ? "Creating..." : "Create account"}
                    </button>

                    <div className="text-center text-sm text-gray-500 mt-3">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setMode("login")}
                        className="text-[#5e255dff] font-medium"
                      >
                        Sign in
                      </button>
                    </div>
                  </motion.form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
