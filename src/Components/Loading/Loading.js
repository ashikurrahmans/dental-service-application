import React from "react";

const Loading = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
