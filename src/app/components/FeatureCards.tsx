import { motion } from "framer-motion";

const features = [
  { title: "Innovation First", description: "AI/ML-driven solutions" },
  { title: "Growth Mindset", description: "Equity opportunities" },
  { title: "Global Team", description: "Boston & Karachi collaboration" }
];

export default function FeatureCards() {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="p-6 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-xl font-bold text-purple-400">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
