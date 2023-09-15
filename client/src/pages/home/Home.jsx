import React from "react";
import "./Home.scss";
import "../../index.scss";
import { Container } from "../../components/Container/Container";
import { BaseButton} from "../../components/button/Button";
import { Header } from "../../components/header/Header";

export const Home = () => {
	return (
		<Container>
			<div className="home-container">
				<Header/>
				<div className="btn-container">
					<BaseButton text="New Data" />
					<BaseButton text="History" />
				</div>
			</div>
		</Container>
	);
};
