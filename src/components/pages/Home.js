import React from "react";
import Logo from "./shopping.svg";

const Home = () => {
  return (
    <>
      <div className="box">
        <div class="px-4 py-5 text-center home">
          <img
            src={Logo}
            className="img-fluid shadow-4"
            alt="home-logo"
            style={{ height: "40vh", marginBottom: "4vh" }}
          />
          <h1 class="display-5 fw-bold">Hello People</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              Welcome to BrandWear, where style meets substance. Explore our
              meticulously curated collection of fashion-forward clothing,
              designed to elevate your wardrobe and reflect your unique
              personality. Discover your perfect look today!
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Buy Now
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Have a query?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
