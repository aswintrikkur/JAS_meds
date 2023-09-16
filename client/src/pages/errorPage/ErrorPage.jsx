import React from "react";
import "./ErrorPage.scss";
import { Container } from "../../components/container/Container";
import { BaseButton } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {

    const navigate= useNavigate();

const handleNavigateBack=()=>{
navigate(-1);

}

	return (
		<Container>
			<div className="error-page-container">
                <h1>404</h1>
                <h2>Page not found</h2>
                <BaseButton text='Go back' color='$bg-color-secondary' onClick={handleNavigateBack}/>
            </div>
		</Container>
	);
};
