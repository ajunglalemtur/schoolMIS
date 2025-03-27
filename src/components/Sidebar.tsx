import { useState } from "react";
import { LayoutDashboard, BookOpen, Users, Settings, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen ${isOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
      {/* Toggle Button */}
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className={`text-xl font-bold text-gray-900 ${!isOpen && 'hidden'}`}>Horizon Academy</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-gray-200">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6 space-y-4 px-4">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-100 rounded-lg transition-all"
          >
            <item.icon size={22} className="text-blue-600" />
            <span className={`${!isOpen && 'hidden'}`}>{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Courses", icon: BookOpen },
  { name: "Students", icon: Users },
  { name: "Settings", icon: Settings },
];

export default Sidebar;
