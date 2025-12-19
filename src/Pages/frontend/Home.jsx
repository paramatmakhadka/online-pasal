import React, { useEffect, useState } from "react";
import Frontend from "../../layout/Frontend";

function Home() {
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
										<img src={a.thumbnail} alt={a.title} className="w-100" />
										<p>{a.price}</p>
										<p>{a.title}</p>
										<button className="btn btn-primary btn-sm">
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
