import { useDispatch, useSelector } from "react-redux";
import Product from "../features/products-list/components/Product";
import { fetchFeaturedProductsAsync, selectFeaturedProducts } from "../features/products-list/productSlice";
import { useEffect } from "react";

function FeaturedProductPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectFeaturedProducts);
  useEffect(() => {
    dispatch(fetchFeaturedProductsAsync());
  }, [dispatch]);

  return <Product product={products}></Product>;
}

export default FeaturedProductPage;
