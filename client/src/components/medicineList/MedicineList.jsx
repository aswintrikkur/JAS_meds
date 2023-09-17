import React, { useState } from "react";
import "./MedicineList.scss";
import { BaseButton } from "../button/Button";
import { CardContainer } from "../container/Container";
import { useInputHandle } from "../../hooks/useInputHandle";

export const MedicineList = () => {
	const [file, setFile] = useState({
		data: {},
		preview: "No file chosen",
	});

	// Choose and Upload Prescription
	const handleChooseFile = (event) => {
		setFile((prev) => ({ ...prev, data: event.target.files[0], preview: event.target.files[0].name }));
	};
	const handleUploadFile = (event) => {};
	// console.log(file);

	// Fetching Data from CONTEXTAPI using custom HOOK
	const { customerDetails, listOfMeds } = useInputHandle();

	return (
		<CardContainer>
			<div className="medicine-list-container">
				<h3>List of Medicines</h3>
				{/* {customerDetails.map((data,index) => (
					<div className="list" key={data.customerId}>
						<ul>
							<li>{data.listOfMeds.medicineName} </li>
						</ul>
					</div>
				))} */}
				<>
					<label htmlFor="nrx-drugs">NRX drugs inclued</label>
					<input type="checkbox" name="nrxDrugs" id="nrx-drugs" />
				</>
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
				<div className="submit-btn">
					<BaseButton text="SUBMIT" />
				</div>
			</div>
		</CardContainer>
	);
};
