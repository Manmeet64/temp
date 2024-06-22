import { useState } from "react";
import "./App.css";
import Product from "./pages/products/Product.jsx";
import Form from "./pages/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import NotFound from "./pages/notfound/NotFound";

function App() {
    3;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="form" element={<Form />}></Route>
                    <Route path="/" element={<Product />} />
                    <Route path="/products" element={<Product />} />{" "}
                    <Route path="/update/:id" element={<UpdateProduct />} />
                    <Route path="*" element={<NotFound />} />
                    {/* <Route path="" */}
                </Routes>
            </BrowserRouter>
            {/* <Product /> */}
            {/* <Form /> */}
        </>
    );
}

export default App;
