import React from "react";
import Phone from "../assets/telephone.svg";
import { Link } from "react-router-dom";
function Header() {
	return (
		<>
			<header className="py-3">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3">
							<img
								src="https://smartdoko.com/images/logo-smartdoko.png"
								alt="logo"
								className="w-100"
							/>
						</div>
						<div className="col-lg-5 offset-lg-2">
							<form class="d-flex" role="search">
								<input
									class="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button class="btn btn-outline-success" type="submit">
									Search
								</button>
								<Link className="btn btn-danger g-4" type="submit" to="/login">
									Login
								</Link>
							</form>
						</div>
					</div>
				</div>
			</header>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
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

							<li className="nav-item">
								<a className="nav-link disabled" aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
