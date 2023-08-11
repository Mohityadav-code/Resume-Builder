import React from "react";

import { Link } from "react-router-dom";

const ZeroPage = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center ">
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold">WORK IN PROGRESS</h1>
      <p className="mb-8 text-lg text-gray-600">
        This page is currently under development.
      </p>
      <Link
        to="/admin/dashboard"
        className="px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Go to Home
      </Link>
    </div>
  </div>
  );
};

export default ZeroPage;
