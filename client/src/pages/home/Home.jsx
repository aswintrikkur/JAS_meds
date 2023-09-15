import React from "react";
import "./Home.scss";
import "../../index.scss";
import { BaseButton } from "../../components/button/Button";
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
					<BaseButton text="New Data"  onClick={()=>{navigate('/newData')}}/>
					<BaseButton text="History" />
				</div>
			</div>
		</Container>
	);
};
