// Users Management Page with Add & Delete Functionality
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  role: "Admin" | "Teacher" | "Student";
  email: string;
}

const Users: React.FC = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice Johnson", role: "Admin", email: "alice@example.com" },
    { id: 2, name: "Michael Smith", role: "Teacher", email: "michael@example.com" },
    { id: 3, name: "Sarah Brown", role: "Student", email: "sarah@example.com" },
    { id: 4, name: "David Lee", role: "Student", email: "david@example.com" },
  ]);

  const [newUser, setNewUser] = useState<User>({ id: 0, name: "", role: "Student", email: "" });

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ id: 0, name: "", role: "Student", email: "" });
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Management</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          className="p-2 border rounded"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value as User["role"] })}
          className="p-2 border rounded"
        >
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
        </select>
        <button onClick={addUser} className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
      </div>
      
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="text-center border">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border font-bold text-blue-600">{user.role}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;