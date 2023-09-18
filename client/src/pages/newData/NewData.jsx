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
		staffName: "",
		listOfMeds: [],
	});
	const navigate = useNavigate();

	// input handle Loacally for onChange events
	const { handleChangeLocal } = useInputHandleLocal();
	console.log("customer details TEMP:", tempField);

	useEffect(() => {
		setTempField(customerDetails);
	}, []);

	const { setCustomerDetails } = useContext(NewDataContext); //Context API using for updating customerDetails
	// save customer details to the context api
	const handleSave = (event, customerData) => {
		// event.preventDefault();
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
							required="required"
						/>
						<Input
							placeholder="Customer Name"
							type="text"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.customerName}
							name="customerName"
							required="required"
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
							required="required"
						/>
					</div>
					<div className="col2">
						<Input
							placeholder="Date"
							type="date"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							min="2023-01-01"
							max="2050-12-31"
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.date || "2023-09-01"}
							name="date"
							required="required"
						/>
						<Input
							placeholder="Doctor Name"
							type="text"
							// onChange={(event) => handleChange(event, STATE_NAME.CUSTOMER_DETAILS)}
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.doctorName}
							name="doctorName"
						/>
						<Input
							placeholder="Staff Name"
							type="text"
							onChange={(event) => handleChangeLocal(event, setTempField)}
							value={tempField.staffName}
							name="staffName"
							required="required"
						/>
						{/* //TODO: create validation onClick */}
						<button className="save-customer-details" onClick={(event) => handleSave(event, tempField)}>
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
