import React from "react";
import Info from "./Info.jsx";
import Suggestion from "./Suggestion.jsx";

const Search_body = ({
  suggestions,
  handleInputChange,
  searchTerm,
  add_data,
  data,
}) => {
  return (
    <div className="">
      <div className="">
        <div className="container mx-auto p-4 ">
          <div className="flex flex-col mb-10  ">
            <div className="flex w-full ">
              <input
                type="text"
                class="border border-gray-300 bg-gray-50 rounded-md p-4 w-full"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
              />
            </div>
            {searchTerm && (
              <div className="">
                <Suggestion suggestions={suggestions} add_data={add_data} />
              </div>
            )}
          </div>
          <div>
            <Info
              name={data["Name"]}
              id={data["Sticker No"]}
              VehicleNo={data["Vehicle No"]}
              Wing={data["Wing"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search_body;
