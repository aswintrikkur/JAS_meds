


//*    For handling input fields locally.
//     States will be stored in local component itself
export const useInputHandleLocal = () => {
	const handleChangeLocal = (event, setState) => {

		setState((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
        // console.log('handleChangeLocal Executed');
	};
	return { handleChangeLocal };
};
