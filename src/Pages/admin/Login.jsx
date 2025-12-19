import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const handleSubmit = (a) => {
		a.preventDefault()
		navigate("/dashboard");
	}
	return (
		<>
			<div className="row d-flex justify-content-center mt-5 ">
				<div className="col-lg-4 shadow p-5 rounded-4 ">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
						</div>
						<div className="mb-3 form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" htmlFor="exampleCheck1">Keep me Signed in</label>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>



		</>
	);
}

export default Login;
