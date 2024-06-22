import { useState } from "react";
import styles from "./Form.module.css";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Link,
} from "react-router-dom";
function Form() {
    let [products, setProduct] = useState({});
    let navigate = useNavigate();
    function handleInput() {
        // let copyProduct = { ...products,[event.target.name] : event.target.value };
        // setProduct(copyProduct);
        //shorthand
        setProduct({ ...products, [event.target.name]: event.target.value });
        // console.log(product);
    }

    function handleSubmit() {
        event.preventDefault();
        console.log(products);

        fetch("http://localhost:3000/products/", {
            method: "POST",
            body: JSON.stringify(products),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                navigate("/products");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <section className={styles.form_parent}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Add Products</h1>
                    {name}
                    <input
                        type="text"
                        placeholder="Enter name"
                        onChange={handleInput}
                        name="name"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Enter Price"
                        name="price"
                        onChange={handleInput}
                    />
                    <input
                        type="number"
                        placeholder="Enter Quantity"
                        name="quantity"
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        placeholder="Enter Category"
                        name="category"
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        placeholder="Enter description"
                        name="description"
                        onChange={handleInput}
                    />
                    <button className={styles.btn}>Submit</button>
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
            {/* <div className={styles.Back}>
            </div> */}
        </>
    );
}

export default Form;
