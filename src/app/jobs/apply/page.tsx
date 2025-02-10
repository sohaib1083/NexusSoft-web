"use client";
import { useState } from "react";

export default function ApplyPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-md">
        <h2 className="text-2xl text-white mb-4">Apply for a Position</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 my-2 rounded bg-gray-800 text-white"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 my-2 rounded bg-gray-800 text-white"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-2 my-2 rounded bg-gray-800 text-white"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <textarea
          placeholder="Why should we hire you?"
          className="w-full p-2 my-2 rounded bg-gray-800 text-white"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-800">
          Submit Application
        </button>
      </form>
    </div>
  );
}
