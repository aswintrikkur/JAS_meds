import React from "react";
import "./Container.scss";
import { Header } from "../header/Header";
import  {  Toaster } from "react-hot-toast";

export const Container = ({ children }) => {
	return (
		<div className="container">

			<Header />
			{children}
		</div>
	);
};

export const CardContainer = ({bgc, children }) => {
	return <div className="card-container"  style={{backgroundColor: bgc}} >{children}</div>;
};
