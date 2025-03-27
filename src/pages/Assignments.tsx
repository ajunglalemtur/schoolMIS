// Assignments Page
import React from "react";

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string;
}

const assignments: Assignment[] = [
  { id: 1, title: "Algebra Homework", course: "Mathematics", dueDate: "2024-04-10" },
  { id: 2, title: "Physics Lab Report", course: "Physics", dueDate: "2024-04-12" },
  { id: 3, title: "Organic Chemistry Quiz", course: "Chemistry", dueDate: "2024-04-15" },
  { id: 4, title: "Biology Research Paper", course: "Biology", dueDate: "2024-04-18" },
];

const Assignments: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Assignments</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Course</th>
            <th className="p-3 text-left">Due Date</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id} className="border-b">
              <td className="p-3">{assignment.title}</td>
              <td className="p-3">{assignment.course}</td>
              <td className="p-3">{assignment.dueDate}</td>
              <td className="p-3">
                <button className="text-blue-600 hover:underline mr-2">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;
