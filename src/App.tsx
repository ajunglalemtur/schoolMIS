import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";  // ✅ Ensure this import exists
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Assignments from "./pages/Assignments";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Users  from "./pages/Users";
import AddUser from "./pages/AddUser";  // ✅ Ensure this import exists


const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/students" element={<Students />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-user" element={<AddUser />} /> {/* New Route */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
