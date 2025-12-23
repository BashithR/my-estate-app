import { useState } from "react";
import "./HomeSearch.css";
import SearchIcon from "../assets/searchicon.png";

function HomeSearch({ onSearch }) {
  const [type, setType] = useState(""); // House, Flat, Any
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [dateAdded, setDateAdded] = useState(""); // Date after which the property was added
  const [postcode, setPostcode] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      type,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
      dateAdded,
      postcode,
    });
  };

  return (
    <div className="homeSearchContainer">
      <div className="container">
        <div className="innerContainer">
          <p className="innerText">
            <span id="specialText">believe</span> in finding it with
            <br /> Sri Lanka's largest choice of homes
          </p>
          <div className="searchContainer">
            <p id="BuyHeading">Buy</p>
            <hr />
            <p>Search Properties to Buy</p>
            <form id="searchForm" onSubmit={handleSubmit}>
              {/* Property Type Dropdown */}{" "}
              <select onChange={(e) => setType(e.target.value)} value={type}>
                {" "}
                <option value="">Property Type</option>{" "}
                <option value="House">House</option>{" "}
                <option value="Flat">Flat</option>{" "}
                <option value="Any">Any</option>{" "}
              </select>
              {/* Price Range Inputs */}
              <input
                type="number"
                name="minPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price"
              />
              <input
                type="number"
                name="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price"
              />
              {/* Bedrooms Range Inputs */}
              <input
                type="number"
                name="minBedrooms"
                value={minBedrooms}
                onChange={(e) => setMinBedrooms(e.target.value)}
                placeholder="Min Bedrooms"
              />
              <input
                type="number"
                name="maxBedrooms"
                value={maxBedrooms}
                onChange={(e) => setMaxBedrooms(e.target.value)}
                placeholder="Max Bedrooms"
              />
              {/* Date Added */}
              <input
                type="date"
                name="dateAdded"
                value={dateAdded}
                onChange={(e) => setDateAdded(e.target.value)}
              />
              {/* Postcode Input */}
              <input
                type="text"
                name="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Postcode"
              />
              {/* Submit Button */}
              <button className="searchBtn">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
