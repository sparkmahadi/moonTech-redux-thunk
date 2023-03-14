import { loadProduct } from "../../actions/productAction";

const loadProductData = () => {
  return async (dispatch, getState) => {
    // const res = await fetch("http://localhost:5000/products");
    const res = await fetch("products.json")
    const data = await res.json();

    console.log(data);

    if (data.length) {
      dispatch(loadProduct(data));
    }
  };
};

export default loadProductData;
