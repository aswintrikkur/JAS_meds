import React from "react";
import "./Input.scss";

export const Input = ({ placelholder }) => {
	return (
		<div className="input-container">
			<input type="text" placeholder={placelholder} className="custumer-name" name="customerName" />
		</div>
	);
};
