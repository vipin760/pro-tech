import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center min-h-screen w-full top-0 left-0 bottom-0">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-7xl font-extrabold">404</h1>
            <h2 className="text-3xl font-extrabold">NOT FOUND</h2>
          <a className="border-2 p-3 rounded-lg hover:bg-gray-400 hover:text-black" href="/">Back to Home</a>
        </div>{" "}
      </div>
    </div>
  );
};

export default NotFound;
