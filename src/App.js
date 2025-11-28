import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useState } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong while fetching courses");
      }  
    }
    fetchData();
  },[]);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
};

export default App;
