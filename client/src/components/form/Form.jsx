import React, { useState } from "react";
import "./Form.scss";

export const Form = () => {
	const [userExist, setUserExist] = useState(true);

	//handling user status
	const isUserExist = (status) => {
		setUserExist(status);
	};

	return <div style={{width:'100%'}}>{userExist ? <LoginForm isUserExist={isUserExist} /> : <SignupForm isUserExist={isUserExist} />}</div>;
};

export const LoginForm = ({ isUserExist }) => {
	return (
		<div className="form-container">
			<div className="form">
				<h4>LOG IN</h4>

				<input placeholder="Email" type="text" className="input email" autoComplete="off" name="email" />
				<input placeholder="Password" type="password" className="input password" autoComplete="off" name="password" />

				<p>
					new user?{" "}
					<span
						onClick={() => {
							isUserExist(false);
						}}
					>
						Register
					</span>
				</p>
				<button className="confirm">CONFIRM</button>
			</div>
		</div>
	);
};

export const SignupForm = ({ isUserExist }) => {
	return (
		<div className="form-container">
			<div className="form">
				<h4>SIGN UP</h4>

				<input placeholder="Name" type="text" className="input name" autoComplete="off" name="name" />
				<input placeholder="Email" type="email" className="input email" autoComplete="off" name="email" />
				<input placeholder="Mobile" type="number" className="input number" autoComplete="off" name="number" />
				<input placeholder="Password" type="password" className="input password" autoComplete="off" name="password" />

				<p>
					existing user?{" "}
					<span
						onClick={() => {
							isUserExist(true);
						}}
					>
						Log In
					</span>
				</p>
				<button className="confirm">CONFIRM</button>
			</div>
		</div>
	);
};
