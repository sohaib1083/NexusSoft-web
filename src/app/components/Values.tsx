import { motion } from "framer-motion";
import { FaRocket, FaCode, FaGlobe, FaGem } from "react-icons/fa";

export default function Values() {
  return (
    <section id="values" className="py-16 bg-[#0a0a0a] text-white text-center">
      <h2 className="text-4xl font-bold text-white mb-10">
        Our <span className="text-purple-500 glow-text">Values</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <motion.div className="p-6 bg-[#161616] border border-purple-500 rounded-lg shadow-lg flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaRocket className="text-purple-400 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold">Innovation & Growth</h3>
          <p className="text-gray-400 mt-2">Push boundaries with cutting-edge technology.</p>
        </motion.div>

        <motion.div className="p-6 bg-[#161616] border border-purple-500 rounded-lg shadow-lg flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaCode className="text-purple-400 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold">Code-First Culture</h3>
          <p className="text-gray-400 mt-2">Your code speaks louder than credentials.</p>
        </motion.div>

        <motion.div className="p-6 bg-[#161616] border border-purple-500 rounded-lg shadow-lg flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaGlobe className="text-purple-400 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold">Global Collaboration</h3>
          <p className="text-gray-400 mt-2">Work with teams in Boston & Karachi.</p>
        </motion.div>

        <motion.div className="p-6 bg-[#161616] border border-purple-500 rounded-lg shadow-lg flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaGem className="text-purple-400 text-4xl mb-4" />
          <h3 className="text-2xl font-semibold">Equity & Ownership</h3>
          <p className="text-gray-400 mt-2">Be a shareholder in our success.</p>
        </motion.div>
      </div>
    </section>
  );
}
