import axios from "axios";
import React, { useEffect, useState } from "react";
import OneEvent from "./OneEvent"; // Assuming OneEvent component is imported

const Allevents = () => {
  const [filter, setFilter] = useState("");
  const [events, setEvents] = useState([]);

  console.log("In Allevents");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/v1/user/", {
          params: {
            filter: filter,
          },
        });
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    fetchData();
  }, [filter]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          className="border w-full mt-10 px-5 py-2"
          placeholder="Enter Filter"
        />
      </div>
      <div className="flex">
        {events.map((obj, index) => (
          <OneEvent key={index} obj={obj} />
        ))}
      </div>
    </div>
  );
};

export default Allevents;
