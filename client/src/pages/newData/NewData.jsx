import React, { useContext, useEffect, useState } from "react";
import "./NewData.scss";
import { Container } from "../../components/container/Container";
import { BackButton, BaseButton } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { MedicineList } from "../../components/medicineList/MedicineList";
import { useNavigate } from "react-router-dom";
import { STATE_NAME } from "../../utils/Utils";
import { useInputHandle, useInputHandleLocal } from "../../hooks/useInputHandle";
import { NewDataContext } from "../../contextAPI/NewDataContext";
// import { NewDataContext, useInputHandle } from "../../contextAPI/NewDataContext";

export const NewData = () => {
	const [tempField, setTempField] = useState({
		customerId: "",
		customerName: "",
		address: "",
		mobile: "",
		date: "",
		doctorName: "",
		listOfMeds: [],
	});
	const navigate = useNavigate();

	// input handle Loacally for onChange events
	const { handleChangeLocal } = useInputHandleLocal();
	console.log("customer details TEMP:", tempField);

	useEffect(() => {
		setTempField(customerDetails);
	}, []);

	
	const {  setCustomerDetails } = useContext(NewDataContext); //Context API using for updating customerDetails
	// save customer details to the context api
	const handleSave = (customerData) => {
		setCustomerDetails(customerData);
	};

	// Fetching data from ContextApi using Hooks.
	const { customerDetails, listOfMeds } = useInputHandle();
	console.log("Customer Details:", customerDetails);
	// console.log("UpdatedList of Meds:", listOfMeds);

	return (
		<Container>
			<div className="new-data-container">
				<div className="customer-details">
					<div className="col1">
						<Input
							placeholder="Customer ID"
							type="number"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.customerId}
							name="customerId"
						/>
						<Input
							placeholder="Customer Name"
							type="text"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.customerName}
							name="customerName"
						/>
						<Input
							placeholder="Address"
							type="text"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.address}
							name="address"
						/>
						<Input
							placeholder="Mobile"
							type="number"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.mobile}
							name="mobile"
						/>
					</div>
					<div className="col2">
						<Input
							placeholder="Date"
							type="date"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.date || '2023-01-10'}
							name="date"
							// value="2018-07-22"
							 min="2023-01-01" max="2050-12-31"
						/>
						<Input
							placeholder="Doctor Name"
							type="text"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.doctorName}
							name="doctorName"
						/>
						<button className="save-customer-details" onClick={() => handleSave(tempField)}>
							save
						</button>
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
