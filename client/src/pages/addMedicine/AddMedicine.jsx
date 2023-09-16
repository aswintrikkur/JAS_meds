import React, { useState } from "react";
import "./AddMedicine.scss";
import { Input } from "../../components/input/Input";
import { BackButton, BaseButton } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/container/Container";
import { useInputHandle } from "../../hooks/useInputHandle";

export const AddMedicine = ({date}) => {
	const [addMedicine, setAddMedicine] = useState({});
	const [medDueDate,setMedDueDate]=useState(0);
	const navigate = useNavigate();

	const [handleChange]=useInputHandle(addMedicine);

	const findMedDueDate =()=>{
		console.log('DueDate:', date);

	}

console.log('Add medicine:', addMedicine);

	return (
		<Container>
			<div className="bg-blur-container"> </div>
			<div className="add-medicine-container">
				<BackButton onClick={() => navigate(-1)} />
				<h2>Add Medcine Details</h2>
				<form>
					<Input
						placeholder="Medicine name"
						type="text"
						onChange={(event) => handleChange(event, setAddMedicine)}
						name="medicineName"
					/>
					<Input
						placeholder="Purchased Quantity"
						type="number"
						onChange={(event) => handleChange(event, setAddMedicine)}
						name="quantity"
					/>
					<Input
						placeholder="intended days"
						type="number"
						onChange={(event) => {handleChange(event, setAddMedicine), findMedDueDate()}}
						name="days"
					/>
					{/* <br /> */}
					<p >OR</p>
					<Input
						placeholder="daily consumption"
						type="number"
						onChange={(event) => handleChange(event, setAddMedicine)}
						name="dailyConsumption"
					/>
					{/* <label htmlFor="expected-days"></label> */}
				</form>
				<p>Expected Date of full consumption:</p>
				<h4>{medDueDate}</h4>
				<div style={{ textAlign: "end" }}>
					<BaseButton text="Add To List" onClick={()=>navigate(-1)} />
				</div>
			</div>
		</Container>
	);
};
