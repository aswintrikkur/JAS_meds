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
	const toggleAddMedicine=()=>{
		setShowAddMedicine(prev=>!prev);
		console.log('button');
	}
	console.log(showAddMedicine);
	return (
		<Container>
			<div className="new-data-container">
				<Header />
				<div className="customer-details">
					{/* <input type="text" placeholder="Enter customer Name" className="custumer-name" name="customerName" /> */}
					<div className="col1">
						<Input placeholder="Customer ID" type="number" name="customerId" />
						<Input placeholder="Customer Name" type="text" name="customerName" />
						<Input placeholder="Address" type="text" name="address" />
						<Input placeholder="mobile" type="number" name="number" />
					</div>
					<div className="col2">
						<Input placeholder="Date" type="date" name="date" />
						<select name="doctorName" className="doctor-name">
							<option value="">Doctor Name</option>
							<option value="Don Davis">Don Davis</option>
							<option value="Doctor2">Doctor2</option>
							<option value="Doctor3">Doctor3</option>
							<option value="">other</option>
						</select>
						{/* <Input placeholder="Doctor Name" type="drop-down" name="doctor-name" /> */}
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
