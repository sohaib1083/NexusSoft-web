"use client";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Values from "./components/Values";
// import Careers from "./components/Careers";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          className="text-6xl font-bold text-purple-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building the Future <br />
          <span className="text-purple-500 glow-text">of Technology</span>
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

      {/* Our Values Section */}
      <Values />

      {/* Careers Section */}
      {/* <Careers /> */}

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
}
