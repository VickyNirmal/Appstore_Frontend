import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from "./Contexts/SearchContext";

const AppList = () => {
  const [appData, setAppData] = useState([]);
  const { searchData,category } = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://appstore-backend-kr6h.vercel.app/appDetails";
        if(category && category !== "All")
        {
          url +=`?category=${category}`;
        }
        const response = await axios.get(url);
        setAppData(response.data);
        // console.log(appData);-
      } catch (err) {
        console.log("Some Error Found in Fetching :", err);
      }
    };
  
    fetchData();
  },[category]);

  const filteredData = appData
    .filter((app) => 
      app.name.toLowerCase().includes(searchData.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div id="appContainer">
        {filteredData.map((item, index) => (
          <div className="appBox" key={index}>
            <img className="appImg" alt={item.name} src={item.url} />
            <p className="appName">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppList;
