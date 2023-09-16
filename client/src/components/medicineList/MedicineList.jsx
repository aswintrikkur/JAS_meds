import React, { useState } from "react";
import "./MedicineList.scss";
import { BaseButton } from "../button/Button";

export const MedicineList = () => {

	const [file, setFile] = useState({
		data: {},
		preview: "No file chosen",
	});
	const handleChooseFile = (event) => {
		setFile((prev) => ({ ...prev, data: event.target.files[0],
		preview:event.target.files[0].name  }));

	};
	// console.log(file);

	return (
		<div className="medicine-list-container">
			<h3>List of Medicines</h3>
			<div className="list">
				<ul>
					<li>name of medicines</li>
					<li>adipisci porro placeat dolore iusto</li>
					<li>Lorem ipsum dolor</li>
					<li>sit amet consectetur </li>
					<li>adipisicing elit</li>
					<li>hkhkgfl</li>
				</ul>
			</div>
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
	);
};
