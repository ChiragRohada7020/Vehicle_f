import React from "react";

const Suggestion = ({ suggestions, add_data }) => {
  return (
    <div className="bg-gray-100">
      <div>
        {suggestions.length > 0 && (
          <ul className="w-full">
            {suggestions.map((suggestion, index) => (
              <li
                onClick={() => add_data(index)}
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {suggestion["Sticker No"]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
