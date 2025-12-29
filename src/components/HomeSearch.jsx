import { useState } from "react";
import "./HomeSearch.css";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";

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
              <FormControl>
                <FormLabel color="white">Property Type</FormLabel>
                <Select
                  placeholder="Select Property Type"
                  bg="white"
                  color="black"
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option value="House">House</option>
                  <option value="Flat">Flat</option>
                </Select>
              </FormControl>
              {/* Price Range Inputs */}
              <FormControl mt={{ base: 4, md: 0 }}>
                <FormLabel color="white">Min Price</FormLabel>
                <Input
                  type="number"
                  bg="white"
                  color="black"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Min Price"
                />
              </FormControl>
              <FormControl mt={{ base: 4, md: 0 }}>
                <FormLabel color="white">Max Price</FormLabel>
                <Input
                  type="number"
                  bg="white"
                  color="black"
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Max Price"
                />
              </FormControl>
              {/* Bedrooms Range Inputs */}
              <FormControl>
                <FormLabel color="white">Min Bedrooms</FormLabel>
                <Input
                  type="number"
                  bg="white"
                  color="black"
                  value={minBedrooms}
                  onChange={(e) => setMinBedrooms(e.target.value)}
                  placeholder="Min Bedrooms"
                />
              </FormControl>
              <FormControl mt={{ base: 4, md: 0 }}>
                <FormLabel color="white">Max Bedrooms</FormLabel>
                <Input
                  type="number"
                  bg="white"
                  color="black"
                  value={maxBedrooms}
                  onChange={(e) => setMaxBedrooms(e.target.value)}
                  placeholder="Max Bedrooms"
                />
              </FormControl>
              {/* Date Added */}
              <FormControl>
                <FormLabel color="white">Min Date Added</FormLabel>
                <Input
                  type="date"
                  bg="white"
                  color="black"
                  value={dateAdded}
                  onChange={(e) => setDateAdded(e.target.value)}
                  // Ensure the user cannot pick a future date
                />
              </FormControl>
              {/* Postcode Input */}
              <FormControl mt={{ base: 4, md: 0 }}>
                <FormLabel color="white">Postcode</FormLabel>
                <Input
                  bg="white"
                  color="black"
                  name="postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="Postcode"
                />
              </FormControl>
              {/* Submit Button */}
              <Button
                colorScheme="teal"
                width="100%"
                mt={{ base: 4, md: 0, lg: 8 }}
                type="submit"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
