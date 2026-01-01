import { useState } from "react";
import NavBar from "./components/NavBar";
import HomeSearch from "./components/HomeSearch";
import Property from "./components/Property";
import PropertyData from "./data/properties.json";
import FavouritesSidebar from "./components/FavouritesSidebar";

import "./App.css";
import PropertyGallery from "./components/PropertyGallery";
import Footer from "./components/Footer";

function App() {
  const [currentView, setCurrentView] = useState("Home");

  const [propOption, setPropOption] = useState([]);
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

  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (property) => {
    setFavourites((proplist) => {
      if (proplist.some((prop) => prop.id === property.id)) return proplist;
      // otherwise return this with new property
      return [...proplist, property];
    });
  };

  const removeFromFavourites = (property) => {
    setFavourites(
      favourites.filter((favourite) => property.id !== favourite.id)
    );
  };
  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <>
      <NavBar />
      {currentView === "Home" ? (
        <>
          <HomeSearch onSearch={handleSearch} />
          <Property
            properties={filteredProperties}
            currentView={currentView}
            setCurrentView={setCurrentView}
            propOption={propOption}
            setPropOption={setPropOption}
            addToFavourites={addToFavourites}
          />
        </>
      ) : (
        <>
          <PropertyGallery
            property={propOption}
            setCurrentView={setCurrentView}
          />
        </>
      )}
      <FavouritesSidebar
        favourites={favourites}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
        clearFavourites={clearFavourites}
      />
      <Footer />
    </>
  );
}

export default App;
