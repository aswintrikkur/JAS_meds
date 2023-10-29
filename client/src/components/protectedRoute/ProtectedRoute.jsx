import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthContext";

export const ProtectedRoute = () => {

	const {user}= useContext(AuthContext);


	if (!user) {
		return <Navigate to="/" />;
	} else {
		return <Outlet />;
	}
};
