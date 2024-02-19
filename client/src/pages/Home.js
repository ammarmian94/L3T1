import React, { useEffect } from "react";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import FeaturedProductPage from "./FeaturedProductPage";
import { fetchFeaturedProductsAsync } from "../features/products-list/productSlice";

const Home = () => {
  return (
    <>
      <Navbar>
        {/* <FeaturedProductPage></FeaturedProductPage> */}
      </Navbar>
      <Footer></Footer>
    </>
  );
};

export default Home;
