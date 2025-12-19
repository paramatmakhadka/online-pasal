import React from "react";

function Footer() {
	return (
		<>
			<footer
				className="section footer-classic context-dark bg-image text-white"
				style={{ background: "#2d3246" }}
			>
				<div className="container">
					<div className="row row-30">
						<div className="col-md-4 col-xl-5">
							<div className="pr-xl-4">
								<a className="brand" href="index.html">
									<img
										className="brand-logo-light"
										src="https://smartdoko.com/images/logo-smartdoko.png"
										alt
										width={140}
										height={37}
										srcSet="images/agency/logo-retina-inverse-280x74.png 2x"
									/>
								</a>
								<p>
									We are an award-winning creative agency, dedicated to the best
									result in web design, promotion, business consulting, and
									marketing.
								</p>
								{/* Rights*/}
								<p className="rights">
									<span>©&nbsp; </span>
									<span className="copyright-year">2018</span>
									<span>&nbsp;</span>
									<span>Waves</span>
									<span>.&nbsp;</span>
									<span>All Rights Reserved.</span>
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<h5>Contacts</h5>
							<dl className="contact-list">
								<dt>Address:</dt>
								<dd>798 South Park Avenue, Jaipur, Raj</dd>
							</dl>
							<dl className="contact-list">
								<dt>email:</dt>
								<dd>
									<a href="mailto:#">dkstudioin@gmail.com</a>
								</dd>
							</dl>
							<dl className="contact-list">
								<dt>phones:</dt>
								<dd>
									<a href="tel:#">https://karosearch.com</a> <span>or</span>{" "}
									<a href="tel:#">https://karosearch.com</a>
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
			</footer>
		</>
	);
}

export default Footer;
