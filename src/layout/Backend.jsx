import React from "react";
import Aside from "../component/Aside";

function Backend({ children }) {
	return (
		<>
			<div className="container-fluid vh-100 p-0">
				<header className="bg-dark text-white py-3 px-4 text-center ">
					Admin Dashboard
				</header>
				<div className="row g-0 h-100">
					<div className="col-lg-3">
						<Aside />
					</div>
					<div className="col-lg-9 p-4">
						{children}
					</div>

				</div>
			</div>

		</>
	)
}

export default Backend;
