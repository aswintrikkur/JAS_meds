import React, { useContext } from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthContext";
import { CardContainer } from "../container/Container";
import { useHandleUser } from "../../hooks/useHandleUser";

export const Header = () => {
	const navigate = useNavigate();
	const { userLogOut } = useHandleUser();
	const { user } = useContext(AuthContext);

	return (
		<div className="header-container">
			<div className="row1">
				<h1>JAS MEDS</h1>
				{user && (
					<div className="logout">
						{/* <img src="/icons/profile.svg" alt="" /> */}
						<i
							className="fa-solid fa-right-from-bracket fa-xl"
							style={{ color: "#282424" }}
							onClick={() => {
								userLogOut();
							}}
						></i>
					</div>
				)}
			</div>
			<ul className="nav" style={{ visibility: user ? "visible" : "hidden" }}>
				<li
					onClick={() => {
						navigate("/");
					}}
				>
					Home
				</li>
				<li
					onClick={() => {
						navigate("/customer");
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
			</ul>
		</div>
	);
};
