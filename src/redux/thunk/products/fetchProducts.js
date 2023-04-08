import { loadProduct } from "../../actions/productAction";

const loadProductData = () => {
  return async (dispatch, getState) => {
    // const res = await fetch("products.json")
    const res = await fetch("https://moon-tech-server-wheat.vercel.app/products");
    const data = await res.json();

    console.log(data);

    if (data.data.length) {
      dispatch(loadProduct(data.data));
    }
  };
};

export default loadProductData;
