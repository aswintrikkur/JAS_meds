import React from "react";
import "./MedicineList.scss";
import { BaseButton } from "../button/Button";

export const MedicineList = () => {
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
			<div className="submit-btn" >
				<BaseButton text="submit" />
			</div>
		</div>
	);
};
