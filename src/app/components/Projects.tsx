import { useState } from "react";

const projects = [
  { title: "AI Chatbot", category: "Artificial Intelligence" },
  { title: "Smart Tutor", category: "Education Tech" },
  { title: "Enterprise Suite", category: "Business" }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold text-purple-400">Our Projects</h2>
      <div className="flex space-x-4 mt-4">
        {["All", "Artificial Intelligence", "Education Tech", "Business"].map(category => (
          <button key={category} onClick={() => setFilter(category)} className="px-4 py-2 bg-purple-500 rounded">
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-900 rounded-lg border border-purple-500">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-gray-300">{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
