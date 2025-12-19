import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Frontend({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Frontend;
