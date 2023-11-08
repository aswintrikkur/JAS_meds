import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { CustomerProvider } from "./contextAPI/CustomerContext.jsx";
import { AuthProvider } from "./contextAPI/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<CustomerProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CustomerProvider>
	</AuthProvider>
);
