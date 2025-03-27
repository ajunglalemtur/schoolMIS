// Dashboard Page
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Horizon Academy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-2xl font-bold text-blue-600">1,250</p>
        </div>
        <div className="bg-white p-5 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Total Courses</h3>
          <p className="text-2xl font-bold text-green-600">45</p>
        </div>
        <div className="bg-white p-5 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Assignments Pending</h3>
          <p className="text-2xl font-bold text-red-600">32</p>
        </div>
        <div className="bg-white p-5 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Upcoming Events</h3>
          <p className="text-2xl font-bold text-yellow-600">5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
