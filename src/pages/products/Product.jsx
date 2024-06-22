import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

function Product() {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/products", { method: "GET" })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    function deleteProduct(id) {
        console.log(id);
        fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                let copyproducts = [...products];

                let index = copyproducts.findIndex((product) => {
                    return product._id === id;
                });
                copyproducts.splice(index, 1);
                setProducts(copyproducts);
            })
            .catch((err) => {
                console.log(err);
            });
        function Logo(category) {
            if (category == Electronics) {
            }
        }
    }
    return (
        <>
            <section className={styles.container}>
                <table>
                    <tr>
                        {/* <th>&nbsp;</th> */}
                        <th>Sr no</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>

                    {products.map((product, index) => {
                        return (
                            <tr>
                                {/* <td>{<h1>zsxdcfvbn</h1>}</td> */}
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <img
                                        className={styles.image}
                                        src={product.imageURL}
                                    />
                                </td>
                                <td>
                                    <div className={styles.icons}>
                                        <i class="fa-solid fa-eye"></i>
                                        <Link to={`/update/${product._id}`}>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                        <i
                                            class="fa-solid fa-trash"
                                            onClick={() => {
                                                deleteProduct(product._id);
                                            }}
                                        ></i>
                                    </div>{" "}
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </section>
            <div className={styles.create}>
                <Link to="/form">
                    <button className="button">Create Product</button>
                </Link>
                <Link to="/update/:id">
                    <button className="button">Update Product</button>
                </Link>
            </div>
        </>
    );
}

export default Product;
