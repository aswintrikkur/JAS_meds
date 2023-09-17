import React from "react";
import "./Input.scss";

export const Input = ({ placeholder, type, name, value, onChange }) => {



	return (
		<div className="input-container">
			<input className="input-component" type={type} placeholder={placeholder} name={name} value={value}
				onChange={onChange}	 />
		</div>
	);
};
