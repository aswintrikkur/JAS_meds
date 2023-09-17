import React, { useContext, useState } from "react";
import "./AddMedicine.scss";
import { Input } from "../../components/input/Input";
import { BackButton, BaseButton } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/container/Container";
import { STATE_NAME } from "../../utils/Utils";
import { useInputHandle, useInputHandleLocal } from "../../hooks/useInputHandle";

export const AddMedicine = ({ date }) => {
	const [tempField, setTempField] = useState({
		medicineName: "",
		quantity: "",
		days: "",
		dailyConsumption: "",
	});
	const [medDueDate, setMedDueDate] = useState(0);

	const navigate = useNavigate();

	// Input handling for local state
	const { handleChangeLocal } = useInputHandleLocal();
	console.log("TempFields:", tempField);

	// Input handling using Custom HOOK and fetching Data from CONTEXTAPI
	const { handleChange, customerDetails, handleSubmit } = useInputHandle();



	const findMedDueDate = () => {
		const currentDate= customerDetails.date;
		console.log("currentDate:", currentDate);
		console.log(parseInt(currentDate).toString());
	};

	return (
		<Container>
			<div className="bg-blur-container">{/* a div for Blur Background */}</div>
			<div className="add-medicine-container">
				<BackButton onClick={() => navigate(-1)} />
				<h2>Add Medcine Details</h2>
				<form>
					<Input
						placeholder="Medicine name"
						type="text"
						onChange={(event) => handleChangeLocal(event, setTempField)}
						value={tempField.medicineName}
						name="medicineName"
					/>
					<Input
						placeholder="Purchased Quantity"
						type="number"
						onChange={(event) => handleChangeLocal(event, setTempField)}
						value={tempField.quantity}
						name="quantity"
					/>
					<Input
						placeholder="intended days"
						type="number"
						onChange={(event) => handleChangeLocal(event, setTempField)}
						onBlur={() => findMedDueDate()}
						value={tempField.days}
						name="days"
					/>
					<p>OR</p>
					<Input
						placeholder="daily consumption"
						type="number"
						onChange={(event) => handleChangeLocal(event, setTempField)}
						onBlur={() => findMedDueDate()}
						value={tempField.dailyConsumption}
						name="dailyConsumption"
					/>
					{/* <label htmlFor="expected-days"></label> */}
				</form>
				<p>
					Medicine Due Date:<span>{medDueDate}</span>
				</p>

				<div className="add-to-list">
					<BaseButton
						text="Add To List"
						onClick={() => {
							handleSubmit(tempField), navigate("/newData");
						}}
					/>
				</div>
			</div>
		</Container>
	);
};
