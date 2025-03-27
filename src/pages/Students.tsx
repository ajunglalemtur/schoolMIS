// Students Page
import React from "react";

interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
}

const students: Student[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Mathematics" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Physics" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", course: "Chemistry" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", course: "Biology" },
];

const Students: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Students</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Course Enrolled</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b">
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">{student.course}</td>
              <td className="p-3">
                <button className="text-blue-600 hover:underline mr-2">Edit</button>
                <button className="text-red-600 hover:underline">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;