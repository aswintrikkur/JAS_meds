import React from "react";
import "./NewData.scss";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/header/Header";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";

export const NewData = () => {
	return (
		<Container>
			<div className="new-data-container">
				<Header />
				<div className="custumer-details">
					{/* <input type="text" placeholder="Enter customer Name" className="custumer-name" name="customerName" /> */}
					<Input placeholder='Enter customer details' />
					<Button text="Date" />
				</div>
				<div className="medicine-details">
					<Button text="Add medicine" />
				</div>
			</div>
		</Container>
	);
};
