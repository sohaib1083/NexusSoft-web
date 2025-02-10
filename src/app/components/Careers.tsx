const jobs = [
    { title: "AI Engineer", department: "AI/ML", location: "Remote" },
    { title: "React Native Developer", department: "Mobile", location: "Karachi" }
  ];
  
  export default function Careers() {
    return (
      <div className="p-10">
        <h2 className="text-4xl font-bold text-purple-400">Join Our Team</h2>
        <div className="grid grid-cols-1 gap-6 mt-6">
          {jobs.map((job, index) => (
            <div key={index} className="p-6 bg-gray-900 rounded-lg border border-purple-500">
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-gray-300">{job.department} - {job.location}</p>
              <button className="mt-2 px-4 py-2 bg-purple-500 rounded">Apply</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  