import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
const [customerDetails, setCustomerDetails] = useState({});




	return <InputContext.Provider value={customerDetails}>{children} </InputContext.Provider>;
};


// ! util function
// export const handleInputOnchange=(event,setTarget)=>{

//     // const [target,setTarget]=useState();

//     setTarget(prev=>({
//         ...prev,
//         [event.target.name]:event.target.value
//     }))


//     // return [target]
// }

