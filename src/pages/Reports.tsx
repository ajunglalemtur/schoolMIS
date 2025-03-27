// Reports Page
import React, { useState } from "react";

interface Report {
  id: number;
  student: string;
  subject: string;
  grade: string;
  date: string;
}

const Reports: React.FC = () => {
  const [search, setSearch] = useState("");
  const [reports] = useState<Report[]>([
    { id: 1, student: "Alice Johnson", subject: "Math", grade: "A", date: "2024-03-15" },
    { id: 2, student: "Michael Smith", subject: "Science", grade: "B", date: "2024-03-10" },
    { id: 3, student: "Sarah Brown", subject: "History", grade: "A", date: "2024-03-08" },
    { id: 4, student: "David Lee", subject: "English", grade: "C", date: "2024-03-12" },
  ]);

  const filteredReports = reports.filter(
    (report) =>
      report.student.toLowerCase().includes(search.toLowerCase()) ||
      report.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Reports</h2>
      <input
        type="text"
        placeholder="Search student or subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Student</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Grade</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report) => (
            <tr key={report.id} className="text-center border">
              <td className="p-2 border">{report.student}</td>
              <td className="p-2 border">{report.subject}</td>
              <td className="p-2 border font-bold text-blue-600">{report.grade}</td>
              <td className="p-2 border">{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;