import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
const [details,setDetails]=useState();


	return <InputContext.Provider value={details}>{children} </InputContext.Provider>;
};
