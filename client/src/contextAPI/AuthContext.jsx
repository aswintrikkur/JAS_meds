import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	//! state,function name is different in different files
	const [token, setToken] = useState(localStorage.getItem('token') || false);
	const [user, setUser] = useState( localStorage.getItem('user') || false);
	

	const fetchData = (data) => {
		setToken(data.accessToken);
		setUser(data.user);
		localStorage.setItem("token", data.accessToken);
		localStorage.setItem("user", data.user);
	};



	return <AuthContext.Provider value={{ token,  user, setToken, setUser, fetchData }}>{children}</AuthContext.Provider>;
};
