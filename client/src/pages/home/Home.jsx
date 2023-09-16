import React from "react";
import "./Home.scss";
import "../../index.scss";
import { BaseButton, HomeButton } from "../../components/button/Button";
import { Header } from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/container/Container";

export const Home = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<div className="home-container">
				<Header />
				<div className="btn-container">
					<HomeButton text="New Data"  onClick={()=>{navigate('/newData')}}/>
					<HomeButton text="History"  onClick={()=>{navigate('/history')}} />
					<HomeButton text="Assign Work" onClick={()=>{navigate('/assignWork')}} />
					<HomeButton text="Expense" onClick={()=>{navigate('/expense')}}/>
					<HomeButton text="Report" onClick={()=>{navigate('/report')}}/>
				</div>
			</div>
		</Container>
	);
};
