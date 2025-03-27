// Timetable Page
import React, { useState } from "react";

interface TimetableEntry {
  id: number;
  day: string;
  subject: string;
  time: string;
  teacher: string;
}

const Timetable: React.FC = () => {
  const [search, setSearch] = useState("");
  const [timetable] = useState<TimetableEntry[]>([
    { id: 1, day: "Monday", subject: "Mathematics", time: "08:00 - 09:30", teacher: "Mr. Smith" },
    { id: 2, day: "Monday", subject: "Science", time: "09:45 - 11:15", teacher: "Ms. Johnson" },
    { id: 3, day: "Tuesday", subject: "History", time: "10:00 - 11:30", teacher: "Mr. Brown" },
    { id: 4, day: "Wednesday", subject: "English", time: "08:30 - 10:00", teacher: "Mrs. Lee" },
    { id: 5, day: "Thursday", subject: "Physics", time: "09:00 - 10:30", teacher: "Dr. Adams" },
  ]);

  const filteredTimetable = timetable.filter(
    (entry) =>
      entry.subject.toLowerCase().includes(search.toLowerCase()) ||
      entry.teacher.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Timetable</h2>
      <input
        type="text"
        placeholder="Search by subject or teacher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Day</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Teacher</th>
          </tr>
        </thead>
        <tbody>
          {filteredTimetable.map((entry) => (
            <tr key={entry.id} className="text-center border">
              <td className="p-2 border">{entry.day}</td>
              <td className="p-2 border">{entry.subject}</td>
              <td className="p-2 border">{entry.time}</td>
              <td className="p-2 border">{entry.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;