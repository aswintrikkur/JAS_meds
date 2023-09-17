import { useContext, useState } from "react";
import { NewDataContext } from "../contextAPI/NewDataContext";
import { STATE_NAME } from "../utils/Utils";

// * For handling input boxes of 'NewData.jsx' and 'AddMedicine.jsx'
//   States will be stored in ContextApi (NewDataContext)
export const useInputHandle = () => {
	const { customerDetails, setCustomerDetails, listOfMeds, setListOfMeds } = useContext(NewDataContext);

	//*  In latest commit, onChange event stores data locally and submit event stores data into ContextAPI

	// AddMedicine submit button handle
	const handleSubmit = (data) => {
		setListOfMeds((prev) => [...prev, data]);

        setCustomerDetails(prev=>{
            const newData = {...prev};
            newData.listOfMeds.push(data);
            return newData
        })
    };

	return { customerDetails, listOfMeds,  handleSubmit };
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
