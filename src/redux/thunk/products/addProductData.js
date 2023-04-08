import { addProduct } from "../../actions/productAction";

const addProductData = (product) =>{
    return async(dispatch, getState) => {
        const res = await fetch("https://moon-tech-server-wheat.vercel.app/product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "content-type" : "application/json"
            }
        });
        const data = await res.json();

        if(data.acknowledged){
            dispatch(addProduct({...product, _id: data.insertedId}))
        }
    }
}

export default addProductData;