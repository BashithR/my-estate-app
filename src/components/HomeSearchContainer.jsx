import "./HomeSearchContainer.css";

import HomePNG from "../assets/Home.png";

function HomeSearchContainer() {
  return (
    <>
      <div className="homeSearchContainer">
        <div className="container">
          <img src={HomePNG} alt="Home Image" className="homeImage" />
        </div>
      </div>
    </>
  );
}

export default HomeSearchContainer;
