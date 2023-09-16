import React, { useContext, useEffect, useState } from "react";
import "./NewData.scss";
import { Container } from "../../components/container/Container";
import { BackButton, BaseButton } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { MedicineList } from "../../components/medicineList/MedicineList";
import { useNavigate } from "react-router-dom";
import { STATE_NAME } from "../../utils/Utils";
import { NewDataContext, useInputHandle } from "../../contextAPI/NewDataContext";

export const NewData = () => {
	// const [customerDetails, setCustomerDetails] = useState({});
	const navigate = useNavigate();

	//* Input handling using contextAPI and Custom Hooks
	const [handleChange] = useInputHandle();

	
	const {  customerDetails } = useContext(NewDataContext);
	console.log("Customer Details:", customerDetails);
	


	return (
		<Container>
			<div className="new-data-container">
				<div className="customer-details">
					<div className="col1">
						<Input
							placeholder="Customer ID"
							type="number"
							// onChange={(event) => handleInputOnchange(event, setCustomerDetails)}
							onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							name="customerId"
						/>
						<Input
							placeholder="Customer Name"
							type="text"
							onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							name="customerName"
						/>
						<Input
							placeholder="Address"
							type="text"
							onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							name="address"
						/>
						<Input
							placeholder="Mobile"
							type="number"
							onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							name="mobile"
						/>
					</div>
					<div className="col2">
						<Input
							placeholder="Date"
							type="date"
							onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							name="date"
						/>
						<Input
							placeholder="Doctor Name"
							type="text"
							onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
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
