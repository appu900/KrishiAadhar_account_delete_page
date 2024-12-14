import { useState } from "react";
import axios from "axios";

export default function DeleteAccount() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userResponse = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (!userResponse) {
      return;
    }

    const response = await axios.post(
      "http://47.247.12.114:3001/api/farmer/account/delete",
      { phoneNumber, password, feedback }
    );
    console.log(response);
    if (response.status === 200) {
      alert("Account deleted successfully");
    }

    console.log("Account deletion requested", { phoneNumber, password, feedback });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Delete Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              PhoneNumber
            </label>
            <input
              type="text"
              id="email"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="your phone number"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Reason for leaving
            </label>
            <select
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            >
              <option value="">Select a reason</option>
              <option value="not-useful">Not useful for me</option>
              <option value="too-expensive">Too expensive</option>
              <option value="found-alternative">Found an alternative</option>
              <option value="temporary">Temporary break</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
            >
              Delete My Account
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          This action cannot be undone. Please be certain.
        </p>
      </div>
    </div>
  );
}
