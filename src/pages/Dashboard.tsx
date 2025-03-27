import { LayoutDashboard, BookOpen, Users, Settings, Plus, Bell } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-gray-900">Horizon Academy</h2>
        <nav className="mt-6 space-y-4">
          <a href="#" className="flex items-center gap-2 text-blue-600 font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <BookOpen size={20} /> Courses
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Users size={20} /> Students
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Settings size={20} /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Header Navigation */}
        <div className="flex justify-between items-center mb-6 bg-white shadow-md p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Bell size={24} className="text-gray-700 cursor-pointer" />
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Plus size={18} /> Add User
            </button>
          </div>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg flex items-center gap-4 hover:shadow-xl transition">
            <Users size={36} className="text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Total Students</h3>
              <p className="text-2xl font-bold text-gray-900">2,245</p>
            </div>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg flex items-center gap-4 hover:shadow-xl transition">
            <BookOpen size={36} className="text-green-600" />
            <div>
              <h3 className="text-lg font-semibold">Courses</h3>
              <p className="text-2xl font-bold text-gray-900">68</p>
            </div>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg flex items-center gap-4 hover:shadow-xl transition">
            <Settings size={36} className="text-red-600" />
            <div>
              <h3 className="text-lg font-semibold">Settings</h3>
              <p className="text-2xl font-bold text-gray-900">Manage</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
