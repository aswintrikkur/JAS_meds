import React from "react";
import './Header.scss';
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="header-container">
			<div className="row1">
			<h1>JAS MEDS</h1>
			<img src="/icons/profile.svg" alt="" />
			</div>
			<ul className="nav">
				<li onClick={()=>{navigate('/')}}>Home</li>
				<li onClick={()=>{navigate('/newData')}} >Customer</li>
				<li  onClick={()=>{navigate('/history')}} >History</li>
				<li></li>
			</ul>
		</div>
	);
};
