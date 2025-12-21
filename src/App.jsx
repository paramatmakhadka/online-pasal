import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/frontend/Home";
import About from "./Pages/frontend/About";
import Product from "./Pages/frontend/Product";
import Category from "./Pages/frontend/Category";
import Login from "./Pages/admin/Login";
import Dashboard from "./Pages/admin/Dashboard";
import AddCategory from "./Pages/admin/AddCategory";
import AddProduct from "./Pages/admin/AddProduct";
import Orders from "./Pages/admin/Orders";
import Cart from "./Pages/frontend/Cart";

function App() {
	return (
		<HashRouter>
			<Routes>
				{/* Frontend */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/category/:cid" element={<Category />} />
				<Route path="/product/:pid" element={<Product />} />
				<Route path="/cart" element={<Cart />} />

				{/* Backend */}
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/addcategory" element={<AddCategory />} />
				<Route path="/addproduct" element={<AddProduct />} />
				<Route path="/orders" element={<Orders />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
