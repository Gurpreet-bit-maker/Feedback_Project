import React, { useState } from "react";

function FilterComponent({ apiData }) {
  const [search, setSearch] = useState("");
  console.log(apiData);

  const data = [{ name: "Gurpreet" }, { name: "Rahul" }, { name: "Aman" }];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded-md mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-2">
        {filteredData.map((item, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-md">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterComponent;
