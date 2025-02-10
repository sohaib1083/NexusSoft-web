const values = [
    { title: "Innovation & Growth", description: "Push boundaries and grow with cutting-edge technology." },
    { title: "Code-First Culture", description: "Your projects speak louder than credentials." },
    { title: "Global Collaboration", description: "Work with talented teams across Boston & Karachi." },
    { title: "Equity & Ownership", description: "Be a shareholder in our success story." }
  ];
  
  export default function CompanyValues() {
    return (
      <div className="p-10">
        <h2 className="text-center text-4xl font-bold text-purple-400">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-gray-900 rounded-lg border border-purple-500">
              <h3 className="text-lg font-bold">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  