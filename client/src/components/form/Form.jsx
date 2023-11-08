import React, { useContext, useState } from "react";
import "./Form.scss";
import { useInputHandleLocal } from "../../hooks/useInputHandle";
import { InputSecondary } from "../input/Input";
import axios from "axios";
import { API } from "../../api";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../contextAPI/AuthContext";

export const Form = () => {
	const [existingUser, setExistingUser] = useState(true);

	//handling user status
	const handleExistingUser = (status) => {
		setExistingUser(status);
	};

	return (
		<div style={{ width: "100%" }}>
			{existingUser ? (
				<LoginForm handleExistingUser={handleExistingUser} />
			) : (
				<SignupForm handleExistingUser={handleExistingUser} />
			)}
		</div>
	);
};

//=========== Login Form =================
export const LoginForm = ({ handleExistingUser }) => {
	const [temp, setTemp] = useState({ email: "", password: "" });

	const { handleChangeLocal } = useInputHandleLocal();
	const {fetchData}= useContext(AuthContext);

	const userLogin = async () => {
		try {
			const response = await axios(`${API}/api/user/login`, {
				method: "POST",
				data: temp,
			});
			toast.success('success')
			console.log(response);
			fetchData(response.data);

		} catch (error) {
			// console.log(error.response.data.message);
			toast.error(error.response.data.message || 'something went wrong')
		}
	};

	return (
		<div className="form-container">
			<div className="form">
			<Toaster     />

				<h4>LOG IN</h4>

				<InputSecondary
					placeholder="Email"
					type="text"
					name="email"
					onChange={(event) => {
						handleChangeLocal(event, setTemp);
					}}
				/>

				<InputSecondary
					placeholder="Password"
					type="password"
					name="password"
					onChange={(event) => {
						handleChangeLocal(event, setTemp);
					}}
				/>

				<p>
					new user?{" "}
					<span
						onClick={() => {
							handleExistingUser(false);
						}}
					>
						Register
					</span>
				</p>
				<button className="submit" onClick={userLogin}>
					SUBMIT
				</button>
			</div>
		</div>
	);
};

//========= Signup Form ==========
export const SignupForm = ({ handleExistingUser }) => {





	return (
		<div className="form-container">
			<div className="form">
				<h4>SIGN UP</h4>

				<InputSecondary placeholder="Name" type="text" name="name" />
				<InputSecondary placeholder="Email" type="email" name="email" />
				<InputSecondary placeholder="Mobile" type="number" name="number" />
				<InputSecondary placeholder="Password" type="password" name="password" />

				<p>
					existing user?
					<span
						onClick={() => {
							handleExistingUser(true);
						}}
					>
						Log In
					</span>
				</p>
				<button className="submit">SUBMIT</button>
			</div>
		</div>
	);
};
