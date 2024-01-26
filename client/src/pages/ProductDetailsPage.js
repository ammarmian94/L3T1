import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/products-list/components/ProductDetails";

function ProductDetailsPage() {
  return (
    <>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
      <Footer></Footer>
    </>
  );
}

export default ProductDetailsPage;
