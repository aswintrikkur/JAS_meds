import React, { useState } from "react";
import "./NewData.scss";
import { Container } from "../../components/container/Container";
import { Header } from "../../components/header/Header";
import { BackButton, BaseButton } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { MedicineList } from "../../components/medicineList/MedicineList";
import { AddMedicine } from "../addMedicine/AddMedicine";
import { useNavigate } from "react-router-dom";
import { handleInputOnchange } from "../../utils/Utils";
//

export const NewData = () => {
	const [customerDetails, setCustomerDetails] = useState({});
	const navigate = useNavigate();

	// * Functions

	const handleCustomerDetails = (event) => {
		// setCustomerDetails(prev=>({
		// 	...prev,
		// 	[event.target.name]:event.target.value
		// }))
		// console.log(event.target.value);
		// const [target] = useInputHandle(event);
		// console.log(target);
	};

	console.log("custome Details:", customerDetails);

	return (
		<Container>
			<div className="new-data-container">
				{/* <Header /> */}
				<div className="customer-details">
					{/* <input type="text" placeholder="Enter customer Name" className="custumer-name" name="customerName" /> */}
					<div className="col1">
						<Input
							placeholder="Customer ID"
							type="number"
							onChange={(event) => handleInputOnchange(event, setCustomerDetails)}
							name="customerId"
						/>
						<Input
							placeholder="Customer Name"
							type="text"
							onChange={(event) => handleInputOnchange(event, setCustomerDetails)}
							name="customerName"
						/>
						<Input
							placeholder="Address"
							type="text"
							onChange={(event) => handleInputOnchange(event, setCustomerDetails)}
							name="address"
						/>
						<Input
							placeholder="Mobile"
							type="number"
							onChange={(event) => handleInputOnchange(event, setCustomerDetails)}
							name="mobile"
						/>
					</div>
					<div className="col2">
						<Input
							placeholder="Date"
							type="date"
							onChange={(event) => handleInputOnchange(event, setCustomerDetails)}
							name="date"
						/>
						<Input
							placeholder="Doctor Name"
							type="text"
							onChange={(event) => handleInputOnchange(event, setCustomerDetails)}
							name="doctorName"
						/>
					</div>
				</div>
				<div className="medicine-details">
					<BaseButton text="ADD Medicine" bgc="#233545" color="#a39e9e" onClick={() => navigate("/addMed")} />
					<MedicineList  />
				</div>
			</div>
		</Container>
	);
};
