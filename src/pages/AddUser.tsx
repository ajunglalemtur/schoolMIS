import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const AddUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError("All fields are required.");
      return;
    }

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      role,
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setRole("Student");
    setError("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register New User</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add User
        </button>
      </form>

      {/* User List */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">User List</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="p-2 border rounded mb-2">
              <strong>{user.name}</strong> - {user.email} ({user.role})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddUser;
