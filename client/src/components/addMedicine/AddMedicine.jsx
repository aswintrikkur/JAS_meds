import React, { useState } from "react";
import "./AddMedicine.scss";
import { Input } from "../input/Input";
import { BackButton, BaseButton } from "../button/Button";

export const AddMedicine = ({ onClick }) => {
	const [addMedicine, setAddMedicine] = useState({});

	const handleAddMedicine = (event) => {
		setAddMedicine((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
	console.log('ADD medicine',addMedicine);

	return (
		<>
			<div className="bg-blur-container"> </div>
			<div className="add-medicine-container">
				<BackButton onClick={onClick} />
				<h2>Add Medcine Details</h2>
				<form>
					<Input placeholder="Medicine name" type="text" onChange={handleAddMedicine} name="medicineName" />
					<Input placeholder="Purchased Quantity" type="number" onChange={handleAddMedicine} name="quantity" />
					<Input placeholder="intended days" type="number" onChange={handleAddMedicine} name="days" />
					<br />
					<Input placeholder="daily consumption" type="number" onChange={handleAddMedicine} name="dailyConsumption" />
					<label htmlFor="expected-days"> </label>
				</form>
				<p>Expected Date of full consumption:</p>
				<h4>15-10-2023</h4>
				<div style={{ textAlign: "end" }}>
					<BaseButton text="Add To List" onClick={onClick} />
				</div>
			</div>
		</>
	);
};
