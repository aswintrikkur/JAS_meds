import React from "react";
import "./Home.scss";
import { Container } from "../../components/Container/Container";

export const Home = () => {
	return (
		<Container>
			<div className="home-container">
				<h1> JAS_Medicals</h1>
				<div className="btn-container">
					<button className="new-data">New Data</button>
					<button className="history">History</button>
				</div>
			</div>
		</Container>
	);
};
