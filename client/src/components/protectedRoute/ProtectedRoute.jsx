import axios from "axios";
import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { API } from "../../api";

export const ProtectedRoute = () => {
	const token = localStorage.getItem("token");



	if (!token) {
		return <Navigate to="/" />;
	} else {
		return <Outlet />;
	}
};
