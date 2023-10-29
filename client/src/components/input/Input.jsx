import React from "react";
import "./Input.scss";

export const Input = ({ placeholder, type, name, value, required, onChange, onBlur, min, max, pattern }) => {
	return (
		<div className="input-container">
			<input
				className="input-component"
				autoComplete="off"
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				required={required}
				min={min}
				max={max}
				pattern={pattern}
			/>
		</div>
	);
};

export const InputSecondary = ({ placeholder, type, name, value, onChange }) => {
	return (
		<div className="input-secondary-container">
			<input
				className="input-component"
				type={type}
				name={name}
				placeholder={placeholder}
				autoComplete="off"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
