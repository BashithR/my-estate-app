import "./HomeSearchContainer.css";
import SearchIcon from "../assets/searchicon.png";

function HomeSearchContainer() {
  return (
    <>
      <div className="homeSearchContainer">
        <div className="container">
          <div className="innerContainer">
            <p className="innerText">
              <span id="specialText">believe</span> in finding it with the{" "}
              <br></br>Sri Lanka's largest choice of homes
            </p>
            {/* Search Bar Stats from Here*/}
            <div className="searchContainer">
              <p id="BuyHeading">Buy</p>
              <hr></hr>
              <p>Search Properties to Buy</p>
              <form id="searchForm">
                <div id="searchBar">
                  <img src={SearchIcon} alt="Search Icon"></img>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Flat, 3 bedrooms, BR6"
                  ></input>
                </div>
                <button className="searchBtn">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSearchContainer;
