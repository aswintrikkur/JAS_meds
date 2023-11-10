import React from "react";
import "./Customer.scss";
import { Container } from "../../components/container/Container";
import {  BaseButton } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { MedicineList } from "../../components/medicineList/MedicineList";
import { useNavigate } from "react-router-dom";
import  { Toaster } from "react-hot-toast";
import { useCustomer } from "../../hooks/useCustomer";

export const Customer = () => {
	const navigate = useNavigate();

	//=============== custom HOOKs ===================
	const { id, customerDetails, handleInput, saveCustomer } = useCustomer();


	return (
		<Container>
			<div>
				<Toaster />
			</div>
			<div className="new-data-container">
				<div className="customer-details">
					<div className="col1">
						<Input
							placeholder="Customer ID"
							type="number"
							onChange={handleInput}
							value={customerDetails?.customerId || ""}
							name="customerId"
							required="required"
						/>
						<Input
							placeholder="Customer Name"
							type="text"
							onChange={handleInput}
							value={customerDetails?.customerName || ""}
							name="customerName"
							required="required"
						/>
						<Input
							placeholder="Address"
							type="text"
							onChange={handleInput}
							value={customerDetails?.address || ""}
							name="address"
						/>
						<Input
							placeholder="Mobile"
							type="number"
							onChange={handleInput}
							value={customerDetails?.mobile || ""}
							name="mobile"
							required="required"
						/>
					</div>
					<div className="col2">
						<Input
							placeholder="Date"
							type="date"
							min="2023-01-01"
							max="2050-12-31"
							onChange={handleInput}
							value={customerDetails?.date || "2023-01-01"}
							name="date"
							// required="required"
						/>
						<Input
							placeholder="Doctor Name"
							type="text"
							onChange={handleInput}
							value={customerDetails?.doctorName || ""}
							name="doctorName"
						/>
						<Input
							placeholder="Staff Name"
							type="text"
							onChange={handleInput}
							value={customerDetails?.staffName || ""}
							name="staffName"
							required="required"
						/>
						{/* //TODO: create validation onClick */}
						<button className="save-customer-details" onClick={saveCustomer}>
							save
						</button>
					</div>
				</div>
				<div className="medicine-details">
					<BaseButton text="ADD Medicine" bgc="#144D5F" color="#ffff" onClick={() => navigate(`/addMed/${id}`)} />
					<MedicineList />
				</div>
			</div>
		</Container>
	);
};
