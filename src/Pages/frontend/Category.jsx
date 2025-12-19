import React, { useEffect, useState } from "react";
import Frontend from "../../layout/Frontend";
import { Link, useParams } from "react-router-dom";

function Category() {
	let [data, setData] = useState([]);
	let { cid } = useParams()
	useEffect(() => {
		async function getData() {
			let pData = await fetch(`https://dummyjson.com/products/category/${cid}`);
			let productData = await pData.json();
			setData(productData.products);
		}
		getData();
	}, [cid]);
	return (
		<>
			<Frontend>
				<section>
					<div className="container">
						<section className="py-4">
							<div className="container">
								<h2>{cid} Products</h2>
								<div className="row g-4">
									{data.map((a) => (
										<div className="col-lg-3" key={a.id}>
											<div className="p-3 shadow">
												<Link to={`/product/${a.id}`}>
													<img src={a.thumbnail} alt={a.title} className="w-100" />
												</Link>
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
					</div>
				</section>
			</Frontend>
		</>
	)
}

export default Category;
