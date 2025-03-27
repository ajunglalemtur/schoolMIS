// Grades Page
import React, { useState } from "react";

interface Grade {
  id: number;
  student: string;
  subject: string;
  score: number;
}

const Grades: React.FC = () => {
  const [search, setSearch] = useState("");
  const [grades] = useState<Grade[]>([
    { id: 1, student: "Alice Johnson", subject: "Mathematics", score: 85 },
    { id: 2, student: "Michael Smith", subject: "Science", score: 78 },
    { id: 3, student: "Sarah Brown", subject: "History", score: 92 },
    { id: 4, student: "David Lee", subject: "English", score: 88 },
  ]);

  const filteredGrades = grades.filter((grade) =>
    grade.student.toLowerCase().includes(search.toLowerCase()) ||
    grade.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Grades</h2>
      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Student</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade) => (
            <tr key={grade.id} className="text-center border">
              <td className="p-2 border">{grade.student}</td>
              <td className="p-2 border">{grade.subject}</td>
              <td className="p-2 border">{grade.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;