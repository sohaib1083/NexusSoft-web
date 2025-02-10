"use client";
// import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-10 bg-black text-white">
      <motion.h1
        className="text-6xl font-bold text-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Building the Future <br />
        <span className="text-purple-500">of Technology</span>
      </motion.h1>
      <p className="mt-4 text-gray-300 max-w-2xl">
        Join our innovative team developing cutting-edge AI/ML and mobile solutions.
      </p>
      <div className="mt-6 space-x-4">
        <button className="bg-purple-600 px-6 py-3 rounded-lg text-white hover:bg-purple-800">
          View Open Positions
        </button>
        <button className="border border-purple-600 px-6 py-3 rounded-lg text-white hover:bg-purple-800">
          Our Projects
        </button>
      </div>
    </div>
  );
}
