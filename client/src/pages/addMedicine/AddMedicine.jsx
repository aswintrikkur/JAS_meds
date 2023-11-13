import React, { useContext, useState } from "react";
import "./AddMedicine.scss";
import { Input } from "../../components/input/Input";
import { BackButton, BaseButton } from "../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/container/Container";
import { useInputHandleLocal } from "../../hooks/useInputHandle";
import { useCustomer } from "../../hooks/useCustomer";

export const AddMedicine = () => {
	const [tempField, setTempField] = useState({
		medicineName: "",
		quantity: "",
		days: "",
		dueDate: "",
		// [selectOption.name]: selectOption.value,
	});
	const [medDueDate, setMedDueDate] = useState();
	
	const navigate = useNavigate();
	const params = useParams();

	//================= custome HOOKs ===========
	const { customerDetails, addMedToList } = useCustomer(); //* important
	const { handleChangeLocal } = useInputHandleLocal(); // Input handling for local state


	// handling radio button
	const handleSelect = (event) => {
		const { value } = event.target;
		if (value === "days") {
			const { dailyConsumption, ...rest } = tempField;
			setTempField({ ...rest,  days: "" });
		} else if (value === "dailyConsumption") {
			const { days, ...rest } = tempField;
			setTempField({ ...rest,  dailyConsumption: "" });
		}
		setMedDueDate(false);
	};

	// handle dynamic input field
	const hanldeInput = (event) => {
		let prop = "days";

		prop = tempField.days === undefined ? "dailyConsumption" : "days";

		setTempField((prev) => ({
			...prev,

			[prop]: event.target.value,
		}));
	};


	//! To find due date
	const findMedDueDate = (event) => {
		const { value } = event.target;
		const currentDate = new Date(customerDetails.date || Date.now());
		let selected;

		selected = tempField.days === undefined ? "dailyConsumption" : "days";

		// setTimeout(() => {
		if (selected == "days") {
			currentDate.setDate(currentDate.getDate() + Number(value)); //* manipulating currentDate
			// console.log(currentDate);
			setTempField((prev) => ({
				...prev,
				dueDate: currentDate,
			}));
			setMedDueDate(currentDate.toDateString());
		}
		if (selected == "dailyConsumption") {
			let days = parseInt(tempField.quantity) / parseInt(value);
			currentDate.setDate(currentDate.getDate() + days);
			// console.log(currentDate);
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
							placeholder={tempField.days === undefined ? "Daily Consumption" : "Days"}
							type="number"
							onChange={(event) => {
								hanldeInput(event);
								findMedDueDate(event);
							}}
							onBlur={findMedDueDate}
							value={tempField.days == undefined ? tempField.dailyConsumption : tempField.days}
							// name={selectOption.name}
						/>
					</div>
				</form>

				<p>
					Medicine Due Date:<span>{medDueDate}</span>
				</p>

				<div className="add-to-list">
					<BaseButton
						text="Add To List"
						onClick={() => {
							addMedToList(tempField);
							navigate("/customer");
						}}
					/>
				</div>
			</div>
		</Container>
	);
};
