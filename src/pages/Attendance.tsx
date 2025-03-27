// Attendance Management Page with Edit & Delete Functionality
import React, { useState } from "react";

interface AttendanceRecord {
  id: number;
  student: string;
  status: "Present" | "Absent";
  date: string;
}

const Attendance: React.FC = () => {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([
    { id: 1, student: "Alice Johnson", status: "Present", date: "2024-03-27" },
    { id: 2, student: "Michael Smith", status: "Absent", date: "2024-03-27" },
    { id: 3, student: "Sarah Brown", status: "Present", date: "2024-03-27" },
  ]);

  const updateStatus = (id: number, status: "Present" | "Absent") => {
    setAttendance((prev) =>
      prev.map((record) =>
        record.id === id ? { ...record, status } : record
      )
    );
  };

  const deleteRecord = (id: number) => {
    setAttendance(attendance.filter((record) => record.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Attendance Management</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Student</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record.id} className="text-center border">
              <td className="p-2 border">{record.student}</td>
              <td className="p-2 border">
                <select
                  value={record.status}
                  onChange={(e) => updateStatus(record.id, e.target.value as "Present" | "Absent")}
                  className="p-1 border rounded"
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
              <td className="p-2 border">{record.date}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteRecord(record.id)}
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

export default Attendance;
