import React, { useContext } from "react";
import Frontend from "../../layout/Frontend";
import { CartContext } from "./CartContext";

function Cart() {
	let { state, dispatch } = useContext(CartContext);

	if (state.cart.length === 0) {
		return (
			<Frontend>
				<div className="container text-center mt-5">
					<h3>No items in Cart 🛒</h3>
					<p>Please add some products.</p>
				</div>
			</Frontend>
		);
	}
	return (
		<>

			<Frontend>
				<section>
					<div className="container">
						<div className="contentbar">
							{/* Start row */}
							<div className="row">
								{/* Start col */}
								<div className="col-md-12 col-lg-12 col-xl-12">
									<div className="card m-b-30">
										<div className="card-header">
											<h5 className="card-title">Cart</h5>
										</div>
										<div className="card-body">
											<div className="row justify-content-center">
												<div className="col-lg-10 col-xl-8">
													<div className="cart-container">
														<div className="cart-head">
															<div className="table-responsive">
																<table className="table table-borderless">
																	<thead>
																		<tr className="text-center">
																			<th scope="col">Action</th>
																			<th scope="col">Photo</th>
																			<th scope="col">Product</th>
																			<th scope="col">Qty</th>
																			<th scope="col">Price</th>
																			<th scope="col" className="text-right">
																				Total
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		{state.cart.map((a) => (
																			<tr>
																				<td>
																					<a href="#" className="text-danger">
																						<i
																							class="bi bi-trash"
																							onClick={() =>
																								dispatch({
																									type: "remove",
																									payload: a,
																								})
																							}
																						></i>
																					</a>
																				</td>
																				<td>
																					<img
																						src={a.thumbnail}
																						className="img-fluid w-100"
																						alt="product"
																					/>
																				</td>
																				<td>{a.title}</td>
																				<td>
																					<div className="form-group mb-0">
																						<input
																							type="number"
																							className="form-control cart-qty"
																							name="cartQty1"
																							id="cartQty1"
																							defaultValue={1}
																						/>
																					</div>
																				</td>
																				<td>{a.price}</td>
																				<td className="text-right">$500</td>
																			</tr>
																		))}
																	</tbody>
																</table>
															</div>
														</div>
														<div className="cart-body">
															<div className="row">
																<div className="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6">
																	<div className="order-note">
																		<form>
																			<div className="form-group">
																				<div className="input-group">
																					<input
																						type="search"
																						className="form-control"
																						placeholder="Coupon Code"
																						aria-label="Search"
																						aria-describedby="button-addonTags"
																					/>
																					<div className="input-group-append">
																						<button
																							className="input-group-text"
																							type="submit"
																							id="button-addonTags"
																						>
																							Apply
																						</button>
																					</div>
																				</div>
																			</div>
																			<div className="form-group">
																				<label htmlFor="specialNotes">
																					Special Note for this order:
																				</label>
																				<textarea
																					className="form-control"
																					name="specialNotes"
																					id="specialNotes"
																					rows={3}
																					placeholder="Message here"
																					defaultValue={""}
																				/>
																			</div>
																		</form>
																	</div>
																</div>
																<div className="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
																	<div className="order-total table-responsive ">
																		<table className="table table-borderless text-right">
																			<tbody>
																				<tr>
																					<td>Sub Total :</td>
																					<td>$1000.00</td>
																				</tr>
																				<tr>
																					<td>Shipping :</td>
																					<td>$0.00</td>
																				</tr>
																				<tr>
																					<td>Tax(18%) :</td>
																					<td>$180.00</td>
																				</tr>
																				<tr>
																					<td className="f-w-7 font-18">
																						<h4>Amount :</h4>
																					</td>
																					<td className="f-w-7 font-18">
																						<h4>$1180.00</h4>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
															</div>
														</div>
														<div className="cart-footer text-right">
															<button
																type="button"
																className="btn btn-info my-1 me-5"
															>
																<i className="ri-save-line ms-2" />
																Update Cart
															</button>
															<a
																href="page-checkout.html"
																className="btn btn-success my-1"
															>
																Proceed to Checkout
																<i className="ri-arrow-right-line ml-2" />
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* End col */}
							</div>
							{/* End row */}
						</div>
					</div>
				</section>
			</Frontend>
		</>
	);
}

export default Cart;
