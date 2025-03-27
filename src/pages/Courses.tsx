// Courses Page
import React from "react";

interface Course {
  id: number;
  name: string;
  instructor: string;
  students: number;
}

const courses: Course[] = [
  { id: 1, name: "Mathematics", instructor: "Dr. Smith", students: 30 },
  { id: 2, name: "Physics", instructor: "Prof. Johnson", students: 25 },
  { id: 3, name: "Chemistry", instructor: "Dr. Brown", students: 28 },
  { id: 4, name: "Biology", instructor: "Prof. Davis", students: 22 },
];

const Courses: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Courses</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Course Name</th>
            <th className="p-3 text-left">Instructor</th>
            <th className="p-3 text-left">Students</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b">
              <td className="p-3">{course.name}</td>
              <td className="p-3">{course.instructor}</td>
              <td className="p-3">{course.students}</td>
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

export default Courses;
