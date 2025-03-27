// Teachers Page
import React, { useState } from "react";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
}

const Teachers: React.FC = () => {
  const [search, setSearch] = useState("");
  const [teachers] = useState<Teacher[]>([
    { id: 1, name: "Alice Johnson", subject: "Mathematics", email: "alice@example.com" },
    { id: 2, name: "Michael Smith", subject: "Science", email: "michael@example.com" },
    { id: 3, name: "Sarah Brown", subject: "History", email: "sarah@example.com" },
    { id: 4, name: "David Lee", subject: "English", email: "david@example.com" },
  ]);

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Teachers</h2>
      <input
        type="text"
        placeholder="Search teachers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.map((teacher) => (
            <tr key={teacher.id} className="text-center border">
              <td className="p-2 border">{teacher.name}</td>
              <td className="p-2 border">{teacher.subject}</td>
              <td className="p-2 border">{teacher.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
