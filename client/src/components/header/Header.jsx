import React, { useContext } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthContext";
import { CardContainer } from "../container/Container";

export const Header = () => {
	const navigate = useNavigate();
	const { user, fetchUser } = useContext(AuthContext);

	return (
		<div className="header-container">
			<div className="row1">
				<h1>JAS MEDS</h1>

				<div className="profile">
					<img
						src="/icons/profile.svg"
						alt=""
						onClick={() => {
							fetchUser(false);
						}}
					/>
				</div>

				{/* <button onClick={()=>{fetchUser(false)}} >Logout</button> */}
			</div>
			<ul className="nav">
				<li
					onClick={() => {
						navigate("/");
					}}
				>
					Home
				</li>
				<li
					onClick={() => {
						navigate("/newData");
					}}
				>
					Customer
				</li>
				<li
					onClick={() => {
						navigate("/history");
					}}
				>
					History
				</li>
				<li></li>
			</ul>
		</div>
	);
};
