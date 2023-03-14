import { updateProduct } from "../../actions/productAction";

const updateProductData = (product) => {
    return async(dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${product._id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify(product)
        });
        const data = await res.json();

        console.log(data);

        if(data.acknowledged){
            dispatch(updateProduct(product))
        }
    }
}

export default updateProductData;