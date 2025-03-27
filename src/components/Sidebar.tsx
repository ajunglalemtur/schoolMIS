import { Link } from "react-router-dom";
import { Home, Book, Users, FileText, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-screen p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">Horizon Academy</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Home size={20} /> Dashboard
        </Link>
        <Link to="/courses" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Book size={20} /> Courses
        </Link>
        <Link to="/students" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Users size={20} /> Students
        </Link>
        <Link to="/assignments" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <FileText size={20} /> Assignments
        </Link>
        <Link to="/settings" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Settings size={20} /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
