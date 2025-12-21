import React from "react";
import Logo from "../assets/logo-nobg.png"
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<footer
				className="section footer-dark context-dark bg-dark text-white"
				style={{ background: "#2d3246" }}
			>
				<div className="container">
					<div className="row row-30">
						<div className="col-md-4 col-xl-5">
							<div className="pr-xl-4">

								<Link to="/">
									<img
										className="brand-logo-light"
										src={Logo}
										alt="logo"
										class="w-50"
									/>
								</Link>
								<p>
									We are an award-winning ecommerce platform, dedicated to the providing best service and products at affordable rate.
								</p>
								{/* Rights*/}
								<p className="rights">
									<span>©&nbsp; </span>
									<span className="copyright-year">2025</span>
									<span>&nbsp;</span>
									<span>Online Pasal</span>
									<span>.&nbsp;</span>
									<span>All Rights Reserved.</span>
									<span>By Paramatma.</span>
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<h5>Contacts</h5>
							<dl className="contact-list">
								<dt>Address:</dt>
								<dd>798 South Park Avenue, NSW, Aus</dd>
							</dl>
							<dl className="contact-list">
								<dt>email:</dt>
								<dd>
									<a href="mailto:#">hell.admin@gmail.com</a>
								</dd>
							</dl>
							<dl className="contact-list">
								<dt>phones:</dt>
								<dd>
									<a href="tel:#">01-5511221</a> <span>or</span>{" "}
									<a href="tel:#">01-4422114</a>
								</dd>
							</dl>
						</div>
						<div className="col-md-4 col-xl-3">
							<h5>Links</h5>
							<ul className="nav-list">
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Projects</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">Contacts</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer >
		</>
	);
}

export default Footer;
