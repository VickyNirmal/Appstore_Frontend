import Header from "./Components/Header";
import "./Components/AppStore.css"; 
import AppList from "./Components/AppList";
import { SearchContext } from "./Components/Contexts/SearchContext";
import { useState } from "react";

function App() {
  const [searchData,setSearchData] = useState('');
  const [category,setCategory] = useState("All");

  const handleCategory = (categoryData) => {
    setCategory(categoryData);
  };
  
  return (
    <div className="App">
      <SearchContext.Provider value={{searchData,setSearchData,category,setCategory,handleCategory}}>
      <Header></Header>
      <AppList></AppList>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
