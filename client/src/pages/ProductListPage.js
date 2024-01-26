import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/products-list/components/ProductList";
import Footer from "../features/common/Footer";

function ProductListPage() {
  return (
    <>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      <Footer></Footer>
    </>
  );
}

export default ProductListPage;
