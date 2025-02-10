"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all ${
        scrolling ? "bg-black/50 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-white text-2xl font-bold">NexusSoft</h1>
        <div className="space-x-6">
          <a href="#projects" className="text-white hover:text-purple-400">
            Projects
          </a>
          <a href="#applications" className="text-white hover:text-purple-400">
            Applications
          </a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
            Join Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
