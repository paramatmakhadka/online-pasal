import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/frontend/Home";
import About from "./Pages/frontend/About";
import Login from "./Pages/admin/Login";
import Dashboard from "./Pages/admin/Dashboard";
import AddCategory from "./Pages/admin/AddCategory"
import AddProduct from "./Pages/admin/AddProduct";
import Orders from "./Pages/admin/Orders";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/*  frontend */}
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />

					{/* backend */}
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/addcategory" element={<AddCategory />} />
					<Route path="/addproduct" element={<AddProduct />} />
					<Route path="/orders" element={<Orders />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
