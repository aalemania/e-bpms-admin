import React from "react";
import { Container } from "react-bootstrap";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const TableLoader = ({ loaderType = "TailSpin", loaderColor = "#555", loaderHeight = 50, loaderWidth = 50 }) => {
	return (
		<Container className="loader-container text-center py-5">
			<Loader type={loaderType} color={loaderColor} height={loaderHeight} width={loaderWidth} />

			<div className="mt-3">
				<small style={{ color: "#999" }}>Loading</small>
			</div>
		</Container>
	);
};

export default TableLoader;
