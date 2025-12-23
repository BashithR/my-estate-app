import { useState } from "react";
import NavBar from "./components/NavBar";
import HomeSearch from "./components/HomeSearch";
import Property from "./components/Property";

import "./App.css";

function App() {
  const [search, setSearch] = useState({});

  // assigns the data to the variabe as a data dictionary
  const setSearchData = (searchData) => {
    setSearch(searchData);
  };

  return (
    <>
      <NavBar />
      <HomeSearch onSearch={setSearchData} />
      <h2>{search.type}</h2>
      <Property props={search} />
    </>
  );
}

export default App;
