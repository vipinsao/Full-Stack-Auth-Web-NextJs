"use client";
import React, { use } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function ForgotPage() {
  const [user, setUser] = React.useState({
    email: "",
  });
  const router = useRouter();
  const onForgot = async () => {
    try {
      const response = await axios.post("/api/users/forgot", user);
      console.log("User Present", response.data);
      toast.success("User Prsesnt");
      router.push("/login");
    } catch (error: any) {
      console.log("User Doesnt Exists", error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl ">Checking User Exists or Not :)</h1>
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter your email..."
      />
      <button
        onClick={onForgot}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Submit
      </button>
    </div>
  );
}
