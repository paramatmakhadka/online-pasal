import React, { useContext, useEffect, useState } from "react";
import Frontend from "../../layout/Frontend";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Home() {
	let { state, dispatch } = useContext(CartContext)
	let [data, setData] = useState([]);
	useEffect(() => {
		async function getData() {
			let pData = await fetch("https://dummyjson.com/products");
			let productData = await pData.json();
			setData(productData.products);
		}
		getData();
	}, []);
	return (
		<>
			<Frontend>
				<section className="py-4">
					<div className="container">
						<h2>Latest Products</h2>
						<div className="row g-4">
							{data.map((a) => (
								<div className="col-lg-3" key={a.id}>
									<div className="p-3 shadow">
										<Link to={`/product/${a.id}`}>
											<img src={a.thumbnail} alt={a.title} className="w-100" />
										</Link>
										<p>{a.price}</p>
										<p>{a.title}</p>
										<button className="btn btn-primary btn-sm" onClick={() => dispatch({ type: 'addtocart', payload: a })}>
											Add to Cart
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</Frontend>
		</>
	);
}

export default Home;
