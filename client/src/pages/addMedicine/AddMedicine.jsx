import React, { useContext, useState } from "react";
import "./AddMedicine.scss";
import { Input } from "../../components/input/Input";
import { BackButton, BaseButton } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/container/Container";
import { NewDataContext, useInputHandle } from "../../contextAPI/NewDataContext";
import { STATE_NAME } from "../../utils/Utils";

export const AddMedicine = ({ date }) => {
	const [medDueDate, setMedDueDate] = useState(0);
	const navigate = useNavigate();

	//* Input handling using contextAPI and Custom Hooks
	const [handleChange] = useInputHandle();

	const { addMedicine } = useContext(NewDataContext);
	console.log("Add medicine", addMedicine);

	const findMedDueDate = () => {
		console.log("DueDate:", date);
	};

	// console.log('Add medicine:', addMedicine);

	return (
		<Container>
			<div className="bg-blur-container"> </div>
			<div className="add-medicine-container">
				<BackButton onClick={() => navigate(-1)} />
				<h2>Add Medcine Details</h2>
				<form>
					<Input
						placeholder="Medicine name"
						type="text"
						onChange={(event) => handleChange(event, STATE_NAME.ADD_MEDICINE)}
						name="medicineName"
						value={addMedicine.medicineName}
					/>
					<Input
						placeholder="Purchased Quantity"
						type="number"
						onChange={(event) => handleChange(event, STATE_NAME.ADD_MEDICINE)}
						name="quantity"
						value={addMedicine.quantity}
					/>
					<Input
						placeholder="intended days"
						type="number"
						onChange={(event) => {
							handleChange(event, STATE_NAME.ADD_MEDICINE), findMedDueDate();
						}}
						name="days"
						value={addMedicine.days}
					/>
					<p>OR</p>
					<Input
						placeholder="daily consumption"
						type="number"
						onChange={(event) => handleChange(event, STATE_NAME.ADD_MEDICINE)}
						name="dailyConsumption"
						value={addMedicine.dailyConsumption}
					/>
					{/* <label htmlFor="expected-days"></label> */}
				</form>
				<p>Expected Date of full consumption:</p>
				<h4>{medDueDate}</h4>
				<div style={{ textAlign: "end" }}>
					<BaseButton text="Add To List" onClick={() => navigate(-1)} />
				</div>
			</div>
		</Container>
	);
};
