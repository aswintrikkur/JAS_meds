import React from "react";
import "./Input.scss";

export const Input = ({ placeholder, type, name, value, required, onChange, onBlur, min, max, pattern }) => {

	

	return (
		<div className="input-container">
			<input className="input-component" type={type} placeholder={placeholder} name={name} value={value}
				onChange={onChange}	onBlur={onBlur} required={required} min={min} max={max}  pattern={pattern}/> 
		</div>
	);
};
