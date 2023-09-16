import { createContext, useContext, useState } from "react";
import { STATE_NAME } from "../utils/Utils";

// ! ----------- CONTEXT ----------------
// ? ---------NewDataContext  ------------
export const NewDataContext = createContext();

export const NewDataProvider = ({ children }) => {
	const [customerDetails, setCustomerDetails] = useState({});
	const [addMedicine, setAddMedicine] = useState({});

	return (
		<NewDataContext.Provider value={{ customerDetails, setCustomerDetails, addMedicine, setAddMedicine }}>
			{children}
		</NewDataContext.Provider>
	);
};

// ! -----------Custom HOOK----------------
// ? ---------useInputHandle  ------------
export const useInputHandle = () => {
	// const [target, setTarget] = useState(initial);

	const { customerDetails, setCustomerDetails, addMedicine, setAddMedicine } = useContext(NewDataContext);

	const handleChange = (event, state) => {
		let setFunction;
		if (state == STATE_NAME.CUSTOMER_DETAILS) {
			setFunction = setCustomerDetails;
			setFunction((prev) => ({
				...prev,
				[event.target.name]: event.target.value,
			}));
		} else if (state == STATE_NAME.ADD_MEDICINE) {
			setFunction = setAddMedicine;
			setFunction((prev) => ({
				...prev,
				[event.target.name]: event.target.value,
			}));
		}
	};
	return [handleChange];
};
