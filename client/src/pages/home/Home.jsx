import React, { useContext } from "react";
import "./Home.scss";
import "../../index.scss";
import { Container } from "../../components/container/Container";
import { Form } from "../../components/form/Form";
import { AuthContext } from "../../contextAPI/AuthContext";

export const Home = () => {
	const { user } = useContext(AuthContext);

	return (
		<Container>
			<div className="home-container">
				{user && <h2 className="user">welcome <span>{user.username}</span> </h2>}
				
				<div className="title">
					<img src="/images/JAS_gradient.png" alt="" />
					<h3>Track Medicines & Improve Customer Experience</h3>
				</div>
				{!user && <Form />}
			</div>
		</Container>
	);
};
