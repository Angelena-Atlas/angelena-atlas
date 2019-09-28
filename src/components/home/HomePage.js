import React from "react";
// import { Link } from "react-router-dom";
// import Listings from "../../components/listings/Listings";

const HomePage = () => (
  <div className="HomeContentWrapper">
    <h1 className="HomeHeader">Welcome to the Angelena Atlas</h1>

    <div>placeholder for search bar</div>
    <div className="HomeContent">
      <p>
        Your crowdsourced city guide to LA County’s intersectional feminist
        resources. We share information and events ranging from reproductive
        justice to anti-racism advocacy groups, immigrant rights, and more!
      </p>
    </div>
    <div>placeholder category tags for filters</div>
    {/* <Listings /> */}
    {/* <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link> */}
    <div className="Footer">Connect with us </div>
  </div>
);

export default HomePage;
