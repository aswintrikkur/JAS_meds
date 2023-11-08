import React, { useContext, useState } from "react";
import "./MedicineList.scss";
import { BaseButton } from "../button/Button";
import { CardContainer } from "../container/Container";
import { useCustomer } from "../../hooks/useCustomer";

export const MedicineList = () => {
	const [file, setFile] = useState({
		data: {},
		preview: "No file chosen",
	});
	const [toggle,setToggle]=useState(false);

	// Choose and Upload Prescription
	const handleChooseFile = (event) => {
		setFile((prev) => ({ ...prev, data: event.target.files[0], preview: event.target.files[0].name }));
	};
	const handleUploadFile = (event) => {};
	// console.log(file);

	//* toggle NRX drugs drop-down field
	const toggleDropDown = (event) => {
		// if (event.target.checked) {
			setToggle(prev=>!prev);
		// }
	};




//====== Custom HOOKS =========
	const {listOfMeds , submitCustomer}=useCustomer();

	return (
		<CardContainer>
			<div className="title">
				<h3>List of Medicines</h3>
			</div>
			
			{listOfMeds[0]?.medicineName && (
				<div style={{ position: "relative" }}>
					<div className="medicine-list-container">
						{/* //* LIST OF MEDS */}
						<ul>
							{listOfMeds?.map((data, index) => (
								<div className="med-list" key={index}>
									<li>{data.medicineName}</li>
									<p>{data.dueDate && data.dueDate.toDateString()}</p>
								</div>
							))}
						</ul>

						{/* //* NRX DRUGS  */}
						<div className="nrx-drugs-container">
							<label htmlFor="nrx-drugs">NRX drugs inclued</label>
							<input type="checkbox" defaultChecked={false} onChange={toggleDropDown} name="nrxDrugs" id="nrx-drugs" />
							<br />
							{toggle && (
								<select className="nrx-drug"  name="nrxDrugs" id="">
									<option value="">select</option>
									<option value="">med1</option>
									<option value="">med2</option>
									<option value="">med3</option>
									<option value="">other</option>
								</select>
							)}
						</div>

						{/* //* FILE UPLOAD  */}
						<div className="file-upload">
							<div className="row1">
								<label htmlFor="prescription">
									choose file
									<input id="prescription" type="file" accept="image/*" onChange={handleChooseFile} />
								</label>
								<p>{file.preview}</p>
							</div>
							<button className="prescription-upload">upload</button>
						</div>
					</div>
					<div className="submit-btn">
						{/* //TODO: validation onSubmit */}
						<BaseButton text="SUBMIT"  onClick={submitCustomer}/>
					</div>
				</div>
			)}
		</CardContainer>
	);
};
