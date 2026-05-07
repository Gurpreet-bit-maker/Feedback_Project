import React from "react";

function CreatedAt({ createdData }) {
  return (
    <div>
      <p className="text-xs text-gray-500">
        {new Date(createdData.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}

export default CreatedAt;
