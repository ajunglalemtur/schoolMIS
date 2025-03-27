// Finance Page
import React, { useState } from "react";

interface FinanceRecord {
  id: number;
  student: string;
  amount: number;
  status: "Paid" | "Pending";
}

const Finance: React.FC = () => {
  const [search, setSearch] = useState("");
  const [records] = useState<FinanceRecord[]>([
    { id: 1, student: "Alice Johnson", amount: 500, status: "Paid" },
    { id: 2, student: "Michael Smith", amount: 700, status: "Pending" },
    { id: 3, student: "Sarah Brown", amount: 600, status: "Paid" },
    { id: 4, student: "David Lee", amount: 800, status: "Pending" },
  ]);

  const filteredRecords = records.filter(
    (record) => record.student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Finance</h2>
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
            <th className="p-2 border">Amount ($)</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record) => (
            <tr key={record.id} className={`text-center border ${record.status === "Paid" ? "text-green-600" : "text-red-600"}`}>

              <td className="p-2 border">{record.student}</td>
              <td className="p-2 border">${record.amount}</td>
              <td className={`p-2 border ${record.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Finance;
