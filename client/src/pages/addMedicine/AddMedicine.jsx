import React, { useContext, useState } from "react";
import "./AddMedicine.scss";
import { Input } from "../../components/input/Input";
import { BackButton, BaseButton } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/container/Container";
import { STATE_NAME } from "../../utils/Utils";
import { useInputHandle, useInputHandleLocal } from "../../hooks/useInputHandle";

export const AddMedicine = () => {
	const [selectOption, setSelectOption] = useState({
		name: "days",
		value: "",
	});
	const [tempField, setTempField] = useState({
		medicineName: "",
		quantity: "",
		[selectOption.name]: selectOption.value,
		dueDate: "",
	});
	const [medDueDate, setMedDueDate] = useState();

	const navigate = useNavigate();

	// handling radio button
	const handleSelect = (event) => {
		if (event?.target.name == "select-option") {
			console.log(event.target.value);
			setSelectOption((prev) => ({
				...prev,
				name: event.target.value,
			}));
		}
		findMedDueDate(); //! BUG: Due date not updating when radio button changes after filling the field.
	};

	console.log("selected", selectOption);
	console.log("TempFields:", tempField);
	console.log("medDueDate:", medDueDate);

	// Input handling for local state
	const { handleChangeLocal } = useInputHandleLocal();

	// Input handling using Custom HOOK and fetching Data from CONTEXTAPI
	const { handleChange, customerDetails, handleSubmit } = useInputHandle();

	//! To find due date
	const findMedDueDate = (event) => {
		const { value, name } = event.target;

		// let currentDate =
		const currentDate = new Date(customerDetails.date || Date.now());

		// setTimeout(() => {
		if (name == "days") {
			currentDate.setDate(currentDate.getDate() + Number(value)); //* manipulating currentDate
			console.log(currentDate);
			setTempField((prev) => ({
				...prev,
				dueDate: currentDate,
			}));
			setMedDueDate(currentDate.toDateString());
		}
		if (name == "dailyConsumption") {
			let days = parseInt(tempField.quantity) / parseInt(value);
			currentDate.setDate(currentDate.getDate() + days);
			console.log(currentDate);
			setMedDueDate(currentDate.toDateString());
		}
		// }, 1500);
	};

	return (
		<Container>
			<div className="bg-blur-container">{/* a div for Blur Background */}</div>
			<div className="add-medicine-container">
				<BackButton onClick={() => navigate(-1)} />
				<h2>Add Medcine Details</h2>
				<form>
					<div className="row1">
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
					</div>
					<div className="row2">
						<div className="select-option">
							<div className="col">
								<input
									value="days"
									type="radio"
									defaultChecked
									id="days"
									onChange={handleSelect}
									name="select-option"
								/>
								<label htmlFor="days">Intended Days</label>
							</div>
							<div className="col">
								<input
									value="dailyConsumption"
									type="radio"
									id="consumption"
									onChange={handleSelect}
									name="select-option"
								/>
								<label htmlFor="consumption">Daily Consumption</label>
							</div>
						</div>
						<Input
							placeholder={selectOption.name}
							type="number"
							onChange={(event) => {
								handleChangeLocal(event, setTempField);
								findMedDueDate(event);
							}}
							onBlur={findMedDueDate}
							// value={tempField[selectOption.name]}
							name={selectOption.name}
						/>
					</div>
				</form>
				{/* //TODO: use this btn for findMedDueDate() */}
				{/* <button className="check-due">check</button>*/}	
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
