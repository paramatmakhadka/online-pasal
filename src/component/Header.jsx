import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Pages/frontend/CartContext";
import Logo from "../assets/Logo.png"

function Header() {
	let { state, dispatch } = useContext(CartContext)
	let [data, setData] = useState([])
	useEffect(() => {
		async function cData() {
			const catData = await fetch('https://dummyjson.com/products/categories')
			const categoryData = await catData.json()
			setData(categoryData)
		}
		cData()
	}, [])
	return (
		<>
			<header className="py-3">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3 col-6">
							<Link to="/">
								<img
									src={Logo}
									alt="logo"
									className="w-50"
								/>
							</Link>
						</div>
						<div className="col-lg-5 offset-sm-2 col-6">
							<form class="d-flex" role="search">
								<input
									class="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button class="btn btn-outline-dark" type="submit">
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</header>

			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About Us
								</Link>
							</li>
							{data.slice(0, 7).map((a) => (
								<li key={a.slug} className="nav-item">
									<Link className="nav-link" to={`/category/${a.slug}`}>
										{a.name}
									</Link>
								</li>
							))}
						</ul>
						<Link className="btn btn-danger me-3" type="submit" to="/login">
							Login
						</Link>
						<Link type="button" className="btn btn-primary position-relative ms-2 me-3" to="/cart" >
							<i class="bi bi-bag-fill"></i>
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{state.cart.length}

							</span>
						</Link>


					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
