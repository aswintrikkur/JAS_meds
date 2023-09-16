import React, { useState } from "react";
import "./NewData.scss";
import { Container } from "../../components/container/Container";
import { Header } from "../../components/header/Header";
import { BackButton, BaseButton } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { AddMedicine } from "../../components/addMedicine/AddMedicine";
import { MedicineList } from "../../components/medicineList/MedicineList";

export const NewData = () => {
	const [showAddMedicine,setShowAddMedicine]=useState(false);
	const [customerDetails,setCustomerDetails]=useState({});

// * Functions

	// for toggling b/w  <AddMedicine/>  
	const toggleAddMedicine=()=>{
		setShowAddMedicine(prev=>!prev);
	}

	const handleCustomerDetails=(event)=>{
		setCustomerDetails(prev=>({
			...prev,
			[event.target.name]:event.target.value
		}))
		// console.log(event.target.value);
	}

	console.log('custome Details:' , customerDetails);


	return (
		<Container>
			<div className="new-data-container">
				<Header />
				<div className="customer-details">
					{/* <input type="text" placeholder="Enter customer Name" className="custumer-name" name="customerName" /> */}
					<div className="col1">
						<Input placeholder="Customer ID" type="number" onChange={handleCustomerDetails} name="customerId" />
						<Input placeholder="Customer Name" type="text" onChange={handleCustomerDetails} name="customerName" />
						<Input placeholder="Address" type="text" onChange={handleCustomerDetails} name="address" />
						<Input placeholder="Mobile" type="number" onChange={handleCustomerDetails} name="mobile" />
					</div>
					<div className="col2">
						<Input placeholder="Date" type="date" onChange={handleCustomerDetails} name="date" />
						<Input placeholder='Doctor Name' type='text' onChange={handleCustomerDetails} name='doctorName'/>
					</div>
				</div>
				<div className="medicine-details">
					<BaseButton text="ADD Medicine" bgc='#233545' color='#a39e9e' onClick={toggleAddMedicine} />
					{showAddMedicine && <AddMedicine onClick={toggleAddMedicine} />}
					<MedicineList  />
				</div>
			</div>
		</Container>
	);
};
