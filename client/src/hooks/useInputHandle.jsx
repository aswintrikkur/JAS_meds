import { useContext, useState } from "react";
import { NewDataContext } from "../contextAPI/NewDataContext";
import { STATE_NAME } from "../utils/Utils";

// * For handling input boxes of 'NewData.jsx' and 'AddMedicine.jsx'
//   States will be stored in ContextApi (NewDataContext)
export const useInputHandle = () => {
	// const { customerDetails, setCustomerDetails, addMedicine, setAddMedicine, listOfMeds, setListOfMeds } =
	// 	useContext(NewDataContext);

	const handleChange = (event, state) => {
		let setFunction;
		if (state == STATE_NAME.CUSTOMER_DETAILS) {
			setFunction = setCustomerDetails;
			// setFunction((prev) => ({
			// 	...prev,
			// 	[event.target.name]: event.target.value,
			// }));
			setFunction((prev) => [
				...prev,
				{
					[event.target.name]: event.target.value,
				},
			]);
		}

		//  else if (state == STATE_NAME.ADD_MEDICINE) {
		// 	setFunction = setAddMedicine;
		// 	setFunction((prev) => ({
		// 		...prev,
		// 		[event.target.name]: event.target.value,
		// 	}));
		// }
	};

	const handleSubmit = (data) => {
		setListOfMeds((prev) => [...prev, data]);
		// setCustomerDetails((prev) => ({
		// 	...prev,
		// 	listOfMeds: data,
		// }));
		setCustomerDetails(prev=>([
            // const data = listOfMeds
            // {
            //     ...prev[0],
            //     // listOfMeds:listOfMeds.push()
            // }
        ]))
        console.log('New medicine add to list :error here');
	};

	return { customerDetails, addMedicine, listOfMeds, handleChange, handleSubmit };
};

//*    For handling input fields locally.
//     States will be stored in local component itself
export const useInputHandleLocal = () => {
	const handleChangeLocal = (event, setState) => {
		setState((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return { handleChangeLocal };
};
