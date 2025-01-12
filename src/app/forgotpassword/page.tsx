"use client";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function ForgotPasswordPage() {
  const [user, setUser] = React.useState({
    email: "",
    new_password: "",
    confirm_password: "",
  });
  const router = useRouter();
  const [error, setError] = React.useState("");

  // Validate the form inputs
  const validateForm = () => {
    if (!user.email) {
      setError("Email is required.");
      return false;
    }
    if (!user.new_password || !user.confirm_password) {
      setError("Both password fields are required.");
      return false;
    }
    if (user.new_password !== user.confirm_password) {
      setError("Passwords do not match.");
      return false;
    }
    setError(""); // Clear error if validation passes
    return true;
  };

  const onSetNewPassword = async () => {
    if (!validateForm()) {
      return; // Stop execution if validation fails
    }
    try {
      const payload = {
        email: user.email,
        password: user.new_password, // Backend expects "password"
      };

      const response = await axios.post("/api/users/forgotpassword", payload);
      console.log("Password Changed successfully", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Password didn't changed! Try Again", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl ">Welcome To Forgot Password Page :)</h1>
      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <hr />
      <label htmlFor="password">New Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="text"
        value={user.new_password}
        onChange={(e) => setUser({ ...user, new_password: e.target.value })}
        placeholder="Enter new password..."
      />
      <hr />
      <label htmlFor="password">Confirm Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="text"
        value={user.confirm_password}
        onChange={(e) => setUser({ ...user, confirm_password: e.target.value })}
        placeholder="Confirm new password..."
      />
      {/* Display error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={onSetNewPassword}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Submit
      </button>
    </div>
  );
}
