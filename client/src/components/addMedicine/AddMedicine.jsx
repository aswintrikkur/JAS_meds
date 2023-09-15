import React from "react";
import "./AddMedicine.scss";
import { Input } from "../input/Input";
import { BackButton, BaseButton } from "../button/Button";

export const AddMedicine = ({onClick}) => {
	return (
		<>
			<div className="bg-blur-container"> </div>
			<div className="add-medicine-container">
				<BackButton onClick={onClick} />
				<h2>Add Medcine Details</h2>
				<form>
					<Input placeholder="Medicine name" type="text" name="medicineName" />
					<Input placeholder="Purchased Quantity" type="number" name="quantity" />
					<Input placeholder="intended days" type="number" name="days" />
					<br />
					<Input placeholder="daily consumption" type="number" name="dailyConsumption" />
					<label htmlFor="expected-days"> </label>
				</form>
				<p>Expected Date of full consumption:</p>
				<h4>15-10-2023</h4>
				<div style={{ textAlign: "end" }}>
					<BaseButton text="Add To List" onClick={onClick}/>
				</div>
			</div>
		</>
	);
};
