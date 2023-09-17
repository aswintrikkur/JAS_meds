import React from "react";
import "./Input.scss";

export const Input = ({ placeholder, type, name, value, onChange, onBlur, min, max }) => {



	return (
		<div className="input-container">
			<input className="input-component" type={type} placeholder={placeholder} name={name} value={value}
				onChange={onChange}	onBlur={onBlur} min={min} max={max} />
		</div>
	);
};
