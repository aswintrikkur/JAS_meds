import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { NewDataProvider } from "./contextAPI/NewDataContext.jsx";
import { AuthProvider } from "./contextAPI/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<NewDataProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</NewDataProvider>
	</AuthProvider>
);
