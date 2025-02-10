export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} NexusSoft. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="mailto:info@nexussoft.com" className="text-purple-400 hover:underline">📧 info@nexussoft.com</a>
          <a href="https://www.linkedin.com/company/nexussoft" className="text-purple-400 hover:underline">💼 LinkedIn</a>
        </div>
      </footer>
    );
  }
  