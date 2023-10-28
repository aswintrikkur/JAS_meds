import React from "react";
import "./Home.scss";
import "../../index.scss";
import { Container } from "../../components/container/Container";
import { Form } from "../../components/form/Form";

export const Home = () => {

	return (
		<Container>
			<div className="home-container">
			<div className="title">
					<img src="/images/JAS_gradient.png" alt="" />
					<h3>Track Medicines & Improve Customer Experience</h3>
				</div>

				<Form/>

			</div>
		</Container>
	);
};
