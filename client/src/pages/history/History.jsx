import React, { useEffect, useState } from "react";
import { Container } from "../../components/container/Container";
import "./History.scss";
import axios from "axios";
import { API } from "../../api";

export const History = () => {
	const [data, setData] = useState();
	const [individual, setIndividual] = useState();
	const [show, setShow] = useState(false);

	//====== fetch Data ========
	const fetchHistory = async () => {
		try {
			const response = await axios(`${API}/api/history`, {
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("token"), //todo: implement interceptors for sending token
				},
			});
			setData(response.data.customers);
			// console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	// ===== onclick of individual item =========
	const showDetails = async (event, key) => {
		const response = data.find((item) => item._id === key);
		setIndividual(response);
		// console.log(individual);
	};

	//======= sorting ===============
	const handleSortData = (event) => {
		const { value } = event?.target;
		const sortedData = [...data];

		if (value === "id") {
			sortedData.sort((a, b) => (a.customerId > b.customerId ? 1 : -1));
			setData(sortedData);
		} else if (value === "date") {
			sortedData.sort((a, b) => (a.date > b.date ? 1 : -1));
			setData(sortedData);
		} else if (value === "dueDate") {
			//! not sorting properly in first run.
			sortedData.sort((a, b) => (a.medList[0]?.dueDate < b.medList[0]?.dueDate ? 1 : -1));
			setData(sortedData);
		}
	};

	useEffect(() => {
		fetchHistory();
	}, []);

	return (
		<Container>
			<div className="history-container">
				<h2>History</h2>

				<div className="sort">
					<select name="sort" id="sort" onChange={handleSortData}>
						<option value="sort">sort</option>
						<option value="id">ID</option>
						<option value="dueDate">Due Date</option>
						<option value="date">Date</option>
					</select>
					{/* <button onClick={handleSortData}>sort</button> */}
				</div>

				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							{/* <th>Medicines</th> */}
							<th>Due Date</th>
						</tr>
					</thead>
					<tbody>
						{data?.map((item) => {
							return (
								<tr
									key={item._id}
									onClick={(event) => {
										showDetails(event, item._id);
									}}
								>
									<td> {item.customerId} </td>
									<td> {item.customerName} </td>
									<td> {item?.medDetails.medList[0]?.dueDate?.slice(0, 10)} </td>
								</tr>
							);
						})}
					</tbody>
				</table>

				{individual && (
					<>
						<div className="bg-blur-container"></div>
						<div className="individual">
							<button className="close-btn" onClick={() => setIndividual(false)}>
								X
							</button>
							<h2> customer details</h2>
							<h4 style={{ textAlign: "end" }}>{individual?.date}</h4>

							<div className="details">
								<div className="col1">
									<h4>ID</h4>
									<h4>Name</h4>
									<h4>Address</h4>
									<h4>Doctor</h4>
									<h4>Staff</h4>
									<h4>Due Date</h4>
								</div>
								<div className="col2">
									<h4>{individual?.customerId}</h4>
									<h4>{individual?.customerName}</h4>
									<h4>{individual?.address}</h4>
									<h4>{individual?.doctorName}</h4>
									<h4> {individual?.staffName}</h4>
									<h4> {individual?.medDetails?.lastDue?.slice(0,10)}</h4>
								</div>
							</div>

							<br />
							<h4>
								nrxDrugs: <span style={{ color: "red" }}>{individual.medDetails?.nrxDrugs}</span>
							</h4>
							<h4>
								Comments: <span style={{ color: "red" }}>{individual.medDetails?.comments}</span>
							</h4>
							<br />

							<table>
								<thead>
									<tr>
										<th>Medicine Name</th>
										<th>Due Date</th>
									</tr>
								</thead>
								<tbody>
									{individual?.medDetails?.medList?.map((val) => {
										return (
											<tr key={val._id}>
												<td>{val.medicineName}</td>
												<td>{val?.dueDate?.slice(0, 10)}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
							<div className="img">
								<button
									className="toggle"
									onClick={() => {
										setShow((prev) => !prev);
									}}
								>
									prescription
								</button>
								{show && <img src={individual.medDetails.img} alt="prescription" className="prescription" />}
							</div>
						</div>
					</>
				)}
			</div>
		</Container>
	);
};
