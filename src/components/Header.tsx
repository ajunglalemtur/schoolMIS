// Header Component
import { Bell, UserCircle } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Bell size={24} className="text-gray-600 cursor-pointer hover:text-blue-600" />
        <UserCircle size={30} className="text-gray-600 cursor-pointer hover:text-blue-600" />
      </div>
    </header>
  );
};

export default Header;