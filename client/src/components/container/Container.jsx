import React from "react";
import "./Container.scss";
import { Header } from "../header/Header";

export const Container = ({ children }) => {
	return (
		<div className="container">
			<Header />
			{children}
		</div>
	);
};

export const CardContainer = ({ children }) => {
	return <div className="card-container">{children}</div>;
};
