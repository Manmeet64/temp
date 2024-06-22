import { Link, useParams } from "react-router-dom";
import styles from "./UpdateProduct.module.css";
import { useEffect, useState } from "react";
function UpdateProduct() {
    let params = useParams();
    let [product, setProduct] = useState({});
    console.log(params);
    useEffect(() => {
        fetch("http://localhost:3000/products/" + params.id, {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    function handleInput() {
        // let copyProduct = { ...products,[event.target.name] : event.target.value };
        // setProduct(copyProduct);
        //shorthand
        setProduct({ ...product, [event.target.name]: event.target.value });
        // console.log(product);
    }

    function handleSubmit() {
        event.preventDefault();
        fetch("http://localhost:3000/products/" + params.id, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <section className={styles.form_parent}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Update Product</h1>
                    {name}
                    <input
                        type="text"
                        placeholder="Enter name"
                        onChange={handleInput}
                        name="name"
                        value={product.name}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Enter Price"
                        name="price"
                        value={product.price}
                        onChange={handleInput}
                    />
                    <input
                        type="number"
                        placeholder="Enter Quantity"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        placeholder="Enter Category"
                        name="category"
                        value={product.category}
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        placeholder="Enter ImageUrl"
                        name="imageURL"
                        value={product.imageURL}
                        onChange={handleInput}
                    />
                    <button className={styles.btn}>Update</button>
                </form>
                {/* <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}></Route>
                    </Routes>
                </BrowserRouter> */}
                <Link to="/">
                    <button className={styles.btn}>Back</button>
                </Link>
            </section>
        </>
    );
}

export default UpdateProduct;
