import React, { useState } from "react";
import "./NewData.scss";
import { Container } from "../../components/container/Container";
import { Header } from "../../components/header/Header";
import { BackButton, BaseButton } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { MedicineList } from "../../components/medicineList/MedicineList";
import { AddMedicine } from "../addMedicine/AddMedicine";
import { useNavigate } from "react-router-dom";
import { useInputHandle } from "../../hooks/useInputHandle";
//

export const NewData = () => {
	const [customerDetails, setCustomerDetails] = useState({});
	const navigate = useNavigate();

	// * Functions
	// const {customerDetails} = useContext(InputContext)
	const [handleChange] = useInputHandle(customerDetails);

	console.log("custome Details:", customerDetails);

	return (
		<Container>
			<div className="new-data-container">
				<div className="customer-details">
					<div className="col1">
						<Input
							placeholder="Customer ID"
							type="number"
							// onChange={(event) => handleInputOnchange(event, setCustomerDetails)}
							onChange={(event) => handleChange(event, setCustomerDetails)}
							name="customerId"
						/>
						<Input
							placeholder="Customer Name"
							type="text"
							onChange={(event) => handleChange(event, setCustomerDetails)}
							name="customerName"
						/>
						<Input
							placeholder="Address"
							type="text"
							onChange={(event) => handleChange(event, setCustomerDetails)}
							name="address"
						/>
						<Input
							placeholder="Mobile"
							type="number"
							onChange={(event) => handleChange(event, setCustomerDetails)}
							name="mobile"
						/>
					</div>
					<div className="col2">
						<Input
							placeholder="Date"
							type="date"
							onChange={(event) => handleChange(event, setCustomerDetails)}
							name="date"
						/>
						<Input
							placeholder="Doctor Name"
							type="text"
							onChange={(event) => handleChange(event, setCustomerDetails)}
							name="doctorName"
						/>
					</div>
				</div>
				<div className="medicine-details">
					<BaseButton text="ADD Medicine" bgc="#233545" color="#a39e9e" onClick={() => navigate("/addMed")} />
					<MedicineList />
				</div>
			</div>
		</Container>
	);
};
