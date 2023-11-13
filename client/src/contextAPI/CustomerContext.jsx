import { createContext, useState } from "react";

// ! ----------- CONTEXT ----------------
// * --------- State Management for ['NewData.jsx','AddMedicine.jsx','MedicineList.jsx'] ----------------
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
	const [id, setId] = useState();

	const [customerDetails, setCustomerDetails] = useState({
		customerId: "",
		customerName: "",
		address: "",
		mobile: "",
		date: "",
		doctorName: "",
		staffName: "",
		medDetails: {
			medList: [],
			lastDue:"",
			nrxDrugs: '',
			img: {},
			comments: '',
		},
	});
	const [listOfMeds, setListOfMeds] = useState([]);

	return (
		<CustomerContext.Provider value={{ id, setId, customerDetails, setCustomerDetails, listOfMeds, setListOfMeds }}>
			{children}
		</CustomerContext.Provider>
	);
};