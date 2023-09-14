import React from "react";
import "./AddMedicine.scss";
import { Input } from "../input/Input";

export const AddMedicine = () => {
	return (
			<div className="add-medicine-container">
				<Input placeholder="Medicine name" type="text" name="medicineName" />
				<Input placeholder="Purchased Quantity" type="number" name="quantity" />
				<Input placeholder="intended days" type="number" name="days" />
				<br />
				<Input placeholder="daily consumption" type="number" name="dailyConsumption" />
				<label htmlFor="expected-days"> </label>
				{/* <input type="number" id="expected-days" /> */}
				<p>
					Expected Date of full consumption: <span>15-10-2023</span>{" "}
				</p>
			</div>
	);
};
