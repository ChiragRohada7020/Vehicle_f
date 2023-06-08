import React, { useState } from "react";
import "../dist/output.css";
import Search_body from "./Search_body";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setdata] = useState([]);
  const [suggestions, setSuggestions] = useState({});

  const add_data = (index) => {
    setdata(suggestions[index]);
    setSearchTerm(suggestions[index]["Sticker No"]);
    setSuggestions({});
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Perform logic to fetch suggestions based on the input value
    // For example, you can make an API call here to retrieve suggestions

    if (value == "") {
      setSuggestions([{}]);
    } else {
      fetchSuggestions(value);
    }
  };

  const fetchSuggestions = (value) => {
    // Simulating API call to fetch suggestions
    // Replace this with your actual API call
    const API_URL = `https://vehicle-b.onrender.com/search/${value}`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setSuggestions(data);
      })
      .catch((error) => {
        console.error("Error fetching suggestions:", error);
      });
  };

  return (
    <div className="font-mono">
      <Search_body
        suggestions={suggestions}
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        add_data={add_data}
        data={data}
      />
    </div>
  );
};

export default SearchComponent;
