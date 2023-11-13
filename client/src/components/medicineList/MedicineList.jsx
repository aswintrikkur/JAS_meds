import React, { useContext, useState } from "react";
import "./MedicineList.scss";
import { BaseButton } from "../button/Button";
import { CardContainer } from "../container/Container";
import { useCustomer } from "../../hooks/useCustomer";
import axios from "axios";
import { useEffect } from "react";

export const MedicineList = () => {
	//================ local states ========================
	const [file, setFile] = useState({
		img: {},
		preview: "",
		name: "No file chosen",
	});
	const [cloudinary, setCloudinary] = useState("");
	const [toggle, setToggle] = useState(false);

	//====================== Custom HOOKS ===========================
	const { listOfMeds, customerDetails, findFinalDue, setCustomerDetails, submitCustomer } = useCustomer();

	//================== local functions =========================
	//* toggle NRX drugs drop-down field
	const toggleDropDown = (event) => {
		setToggle((prev) => !prev);
	};
	const handleNrxDrugs = (event) => {
		const { value } = event.target;
		setCustomerDetails((prev) => {
			const newData = { ...prev };
			newData.medDetails.nrxDrugs = value;
			return newData;
		});
	};

	// handle comments
	const handleComments = (event) => {
		const { value } = event.target;
		setCustomerDetails((prev) => {
			const newData = { ...prev };
			newData.medDetails.comments = value;
			return newData;
		});
	};

	// Choose/Select image
	const handleChooseFile = (event) => {
		const data = event.target.files[0];
		console.log(data);

		setFile((prev) => ({
			...prev,
			img: data,
			name: data.name,
			preview: URL.createObjectURL(data),
		}));
		setCloudinary('');
	};

	//================= upload to cloudinay =====================
	const uploadFile = async () => {
		console.log("button clicked");
		try {
			const cloud_name = import.meta.env.VITE_CLOUD_NAME;
			const preset_key = import.meta.env.VITE_PRESET_KEY;

			const formData = new FormData();
			formData.append("file", file.img);
			formData.append("upload_preset", preset_key);

			const cloudinaryRes = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);

			setCloudinary(cloudinaryRes.data.secure_url);
			const imgUrl = cloudinaryRes.data.secure_url;

			setCustomerDetails((prev) => {
				const newData = { ...prev };
				newData.medDetails.img = imgUrl;
				return newData;
			});

			console.log(cloudinaryRes);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		findFinalDue();
	}, []);

	return (
		<CardContainer>
			<div className="title">
				<h3>List of Medicines</h3>
			</div>

			{customerDetails.medDetails.medList?.length !== 0 && (
				<h5 className="due-date">
					Due Date <br /> <span>{customerDetails?.medDetails?.lastDue?.toDateString()}</span>
				</h5>
			)}

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
							<input
								type="checkbox"
								defaultChecked={false}
								onChange={toggleDropDown}
								name="nrxDrugs"
								id="nrx-drugs"
							/>
							<br />
							{toggle && (
								<select className="nrx-drug" name="nrxDrugs" id="" onChange={handleNrxDrugs}>
									<option value="select">select</option>
									<option value="med1">med1</option>
									<option value="med2">med2</option>
									<option value="med3">med3</option>
									<option value="other">other</option>
								</select>
							)}
						</div>

						<input type="text" placeholder="Add comments" className="comments" onChange={handleComments} />

						{/* //* FILE UPLOAD  */}
						<div className="file-upload">
							<div className="row1">
								<label htmlFor="prescription">
									choose file
									<input id="prescription" type="file" accept="image/*" onChange={handleChooseFile} />
								</label>
								<p>{file.name}</p>
							</div>
							{cloudinary ? (
								<img src={cloudinary} alt="cloudinary" />
							) : (
								<button className="prescription-upload" onClick={uploadFile}>
									upload
								</button>
							)}
						</div>
					</div>
					<div className="submit-btn">
						{/* //TODO: validation onSubmit */}
						<BaseButton text="SUBMIT" onClick={submitCustomer} />
					</div>
				</div>
			)}
		</CardContainer>
	);
};
