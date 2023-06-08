import React from "react";

const Info = ({ name, id, Wing, VehicleNo }) => {
  return (
    <div>
      <div class="bg-white shadow-md rounded-lg p-4">
        <div>
          <label for="id" class="text-gray-700 font-semibold">
            ID:
          </label>
          <p id="id" class="border border-gray-300 rounded-md p-2">
            {id}
          </p>
        </div>
        <div class="mb-4">
          <label for="name" class="text-gray-700 font-semibold">
            Name:
          </label>
          <p id="name" class="border border-gray-300 rounded-md p-2">
            {name}
          </p>
        </div>
        <div class="mb-4">
          <label for="name" class="text-gray-700 font-semibold">
            Wing:
          </label>
          <p id="name" class="border border-gray-300 rounded-md p-2">
            {Wing}
          </p>
        </div>
        <div class="mb-4">
          <label for="name" class="text-gray-700 font-semibold">
            VehicleNo :
          </label>
          <p id="name" class="border border-gray-300 rounded-md p-2">
            {name && VehicleNo[""]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
