import { motion } from "framer-motion";

// ✅ Correct export (default export)
export default function Hero() {
    return (
      <div className="relative flex items-center justify-center h-[80vh] text-center bg-black text-white">
        <h1 className="text-5xl md:text-7xl font-bold neon-glow">
          Building the Future of Technology
        </h1>
      </div>
    );
  }
  