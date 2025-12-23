import { useState } from "react";
import NavBar from "./components/NavBar";
import HomeSearch from "./components/HomeSearch";
import Property from "./components/Property";
import PropertyData from "./data/properties.json";

import "./App.css";

function App() {
  const [filteredProperties, setFilteredProperties] = useState(
    PropertyData.properties
  );

  const handleSearch = ({
    type,
    minPrice,
    maxPrice,
    minBedrooms,
    maxBedrooms,
    dateAdded,
    postcode,
  }) => {
    const results = PropertyData.properties.filter((property) => {
      const minimumPrice = minPrice ? parseInt(minPrice) : null;
      const maximumPrice = maxPrice ? parseInt(maxPrice) : null;
      const minimumBedrooms = minBedrooms ? parseInt(minBedrooms) : null;
      const maximumBedrooms = maxBedrooms ? parseInt(maxBedrooms) : null;

      const propertyDateAdded = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );
      const dateToSearch = dateAdded ? new Date(dateAdded) : null;

      return (
        (!type || type === property.type) &&
        (!minimumPrice || property.price >= minimumPrice) &&
        (!maximumPrice || property.price <= maximumPrice) &&
        (!minimumBedrooms || property.bedrooms >= minimumBedrooms) &&
        (!maximumBedrooms || property.bedrooms <= maximumBedrooms) &&
        (!postcode || property.location.includes(postcode)) &&
        (!dateToSearch || propertyDateAdded >= dateToSearch)
      );
    });

    setFilteredProperties(results);
  };

  return (
    <>
      <NavBar />
      <HomeSearch onSearch={handleSearch} />
      <Property properties={filteredProperties} />
    </>
  );
}

export default App;
