import React, { useContext } from "react";
import { CustomerContext } from "../contextAPI/CustomerContext";
import toast from "react-hot-toast";
import { API } from "../api";
import axios from "axios";
import { useHandleUser } from "./useHandleUser";

export const useCustomer = () => {
	// ============= context api ============
	const { id, setId, customerDetails, setCustomerDetails, listOfMeds, setListOfMeds } = useContext(CustomerContext);

	//============ Hooks ================
	const { userLogOut } = useHandleUser();

	const handleInput = (event) => {
		setCustomerDetails((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	//======== save customer Details =============
	const saveCustomer = async () => {
		try {
			const { medDetails, ...data } = customerDetails;
			const response = await axios(`${API}/api/customer/details`, {
				method: "POST",
				headers: {
					Authorization: localStorage.getItem("token"),
				},
				data,
			});
			setId(response.data._id);
			toast.success(response.data.message);
		} catch (error) {
			if (error.response.data.message == "jwt expired") {
				userLogOut();
			}
			toast.error(error.response.data.message);
		}
	};

	//===== AddMedicine =====  ADD TO List
	const addMedToList = (data) => {
		setListOfMeds((prev) => [...prev, data]);

		setCustomerDetails((prev) => {
			const newData = { ...prev };

			//* check and initialise listOfMeds before performing operations on it...
			// newData.medDetails.medList = newData.medDetails.medList || [];
			newData.medDetails.medList.push(data);
			return newData;
		});
	};

	//======== find last DueDate =========
	const findFinalDue = () => {
		var result=0;
		
		setCustomerDetails((prev) => {
			const updated = { ...prev };

			updated?.medDetails?.medList?.map((data) => {
				const date = data?.dueDate?.getTime();
				if (date > result) {
					result = date;
				}
			});

			// console.log("result inside ====", new Date());
			updated.medDetails.lastDue = new Date(result);
			return updated;
		});
		// setCustomerDetails((prev) => ({ ...prev, [customerDetails.medDetails.finalDue]: result }));
	};

	//====== Final Submit =========
	const submitCustomer = async () => {
		try {
			console.log(customerDetails.medDetails, "=======medDetails");
			const response = await axios(`${API}/api/customer/details/${id}`, {
				method: "PUT",
				headers: {
					// Accept:"application/json",  //for sending json
					// "Content-Type": "multipart/form-data",  //form sending File
					Authorization: localStorage.getItem("token"),
				},
				data: customerDetails.medDetails, //unwanted properties also passing
			});

			toast.success("Data submitted");
			setCustomerDetails({
				medDetails: {
					medList: [],
					nrxDrugs: "",
					img: {},
				},
			});
			setListOfMeds([]);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		id,
		customerDetails,
		setCustomerDetails,
		listOfMeds,
		handleInput,
		saveCustomer,
		addMedToList,
		findFinalDue,
		submitCustomer,
	};
};
