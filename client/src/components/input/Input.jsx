import React from "react";
import "./Input.scss";

export const Input = ({ placeholder, type,  name }) => {
	return (
		<div className="input-container">
			<input className='input-component' type={type} placeholder={placeholder}  name={name} />
		</div>
	);
};
