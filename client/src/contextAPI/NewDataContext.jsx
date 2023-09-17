import { createContext, useState } from "react";

// ! ----------- CONTEXT ----------------
// * --------- State Management for ['NewData.jsx','AddMedicine.jsx','MedicineList.jsx'] ----------------
export const NewDataContext = createContext();

export const NewDataProvider = ({ children }) => {
	const [customerDetails, setCustomerDetails] = useState({
		customerId: "",
		customerName: "",
		address: "",
		mobile: "",
		date: "",
		doctorName: "",
		listOfMeds: [],
	});
	const [listOfMeds, setListOfMeds] = useState([]);

	return (
		<NewDataContext.Provider value={{ customerDetails, setCustomerDetails, listOfMeds, setListOfMeds }}>
			{children}
		</NewDataContext.Provider>
	);
};
