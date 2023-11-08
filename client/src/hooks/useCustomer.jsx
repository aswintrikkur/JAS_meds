import React, { useContext } from "react";
import { CustomerContext } from "../contextAPI/CustomerContext";
import toast from "react-hot-toast";
import { API } from "../api";
import axios from "axios";

export const useCustomer = () => {
	// ============= context api ============
	const { id, setId, customerDetails, setCustomerDetails, listOfMeds, setListOfMeds } = useContext(CustomerContext);

	const handleInput = (event) => {
		setCustomerDetails((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	//======== save customer Details =============
	const saveCustomer = async () => {
		console.log(customerDetails);
		try {
			const { listOfMeds, ...data } = customerDetails;
			const response = await axios(`${API}/api/customer/details`, {
				method: "POST",
				data,
			});
			setId(response.data._id);
			toast.success(response.data.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	//===== AddMedicine =====  ADD TO List
	const addMedToList = (data) => {
		setListOfMeds((prev) => [...prev, data]);

		setCustomerDetails((prev) => {
			const newData = { ...prev };
			newData.listOfMeds?.push(data);
			return newData;
		});
	};

	//====== submit =========
	const submitCustomer = async () => {
		try {

			const response = await axios(`${API}/api/customer/details/${id}`, {
				method: "PUT",
				data: customerDetails.listOfMeds, //unwanted properties also passing
			});
			console.log(response);
			toast.success("Data submitted");
			setCustomerDetails({});
			setListOfMeds([]);
		} catch (error) {
			console.log(error);
		}
	};

	return { id, customerDetails, listOfMeds, handleInput, saveCustomer, addMedToList, submitCustomer };
};
