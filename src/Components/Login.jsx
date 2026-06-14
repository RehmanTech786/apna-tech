import { useState } from "react";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      {/* Header Title */}
      <div className="flex justify-center mb-5">
        <h2 className="text-3xl font-semibold text-center">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>
      </div>

      {/* Tab Controls */}
      <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
        {/* Active Tab Background */}
        <div
          className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all duration-300 ${
            isLoginMode ? "left-0" : "left-1/2"
          }`}
        />

        <button
          onClick={() => setIsLoginMode(true)}
          className={`w-1/2 text-lg font-medium transition-all z-10 ${
            isLoginMode ? "text-white" : "text-black"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setIsLoginMode(false)}
          className={`w-1/2 text-lg font-medium transition-all z-10 ${
            !isLoginMode ? "text-white" : "text-black"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* Form Section */}
      <form className="space-y-4">
        {/* Sign Up Name Field */}
        {!isLoginMode && (
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
          />
        )}

        {/* Shared Fields */}
        <input
          type="email"
          placeholder="Enter Email"
          required
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          required
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Sign Up Confirm Password */}
        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
          />
        )}

        {/* Forgot Password */}
        {isLoginMode && (
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-400 hover:opacity-90 transition"
        >
          {isLoginMode ? "Login" : "Sign Up"}
        </button>

        {/* Switch Mode */}
        <p className="text-center text-sm">
          {isLoginMode
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline"
            onClick={(e) => {
              e.preventDefault();
              setIsLoginMode(!isLoginMode);
            }}
          >
            {isLoginMode ? "Sign Up Now" : "Login"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;