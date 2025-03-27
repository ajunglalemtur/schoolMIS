// Exams Page
import React, { useState } from "react";

interface Exam {
  id: number;
  subject: string;
  date: string;
  duration: string;
}

const Exams: React.FC = () => {
  const [search, setSearch] = useState("");
  const [exams] = useState<Exam[]>([
    { id: 1, subject: "Mathematics", date: "2024-05-10", duration: "2 hours" },
    { id: 2, subject: "Science", date: "2024-05-12", duration: "1.5 hours" },
    { id: 3, subject: "History", date: "2024-05-15", duration: "2 hours" },
    { id: 4, subject: "English", date: "2024-05-18", duration: "1.5 hours" },
  ]);

  const filteredExams = exams.filter((exam) =>
    exam.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Exams</h2>
      <input
        type="text"
        placeholder="Search exams..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Duration</th>
          </tr>
        </thead>
        <tbody>
          {filteredExams.map((exam) => (
            <tr key={exam.id} className="text-center border">
              <td className="p-2 border">{exam.subject}</td>
              <td className="p-2 border">{exam.date}</td>
              <td className="p-2 border">{exam.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exams;