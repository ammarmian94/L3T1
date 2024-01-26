import React from "react";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import FeaturedProductPage from "./FeaturedProductPage";

const Home = () => {
  return (
    <>
      <Navbar>
      <FeaturedProductPage></FeaturedProductPage>
      </Navbar>
      <Footer></Footer>
    </>
  );
};

export default Home;
